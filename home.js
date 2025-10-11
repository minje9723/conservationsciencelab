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
function initScrollAnimations(selector = null) {
  // If specific selector provided, only observe those elements
  // Otherwise observe static elements
  const staticSelectors = '.hero-impact-card, .impact-card, .timeline-card, .spotlight-item, .contact-info-item, .contact-form-card';
  const targetSelector = selector || staticSelectors;
  
  const animatedElements = document.querySelectorAll(targetSelector);
  
  if (animatedElements.length === 0) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Get the stagger index from the element's data attribute
        const staggerIndex = parseInt(entry.target.dataset.staggerIndex) || 0;
        // Add staggered delay for grid items
        setTimeout(() => {
          entry.target.classList.add('animate-in');
        }, staggerIndex * 150); // 150ms delay between each item for clearer cascade effect
      }
    });
  }, { 
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px' // Trigger slightly before element enters viewport
  });
  
  // Add stagger index to each element and observe
  animatedElements.forEach((element, index) => {
    element.classList.add('animate-on-scroll');
    element.dataset.staggerIndex = index;
    observer.observe(element);
  });
}

// Add staggered animation for section headers
function animateSectionHeaders() {
  const sectionHeaders = document.querySelectorAll('.section-header');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, { 
    threshold: 0.2,
    rootMargin: '0px 0px -30px 0px'
  });
  
  sectionHeaders.forEach(header => {
    header.classList.add('animate-on-scroll');
    observer.observe(header);
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
  const featuredProjectIds = [1, 3, 4, 5]; // Change these numbers to feature different projects
  
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
  
  // Initialize animations for the newly added project cards
  initScrollAnimations('.project-card');
}

// Load Latest Achievements
function loadLatestAchievements() {
  const achievementsGrid = document.getElementById('latestAchievementsGrid');
  if (!achievementsGrid || typeof achievements === 'undefined') return;

  // Featured achievement IDs with links - Update these to change which achievements are featured
  const featuredAchievementIds = [1, 2]; // IDs of achievements with links
  
  // Get featured achievements by IDs, sorted by year
  const latestAchievements = achievements
    .filter(achievement => featuredAchievementIds.includes(achievement.id))
    .sort((a, b) => b.year - a.year);
  
  // If we don't have enough featured ones, fill with most recent
  if (latestAchievements.length < 4) {
    const additionalAchievements = achievements
      .filter(achievement => !featuredAchievementIds.includes(achievement.id))
      .sort((a, b) => b.year - a.year)
      .slice(0, 4 - latestAchievements.length);
    latestAchievements.push(...additionalAchievements);
  }
  
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

    // Category-specific gradients for placeholders
    const typeGradients = {
      'publication': 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
      'conference': 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
      'award': 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
      'patent': 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
    };

    // Use image if available, otherwise use gradient placeholder with icon
    const imageHtml = achievement.image 
      ? `<img src="${achievement.image}" alt="${title}" loading="lazy">`
      : `<div class="achievement-card-placeholder" style="background:${typeGradients[achievement.type] || typeGradients['publication']};display:flex;align-items:center;justify-content:center;color:white;font-size:4rem;">${typeIcons[achievement.type] || '📋'}</div>`;

    return `
      <div class="achievement-card" data-type="${achievement.type}" data-achievement-id="${achievement.id}">
        <div class="achievement-card-image">
          ${imageHtml}
        </div>
        <div class="achievement-card-content">
          <h3 class="achievement-card-title">${title}</h3>
          <p class="achievement-card-authors">${authors}</p>
          <p class="achievement-card-year">${achievement.year}</p>
          ${journal ? `<p class="achievement-card-journal">${journal}</p>` : ''}
        </div>
      </div>
    `;
  }).join('');

  // Add click handlers
  achievementsGrid.querySelectorAll('.achievement-card').forEach(card => {
    card.addEventListener('click', () => {
      window.location.href = 'achievements.html';
    });
  });
  
  // Initialize animations for the newly added achievement cards
  initScrollAnimations('.achievement-card');
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
  
  // Initialize animations for the newly added gallery items
  initScrollAnimations('.gallery-item');
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
      animateSectionHeaders();
      initParallaxEffects();
      loadFeaturedProjects();
      loadLatestAchievements();
      loadGalleryPreview();
      handleHomeContactForm();
    });
  } else {
    animateCounters();
    initScrollAnimations();
    animateSectionHeaders();
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
  animateSectionHeaders,
  initParallaxEffects,
  loadFeaturedProjects,
  loadLatestAchievements,
  loadGalleryPreview,
  handleHomeContactForm
};