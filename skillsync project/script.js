	// Navbar
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
     
    menu.onclick = () => {
        navbar.classList.toggle('active');
    }
     
    window.onscroll = () => {
        navbar.classList.remove('active');
    }

    // Scroll Reveal
    const sr = ScrollReveal ({
        origin: 'top',
        distance: '40px',
        duration: 1100,
        reset: true
    });
     
     
    sr.reveal(`.home-text, .home-img,
                .about-img, .about-text
                `, {
        interval: 200
    })