document.addEventListener('DOMContentLoaded', () => {
    // === INISIALISASI AOS ===
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 700, // Durasi animasi sedikit lebih cepat
            once: true,
            offset: 100, // Trigger sedikit lebih awal
            // disable: 'mobile' // Pertimbangkan untuk aktifkan di mobile jika performa baik
        });
    }

    // === DARK MODE TOGGLE ===
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    function setDarkMode(isDark) {
        if (isDark) {
            body.classList.add('dark-mode');
            // Ikon sudah dihandle CSS dengan display none/block
            localStorage.setItem('darkMode', 'enabled');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled');
        }
          // Re-initialize AOS after theme change to re-calculate offsets if needed
        if (typeof AOS !== 'undefined') {
            AOS.refreshHard();
        }
    }
    const currentMode = localStorage.getItem('darkMode');
    setDarkMode(currentMode === 'enabled'); // Set initial state

    darkModeToggle.addEventListener('click', () => {
        setDarkMode(!body.classList.contains('dark-mode'));
    });

    // === NAVBAR SCROLL EFFECT (OPTIONAL) ===
    const mainHeader = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            mainHeader.classList.add('scrolled');
        } else {
            mainHeader.classList.remove('scrolled');
        }
    });


    // === FOOTER CURRENT YEAR ===
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // === EFEK MENGETIK UNTASUK HERO SECTION ===
    const typingElement = document.getElementById('typing-effect');
    const wordsToType = ["Keadilan.", "Peluang Sama.", "Kemajuan Bersama."];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingTimeout;

    function type() {
        clearTimeout(typingTimeout); // Hapus timeout sebelumnya jika ada
        const currentWord = wordsToType[wordIndex];
        let typeSpeed = isDeleting ? 60 : 120;

        if (isDeleting) {
            typingElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % wordsToType.length;
                typeSpeed = 500; // Jeda sebelum mengetik kata baru
            }
        } else {
            typingElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === currentWord.length) {
                isDeleting = true;
                typeSpeed = 2000; // Jeda sebelum menghapus
            }
        }
        typingTimeout = setTimeout(type, typeSpeed);
    }

    if (typingElement && wordsToType.length > 0) {
        typingTimeout = setTimeout(type, 700); // Mulai setelah delay awal
    }


    // === NAVBAR MOBILE (HAMBURGER MENU) ===
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navbarMain = document.querySelector('.navbar-main');
    const navLinksMobile = document.querySelectorAll('.navbar-main .nav-link'); // Ambil link di dalam menu

    if (hamburgerMenu && navbarMain) {
        hamburgerMenu.addEventListener('click', (e) => {
            e.stopPropagation(); // Hindari penutupan langsung jika klik di luar
            navbarMain.classList.toggle('open');
            hamburgerMenu.classList.toggle('active'); // Tambahkan/hapus kelas 'active' pada hamburger
            // Aria-expanded untuk aksesibilitas
            const isOpen = navbarMain.classList.contains('open');
            hamburgerMenu.setAttribute('aria-expanded', isOpen.toString());
        });

        // Menutup menu mobile jika link di klik
        navLinksMobile.forEach(link => {
            link.addEventListener('click', () => {
                if (navbarMain.classList.contains('open')) {
                    navbarMain.classList.remove('open');
                    hamburgerMenu.classList.remove('active'); // Hapus kelas 'active' pada hamburger
                    hamburgerMenu.setAttribute('aria-expanded', 'false');
                }
            });
        });

        // Menutup menu jika klik di luar area menu saat mobile
        document.addEventListener('click', (e) => {
            if (navbarMain.classList.contains('open') && !navbarMain.contains(e.target) && !hamburgerMenu.contains(e.target)) {
                navbarMain.classList.remove('open');
                hamburgerMenu.classList.remove('active'); // Hapus kelas 'active' pada hamburger
                hamburgerMenu.setAttribute('aria-expanded', 'false');
            }
        });
    }


    // === ACTIVE NAVIGATION LINK SCROLLSPY ===
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const sections = document.querySelectorAll('main section[id]');
    const navbarHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--navbar-height')) || 75;

    function changeLinkState() {
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - navbarHeight - 50) { // Offset 50px tambahan
                currentSectionId = section.getAttribute('id');
            }
        });

        let activeLinkFound = false;
        navLinks.forEach(link => {
            link.classList.remove('active');
            // Cek apakah link adalah link absolut ke proyek.html atau link scroll ke id di index.html
            const href = link.getAttribute('href');
            if (href.startsWith('index.html#') && currentSectionId) {
                // Jika ini link ke index.html dan ada sectionId yang cocok
                if (href === `index.html#${currentSectionId}`) {
                    link.classList.add('active');
                    activeLinkFound = true;
                }
            } else if (href.startsWith('#') && currentSectionId) {
                // Jika ini link internal di halaman yang sama
                if (href === `#${currentSectionId}`) {
                    link.classList.add('active');
                    activeLinkFound = true;
                }
            } else if (href === 'proyek.html' && window.location.pathname.includes('proyek.html')) {
                // Jika ini link ke proyek.html dan kita sedang di halaman proyek.html
                link.classList.add('active');
                activeLinkFound = true;
            }
        });
        // Jika scroll di paling atas halaman utama, aktifkan link Beranda
        if (!activeLinkFound && window.location.pathname.includes('index.html') && window.pageYOffset < sections[0].offsetTop - navbarHeight - 50) {
            const homeLink = document.querySelector('.navbar-nav a[href="#hero"]');
            if (homeLink) homeLink.classList.add('active');
        }
    }
    window.addEventListener('scroll', changeLinkState);
    changeLinkState();


    // === ACCORDION MITOS FAKTA ===
    const accordionItems = document.querySelectorAll('.mitosfakta-accordion .accordion-item');
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            // Tutup semua item lain jika hanya satu yang boleh terbuka (opsional)
            // accordionItems.forEach(otherItem => {
            //      if (otherItem !== item) {
            //          otherItem.classList.remove('active');
            //          otherItem.querySelector('.accordion-content').style.maxHeight = null;
            //      }
            // });

            item.classList.toggle('active');
            if (item.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.paddingBottom = "1.5rem"; // Pastikan padding diterapkan saat terbuka
            } else {
                content.style.maxHeight = null;
                content.style.paddingBottom = "0";
            }
        });
    });


    // === FORM SUBMISSION (VALIDASI DASAR) ===
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            let isValid = true;

            document.querySelectorAll('.form-error').forEach(e => e.remove());

            function showError(element, messageText) {
                const errorElement = document.createElement('div');
                errorElement.className = 'form-error';
                errorElement.style.color = 'var(--accent-color)';
                errorElement.style.fontSize = '0.85rem';
                errorElement.style.marginTop = '0.3rem';
                errorElement.textContent = messageText;
                element.parentNode.insertBefore(errorElement, element.nextSibling);
                isValid = false;
            }

            if (name === '') showError(document.getElementById('name'), 'Nama wajib diisi.');
            if (email === '') {
                showError(document.getElementById('email'), 'Email wajib diisi.');
            } else {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(email)) {
                    showError(document.getElementById('email'), 'Format email tidak valid.');
                }
            }
            if (subject === '') showError(document.getElementById('subject'), 'Subjek wajib diisi.');
            if (message === '') showError(document.getElementById('message'), 'Pesan tidak boleh kosong.');

            if (!isValid) {
                event.preventDefault();
            }
        });
    }
});