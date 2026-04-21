document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu Logic ---
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const closeBtn = document.getElementById('close-btn');
    const mobileNav = document.getElementById('mobile-nav-menu');
    const overlay = document.getElementById('overlay');

    const openMenu = () => {
        mobileNav.classList.add('open');
        overlay.classList.add('visible');
        document.body.style.overflow = 'hidden'; // Prevents background scrolling
    };

    const closeMenu = () => {
        mobileNav.classList.remove('open');
        overlay.classList.remove('visible');
        document.body.style.overflow = ''; // Restores background scrolling
    };

    hamburgerBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu); 
    
    
    // Note: I have removed the repeated and conflicting carousel logic that was present later in your original script.js file to ensure smooth operation.
});


document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu Logic ---
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const closeBtn = document.getElementById('close-btn');
    const mobileNav = document.getElementById('mobile-nav-menu');
    const overlay = document.getElementById('overlay');

    const openMenu = () => {
        mobileNav.classList.add('open');
        overlay.classList.add('visible');
        document.body.style.overflow = 'hidden'; // Prevents background scrolling
    };

    const closeMenu = () => {
        mobileNav.classList.remove('open');
        overlay.classList.remove('visible');
        document.body.style.overflow = ''; // Restores background scrolling
    };

    hamburgerBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu); 
    
    // --- Carousel Logic ---
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselSlides = document.querySelector('.carousel-slides');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dotsContainer = document.querySelector('.carousel-dots');
    
    let currentSlide = 0;
    let slideInterval;
    const slideCount = slides.length;
    
    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.dot');
    
    // Function to go to a specific slide
    function goToSlide(slideIndex) {
        // Reset to first slide if at the end
        if (slideIndex >= slideCount) {
            currentSlide = 0;
        } else if (slideIndex < 0) {
            currentSlide = slideCount - 1;
        } else {
            currentSlide = slideIndex;
        }
        
        // Update slide position
        carouselSlides.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Update active dot
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }
    
    // Next slide function
    function nextSlide() {
        goToSlide(currentSlide + 1);
    }
    
    // Previous slide function
    function prevSlide() {
        goToSlide(currentSlide - 1);
    }
    
    // Auto slide functionality
    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }
    
    function stopAutoSlide() {
        clearInterval(slideInterval);
    }
    
    // Event listeners for navigation
    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopAutoSlide();
        startAutoSlide(); // Restart auto slide after manual navigation
    });
    
    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopAutoSlide();
        startAutoSlide(); // Restart auto slide after manual navigation
    });
    
    // Pause auto slide on hover
    carouselContainer.addEventListener('mouseenter', stopAutoSlide);
    carouselContainer.addEventListener('mouseleave', startAutoSlide);
    
    // Touch swipe support for mobile devices
    let startX = 0;
    let endX = 0;
    
    carouselContainer.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        stopAutoSlide();
    });
    
    carouselContainer.addEventListener('touchmove', (e) => {
        endX = e.touches[0].clientX;
    });
    
    carouselContainer.addEventListener('touchend', () => {
        const diff = startX - endX;
        const swipeThreshold = 50;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swiped left - next slide
                nextSlide();
            } else {
                // Swiped right - previous slide
                prevSlide();
            }
        }
        
        startAutoSlide();
    });
    
    // Keyboard navigation support
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
            stopAutoSlide();
            startAutoSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
            stopAutoSlide();
            startAutoSlide();
        }
    });
    
    // Initialize carousel
    startAutoSlide();
    
    // Responsive adjustments
    function handleResize() {
        // Reset transform on resize to ensure proper positioning
        carouselSlides.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
    
    window.addEventListener('resize', handleResize);
});


// Add floating animation to platforms
        document.addEventListener('DOMContentLoaded', function() {
            const platforms = document.querySelectorAll('.platform');
            platforms.forEach((platform, index) => {
                platform.style.animationDelay = `${index * 0.2}s`;
                platform.classList.add('floating');
            });
            
            // Add scroll animation
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);
            
            // Observe elements for scroll animation
            const animatedElements = document.querySelectorAll('.title, .subtitle, .features, .cta-button, .platforms');
            animatedElements.forEach(el => {
                observer.observe(el);
            });
        });

         // Add interactivity to the course cards
        document.addEventListener('DOMContentLoaded', function() {
            const courseCards = document.querySelectorAll('.course-card');
            const enrollButtons = document.querySelectorAll('.btn-enroll');
            const exploreButton = document.querySelector('.btn-explore');
            
            // Add click effect to course cards
            courseCards.forEach(card => {
                card.addEventListener('click', function(e) {
                    if (!e.target.classList.contains('btn-enroll')) {
                        this.style.transform = 'scale(0.98)';
                        setTimeout(() => {
                            this.style.transform = '';
                        }, 200);
                    }
                });
            });
            
            // Add animation to enroll buttons
            enrollButtons.forEach(button => {
                button.addEventListener('click', function() {
                    this.innerHTML = 'Enrolling... <i class="fas fa-spinner fa-spin"></i>';
                    setTimeout(() => {
                        this.innerHTML = 'Enrolled! <i class="fas fa-check"></i>';
                        this.style.background = 'linear-gradient(135deg, #4CAF50, #66BB6A)';
                    }, 1500);
                });
            });
            
            // Add animation to explore button
            exploreButton.addEventListener('click', function() {
                this.innerHTML = 'Loading Courses... <i class="fas fa-spinner fa-spin"></i>';
                setTimeout(() => {
                    this.innerHTML = 'Explore All Courses <i class="fas fa-arrow-right"></i>';
                    alert('More courses will be displayed here!');
                }, 1500);
            });
            
            // Add counter animation to stats
            const statNumbers = document.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.textContent);
                let current = 0;
                const increment = target / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        stat.textContent = target.toLocaleString() + (stat.textContent.includes('%') ? '%' : '+');
                        clearInterval(timer);
                    } else {
                        stat.textContent = Math.floor(current).toLocaleString() + (stat.textContent.includes('%') ? '%' : '+');
                    }
                }, 30);
            });
        });



        // Add interactivity to the CTA button
        document.addEventListener('DOMContentLoaded', function() {
            const ctaButton = document.querySelector('.cta-button');
            
            ctaButton.addEventListener('click', function() {
                this.innerHTML = 'Loading... <i class="fas fa-spinner fa-spin"></i>';
                
                setTimeout(() => {
                    this.innerHTML = 'Explore Courses <i class="fas fa-arrow-right"></i>';
                    alert('Redirecting to courses page!');
                }, 1500);
            });
            
            // Animate stats counter
            const statNumbers = document.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.textContent);
                let current = 0;
                const increment = target / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        stat.textContent = target.toLocaleString() + (stat.textContent.includes('%') ? '%' : '+');
                        clearInterval(timer);
                    } else {
                        stat.textContent = Math.floor(current).toLocaleString() + (stat.textContent.includes('%') ? '%' : '+');
                    }
                }, 30);
            });
        });


document.addEventListener('DOMContentLoaded', () => {
    const channelsGrid = document.getElementById('channelsGrid');

    // यहाँ Disha Classes के YouTube चैनल का डेटा डालें
    const channelData = [
        {
            name: 'Disha Online Classes',
            subscribers: '2.60M+ subscribers',
            link: 'https://www.youtube.com/@DishaOnlineClasses',
            isFeatured: true // अलग ग्रेडिएंट के लिए (जैसा इमेज में है)
        },
          {
            name: 'Disha Hindi & English Classes',
            subscribers: '1.07M+ subscribers',
            link: 'https://www.youtube.com/@dishahindienglish',
            isFeatured: false
        },
        {
            name: 'Disha Science Classes',
            subscribers: '857K+ subscribers',
            link: 'https://www.youtube.com/@DishaScienceClasses',
            isFeatured: false
        },
         {
            name: 'Disha Arts Classes',
            subscribers: '370K+ subscribers',
            link: 'https://youtube.com/@dishaartsclasses?si=HfWNpLDurA2McWDI',
            isFeatured: false
        }
      
      
        
      
    
    ];

    // चैनल कार्ड बनाने का फ़ंक्शन
    function createChannelCard(channel) {
        const card = document.createElement('a');
        card.href = channel.link;
        card.target = "_blank"; // नए टैब में खोलें
        card.classList.add('channel-card');

        // फीचर्ड चैनल के लिए विशेष क्लास जोड़ें (गोल्ड ग्रेडिएंट)
        const featuredClass = channel.isFeatured ? 'disha-studies' : '';

        card.innerHTML = `
            <div class="thumbnail-wrapper ${featuredClass}">
                <i class="fab fa-youtube play-icon-youtube"></i>
            </div>
            <div class="channel-info">
                <h3 class="channel-name">${channel.name}</h3>
                <p class="channel-subscribers">${channel.subscribers}</p>
            </div>
        `;
        return card;
    }

    // सभी चैनल कार्ड को ग्रिड में जोड़ें
    channelData.forEach(channel => {
        channelsGrid.appendChild(createChannelCard(channel));
    });

    // एक्सप्लोर बटन पर मुख्य चैनल लिंक जोड़ें (वैकल्पिक)
    const exploreButton = document.querySelector('.explore-youtube-button');
    exploreButton.addEventListener('click', () => {
        window.open('https://www.youtube.com/@DishaOnlineClasses', '_blank'); // मुख्य YouTube पेज लिंक डालें
    });

    console.log("YouTube Channels section loaded successfully.");
});

// इस सेक्शन के लिए कोई JavaScript आवश्यक नहीं है।
// यह सुनिश्चित करता है कि यह 100% तेजी से लोड हो।

document.addEventListener('DOMContentLoaded', () => {
    console.log("App Section loaded successfully!");
});
