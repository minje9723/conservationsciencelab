// Home page specific functionality

// Counter Animation for Impact Metrics
function animateCounters() {
  const counters = document.querySelectorAll('.metric-number[data-target], .hero-metric-number[data-target]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.getAttribute('data-target'));
        
        // Skip if already animated
        if (counter.getAttribute('data-animated') === 'true') {
          return;
        }
        
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60 FPS
        let current = 0;
        
        counter.setAttribute('data-animated', 'true');
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            counter.textContent = target;
            clearInterval(timer);
          } else {
            counter.textContent = Math.floor(current);
          }
        }, 16);
        
        observer.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });
  
  counters.forEach(counter => observer.observe(counter));
}

// Scroll-triggered animations
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.impact-card, .timeline-card, .spotlight-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });
  
  animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'all 0.6s ease-out';
    observer.observe(element);
  });
}

// Parallax effect for background elements
function initParallaxEffects() {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.timeline-header');
    
    parallaxElements.forEach(element => {
      const speed = 0.1;
      element.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });
}

// Load Featured Projects
function loadFeaturedProjects() {
  const projectsGrid = document.getElementById('featuredProjectsGrid');
  if (!projectsGrid || typeof projects === 'undefined') return;

  // Featured Project IDs - Update these to change which projects are featured
  // You can change these IDs to feature different projects
  const featuredProjectIds = [1, 3, 5]; // Change these numbers to feature different projects
  
  // Get featured projects by IDs, or fall back to first 3 if IDs not found
  let featuredProjects = featuredProjectIds
    .map(id => projects.find(p => p.id === id))
    .filter(p => p !== undefined);
  
  // If not enough projects found, fill with first available projects
  if (featuredProjects.length < 3) {
    featuredProjects = projects.slice(0, 3);
  }
  const currentLang = document.documentElement.lang || 'ko';

  projectsGrid.innerHTML = featuredProjects.map(project => {
    const title = currentLang === 'ko' ? project.title_ko : project.title_en;
    const description = currentLang === 'ko' ? project.description_ko : project.description_en;
    const categoryNames = {
      'excavated-conservation': currentLang === 'ko' ? '문화유산 보존처리' : 'Heritage Conservation',
      'site-investigation': currentLang === 'ko' ? '현장 조사 및 분석' : 'Site Survey',
      'designation-research': currentLang === 'ko' ? '지정 연구' : 'Designation Research',
      'preservation-research': currentLang === 'ko' ? '보존 연구' : 'Preservation Research'
    };

    // Use project image if available, otherwise use placeholder with category-specific icon
    const categoryIcons = {
      'excavated-conservation': '🏺',
      'site-investigation': '🔍',
      'designation-research': '📋',
      'preservation-research': '🛡️'
    };
    const categoryGradients = {
      'excavated-conservation': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'site-investigation': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'designation-research': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      'preservation-research': 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    };
    
    const imageHtml = project.images && project.images.length > 0 
      ? `<img src="${project.images[0]}" alt="${title}" loading="lazy">`
      : `<div style="width:100%;height:100%;background:${categoryGradients[project.category] || categoryGradients['excavated-conservation']};display:flex;align-items:center;justify-content:center;color:white;font-size:3.5rem;">${categoryIcons[project.category] || '🔬'}</div>`;

    return `
      <div class="project-card" data-project-id="${project.id}">
        <div class="project-card-image">
          ${imageHtml}
          <span class="project-card-category">${categoryNames[project.category] || project.category}</span>
        </div>
        <div class="project-card-content">
          <h3 class="project-card-title">${title}</h3>
          <p class="project-card-description">${description}</p>
          <div class="project-card-meta">
            <span class="project-card-duration">${project.duration}</span>
            <div class="project-card-arrow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Add click handlers
  projectsGrid.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      window.location.href = 'projects.html';
    });
  });
}

// Load Latest Achievements
function loadLatestAchievements() {
  const achievementsGrid = document.getElementById('latestAchievementsGrid');
  if (!achievementsGrid || typeof achievements === 'undefined') return;

  // Get the 3 most recent achievements
  const latestAchievements = achievements
    .sort((a, b) => b.year - a.year)
    .slice(0, 3);
  const currentLang = document.documentElement.lang || 'ko';

  const typeIcons = {
    'publication': '📄',
    'conference': '🎤',
    'award': '🏆',
    'patent': '⚡'
  };

  achievementsGrid.innerHTML = latestAchievements.map(achievement => {
    const title = currentLang === 'ko' ? achievement.title_ko : achievement.title_en;
    const authors = currentLang === 'ko' ? (achievement.authors_ko || achievement.authors) : achievement.authors;
    const journal = currentLang === 'ko' ? (achievement.journal_ko || achievement.journal || achievement.event_ko || achievement.event) : (achievement.journal || achievement.event);
    const keywords = currentLang === 'ko' ? (achievement.keywords_ko || achievement.keywords) : achievement.keywords;

    return `
      <div class="achievement-card" data-type="${achievement.type}" data-achievement-id="${achievement.id}">
        <div class="achievement-card-header">
          <div class="achievement-card-icon">${typeIcons[achievement.type] || '📋'}</div>
          <span class="achievement-card-year">${achievement.year}</span>
        </div>
        <h3 class="achievement-card-title">${title}</h3>
        <p class="achievement-card-authors">${authors}</p>
        ${journal ? `<p class="achievement-card-journal">${journal}</p>` : ''}
        ${keywords && keywords.length > 0 ? `
          <div class="achievement-card-keywords">
            ${keywords.slice(0, 3).map(keyword => `<span class="keyword-tag">${keyword}</span>`).join('')}
          </div>
        ` : ''}
      </div>
    `;
  }).join('');

  // Add click handlers
  achievementsGrid.querySelectorAll('.achievement-card').forEach(card => {
    card.addEventListener('click', () => {
      window.location.href = 'achievements.html';
    });
  });
}

// Load Gallery Preview
function loadGalleryPreview() {
  const galleryGrid = document.getElementById('galleryPreviewGrid');
  if (!galleryGrid || typeof galleryItems === 'undefined') return;

  // Get 6 most recent gallery items
  const previewItems = galleryItems
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 6);
  const currentLang = document.documentElement.lang || 'ko';

  const categoryNames = {
    'lab-activities': currentLang === 'ko' ? '연구실 활동' : 'Lab Activities',
    'equipment': currentLang === 'ko' ? '장비' : 'Equipment',
    'research': currentLang === 'ko' ? '연구' : 'Research',
    'conferences': currentLang === 'ko' ? '컨퍼런스' : 'Conferences',
    'achievements': currentLang === 'ko' ? '성과' : 'Achievements'
  };

  const galleryIcons = {
    'lab-activities': '🔬',
    'equipment': '⚙️',
    'research': '📊',
    'conferences': '🎤',
    'achievements': '🏆'
  };

  const galleryGradients = {
    'lab-activities': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'equipment': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'research': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'conferences': 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'achievements': 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
  };

  galleryGrid.innerHTML = previewItems.map(item => {
    const title = currentLang === 'ko' ? item.title_ko : item.title_en;
    const description = currentLang === 'ko' ? item.description_ko : item.description_en;

    // Use placeholder gradient with category-specific icon if no image
    const imageHtml = item.image 
      ? `<img src="${item.image}" alt="${title}" class="gallery-item-image" loading="lazy">`
      : `<div class="gallery-item-image" style="background:${galleryGradients[item.category] || galleryGradients['lab-activities']};display:flex;align-items:center;justify-content:center;color:white;font-size:2.5rem;">${galleryIcons[item.category] || '📸'}</div>`;

    return `
      <div class="gallery-item" data-gallery-id="${item.id}">
        ${imageHtml}
        <span class="gallery-item-category">${categoryNames[item.category] || item.category}</span>
        <div class="gallery-item-overlay">
          <h3 class="gallery-item-title">${title}</h3>
          <p class="gallery-item-description">${description}</p>
        </div>
      </div>
    `;
  }).join('');

  // Add click handlers
  galleryGrid.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      window.location.href = 'gallery.html';
    });
  });
}

// Handle Home Contact Form Submission
function handleHomeContactForm() {
  const form = document.getElementById('homeContactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };

    // Here you would typically send the data to a server
    console.log('Contact form submitted:', data);
    
    // Show success message
    const currentLang = document.documentElement.lang || 'ko';
    const successMessage = currentLang === 'ko' 
      ? '메시지가 성공적으로 전송되었습니다! 빠른 시일 내에 답변드리겠습니다.' 
      : 'Message sent successfully! We will get back to you soon.';
    
    alert(successMessage);
    
    // Reset form
    form.reset();
  });
}

// Initialize all home page features
function initHomePage() {
  // Wait for DOM to be fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      animateCounters();
      initScrollAnimations();
      initParallaxEffects();
      loadFeaturedProjects();
      loadLatestAchievements();
      loadGalleryPreview();
      handleHomeContactForm();
    });
  } else {
    animateCounters();
    initScrollAnimations();
    initParallaxEffects();
    loadFeaturedProjects();
    loadLatestAchievements();
    loadGalleryPreview();
    handleHomeContactForm();
  }
}

// Auto-initialize when script loads
initHomePage();

// Export functions for global access
window.homePageFunctions = {
  animateCounters,
  initScrollAnimations,
  initParallaxEffects,
  loadFeaturedProjects,
  loadLatestAchievements,
  loadGalleryPreview,
  handleHomeContactForm
};