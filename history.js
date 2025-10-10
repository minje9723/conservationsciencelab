// History Journey - Unified Timeline Experience

// Innovation Journey Animation
function initJourneyAnimations() {
  const journeyItems = document.querySelectorAll('.innovation-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  });
  
  journeyItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = `opacity 0.8s ease ${index * 0.1}s, transform 0.8s ease ${index * 0.1}s`;
    observer.observe(item);
  });
}

// Enhance card interactions
function enhanceCardInteractions() {
  const innovationCards = document.querySelectorAll('.innovation-card');
  
  innovationCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-8px) scale(1.02)';
      card.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.5)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
      card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
    });
  });
}

// Add progress tracking
function addProgressTracking() {
  const progressBar = document.createElement('div');
  progressBar.className = 'journey-progress';
  progressBar.innerHTML = '<div class="journey-progress-bar"></div>';
  
  document.body.appendChild(progressBar);
  
  const style = document.createElement('style');
  style.textContent = `
    .journey-progress {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: rgba(15, 23, 42, 0.2);
      z-index: 1000;
    }
    
    .journey-progress-bar {
      height: 100%;
      background: linear-gradient(90deg, #fbbf24, #f59e0b, #d97706);
      width: 0%;
      transition: width 0.2s ease;
    }
  `;
  document.head.appendChild(style);
  
  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = Math.min((winScroll / height) * 100, 100);
    
    document.querySelector('.journey-progress-bar').style.width = scrolled + '%';
  });
}

// Add banner animation
function addBannerAnimation() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes bannerFadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .page-title,
    .page-subtitle {
      animation: bannerFadeInUp 0.8s ease-out forwards;
      opacity: 0;
    }
    
    .page-title {
      animation-delay: 0.2s;
    }
    
    .page-subtitle {
      animation-delay: 0.4s;
    }
  `;
  document.head.appendChild(style);
}

// Initialize history journey page
function initHistoryJourney() {
  // Initialize journey animations
  initJourneyAnimations();
  
  // Enhance card interactions
  enhanceCardInteractions();
  
  // Add progress tracking
  addProgressTracking();
  
  // Add banner animation
  addBannerAnimation();
  
  console.log('History Journey initialized successfully');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initHistoryJourney);