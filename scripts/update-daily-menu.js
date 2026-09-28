// 한국전통문화대학교 학식 페이지(knuh.ac.kr)에서 이번 주 식단을 읽어와
// data/daily-menu.json 을 갱신한다. GitHub Actions에서 매주 월요일 아침에 실행된다.
//
// 사용법: node scripts/update-daily-menu.js
//
// 페이지는 파라미터 없이 접속하면 "이번 주" 식단표를 서버에서 렌더링해서 보여준다.
// 요일별로 3개 행(조식/중식/석식)이 묶여 있고, 각 묶음의 첫 행에 그 날짜를 담은
// <input type="hidden" name="mealDate" value="YYYY-MM-DD"> 가 있다. 끼니 셀은
// <td id="{dayIndex}B|L|D">메뉴/메뉴/메뉴</td> 형태이며 dayIndex는 0(월)~6(일)이다.
// 급식이 없는 날은 셀 내용이 "미운영"으로 표시된다.

const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const MEAL_PAGE_URL = 'https://www.knuh.ac.kr/mep/ots/meal/view.do?mnuBaseId=MNU0000499&topBaseId=MNU0000008';
const OUTPUT_PATH = path.join(__dirname, '..', 'data', 'daily-menu.json');
const MEAL_TYPE_BY_SUFFIX = { B: 'breakfast', L: 'lunch', D: 'dinner' };
const NOT_SERVED_TEXT = '미운영';

async function fetchMealPageHtml() {
  const response = await fetch(MEAL_PAGE_URL, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; CSL-MenuSync/1.0; +https://csllso.co.kr)'
    }
  });
  if (!response.ok) {
    throw new Error(`식단 페이지 요청 실패: HTTP ${response.status}`);
  }
  return response.text();
}

function parseWeeklyMenu(html) {
  const $ = cheerio.load(html);

  // 날짜 순서대로 7개(월~일)의 mealDate 값을 수집한다.
  const datesByDayIndex = $('input[name="mealDate"]')
    .map((_, el) => $(el).attr('value'))
    .get();

  const menuByDate = {};

  $('td[id]').each((_, el) => {
    const cellId = $(el).attr('id') || '';
    const match = cellId.match(/^(\d)(B|L|D)$/);
    if (!match) return;

    const [, dayIndexStr, mealSuffix] = match;
    const dayIndex = Number(dayIndexStr);
    const date = datesByDayIndex[dayIndex];
    const mealType = MEAL_TYPE_BY_SUFFIX[mealSuffix];
    if (!date || !mealType) return;

    const rawText = $(el).text().replace(/\s+/g, ' ').trim();
    if (!rawText || rawText === NOT_SERVED_TEXT) return;

    const items = rawText.split('/').map(item => item.trim()).filter(Boolean);
    if (!items.length) return;

    if (!menuByDate[date]) menuByDate[date] = {};
    menuByDate[date][mealType] = items;
  });

  return menuByDate;
}

async function main() {
  const html = await fetchMealPageHtml();
  const menuByDate = parseWeeklyMenu(html);

  const dateCount = Object.keys(menuByDate).length;
  if (dateCount === 0) {
    throw new Error('식단 데이터를 하나도 파싱하지 못했습니다. 학교 페이지 구조가 바뀌었을 수 있습니다.');
  }

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(menuByDate, null, 2) + '\n', 'utf8');
  console.log(`daily-menu.json 갱신 완료 (${dateCount}일치, ${OUTPUT_PATH})`);
}

main().catch(error => {
  console.error('식단 업데이트 실패:', error.message);
  process.exit(1);
});
