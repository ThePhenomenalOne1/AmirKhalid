document.addEventListener('DOMContentLoaded', () => {

    // ── Navbar scroll effect ──
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 60);
    });

    // ── Mobile menu ──
    const hamburger = document.getElementById('hamburger');
    const navLinks  = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    // close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => navLinks.classList.remove('open'));
    });

    // ── Reveal on scroll ──
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.12 });

    reveals.forEach(el => observer.observe(el));

    // ── Hero particles ──
    const canvas = document.getElementById('particles');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width, height, particles;
        const PARTICLE_COUNT = 90;
        const CONNECTION_DIST = 160;
        const ACCENT = { r: 200, g: 169, b: 110 };   // matches --accent

        function resize() {
            const hero = canvas.parentElement;
            width = canvas.width = hero.offsetWidth;
            height = canvas.height = hero.offsetHeight;
        }

        function createParticles() {
            particles = [];
            for (let i = 0; i < PARTICLE_COUNT; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.3,
                    vy: (Math.random() - 0.5) * 0.3,
                    r: Math.random() * 2.2 + 0.8,
                    opacity: Math.random() * 0.5 + 0.25
                });
            }
        }

        function draw() {
            ctx.clearRect(0, 0, width, height);

            // draw connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < CONNECTION_DIST) {
                        const alpha = (1 - dist / CONNECTION_DIST) * 0.15;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(${ACCENT.r},${ACCENT.g},${ACCENT.b},${alpha})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }

            // draw dots
            for (const p of particles) {
                p.x += p.vx;
                p.y += p.vy;

                // wrap around edges
                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;
                if (p.y < 0) p.y = height;
                if (p.y > height) p.y = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${ACCENT.r},${ACCENT.g},${ACCENT.b},${p.opacity})`;
                ctx.fill();
            }

            requestAnimationFrame(draw);
        }

        resize();
        createParticles();
        draw();

        window.addEventListener('resize', () => {
            resize();
            createParticles();
        });
    }

    // ── Seasonal Winter Snow & Collection (Nov — Jan, recurring annually) ──
    initWinterSeason();

    function initWinterSeason() {
        const SNOW_CAP_TEMPLATES = [
            // Drift 1: Balanced undulating waves with soft pillowy dips
            `<svg class="card-snow-cap" viewBox="0 0 400 24" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                    <linearGradient id="snowGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#ffffff"/>
                        <stop offset="50%" stop-color="#f2f7fc"/>
                        <stop offset="85%" stop-color="#dde9f4"/>
                        <stop offset="100%" stop-color="#c5d8e7"/>
                    </linearGradient>
                </defs>
                <path d="M0,15 C0,8 8,4 20,4 C38,4 48,8 65,8 C82,8 92,2 115,2 C138,2 148,6 168,6 C188,6 198,1 222,1 C246,1 258,5 280,5 C302,5 312,2 334,2 C356,2 368,6 385,6 C396,6 400,9 400,15 C394,18 382,17 372,17 C360,17 350,22 338,22 C326,22 318,17 304,17 C288,17 278,20 264,20 C248,20 240,16 226,16 C210,16 200,23 184,23 C168,23 160,17 142,17 C124,17 116,21 100,21 C84,21 76,16 60,16 C44,16 34,21 20,21 C8,21 0,18 0,15 Z" fill="url(#snowGrad1)"/>
                <path d="M8,10 C18,5 32,5 50,6 C70,7 88,3 115,3 C142,3 160,7 185,4 C205,2 230,2 255,4 C280,6 302,3 328,3 C352,3 370,6 392,10" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.9"/>
                <g class="snow-sparkle snow-sparkle-1" transform="translate(168, 5)"><path d="M0,-3.5 Q0,0 3.5,0 Q0,0 0,3.5 Q0,0 -3.5,0 Q0,0 0,-3.5 Z" fill="#ffffff"/></g>
                <g class="snow-sparkle snow-sparkle-2" transform="translate(280, 4)"><path d="M0,-2.8 Q0,0 2.8,0 Q0,0 0,2.8 Q0,0 -2.8,0 Q0,0 0,-2.8 Z" fill="#ffffff"/></g>
            </svg>`,
            // Drift 2: Plump left drift with cozy rounded drops
            `<svg class="card-snow-cap" viewBox="0 0 400 24" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                    <linearGradient id="snowGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#ffffff"/>
                        <stop offset="50%" stop-color="#f2f7fc"/>
                        <stop offset="85%" stop-color="#dde9f4"/>
                        <stop offset="100%" stop-color="#c5d8e7"/>
                    </linearGradient>
                </defs>
                <path d="M0,15 C0,7 10,3 24,3 C44,3 56,7 74,7 C92,7 104,1 128,1 C152,1 164,6 186,6 C208,6 218,2 240,2 C262,2 274,6 296,6 C318,6 330,1 352,1 C374,1 388,5 400,12 C395,17 384,17 372,17 C358,17 348,22 334,22 C320,22 310,18 296,18 C280,18 270,23 252,23 C236,23 226,17 210,17 C194,17 184,21 168,21 C152,21 142,16 126,16 C110,16 100,22 84,22 C70,22 60,17 46,17 C32,17 22,21 10,21 C3,21 0,18 0,15 Z" fill="url(#snowGrad2)"/>
                <path d="M10,9 C24,4 42,4 62,5 C84,6 102,2 128,2 C154,2 176,6 200,4 C222,2 245,2 270,4 C294,6 316,2 342,2 C364,2 380,5 394,9" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.9"/>
                <g class="snow-sparkle snow-sparkle-1" transform="translate(74, 5)"><path d="M0,-2.8 Q0,0 2.8,0 Q0,0 0,2.8 Q0,0 -2.8,0 Q0,0 0,-2.8 Z" fill="#ffffff"/></g>
                <g class="snow-sparkle snow-sparkle-3" transform="translate(296, 4)"><path d="M0,-3.2 Q0,0 3.2,0 Q0,0 0,3.2 Q0,0 -3.2,0 Q0,0 0,-3.2 Z" fill="#ffffff"/></g>
            </svg>`,
            // Drift 3: Serene winter ridge with high center crest
            `<svg class="card-snow-cap" viewBox="0 0 400 24" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                    <linearGradient id="snowGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#ffffff"/>
                        <stop offset="50%" stop-color="#f2f7fc"/>
                        <stop offset="85%" stop-color="#dde9f4"/>
                        <stop offset="100%" stop-color="#c5d8e7"/>
                    </linearGradient>
                </defs>
                <path d="M0,14 C0,7 8,2 22,2 C42,2 54,6 72,6 C90,6 102,2 124,2 C146,2 158,5 180,5 C202,5 214,1 238,1 C262,1 276,5 298,5 C320,5 332,2 354,2 C376,2 390,6 400,14 C395,19 382,18 370,18 C356,18 346,23 330,23 C316,23 306,17 290,17 C274,17 264,22 248,22 C232,22 222,16 206,16 C190,16 180,21 164,21 C148,21 138,17 122,17 C106,17 96,23 80,23 C66,23 56,18 42,18 C28,18 18,22 8,22 C2,22 0,18 0,14 Z" fill="url(#snowGrad3)"/>
                <path d="M8,8 C22,3 40,3 60,5 C82,6 100,3 124,3 C148,3 170,5 195,4 C218,2 240,2 265,4 C288,5 310,3 334,3 C356,3 376,5 392,9" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.9"/>
                <g class="snow-sparkle snow-sparkle-2" transform="translate(180, 4.5)"><path d="M0,-3 Q0,0 3,0 Q0,0 0,3 Q0,0 -3,0 Q0,0 0,-3 Z" fill="#ffffff"/></g>
                <g class="snow-sparkle snow-sparkle-3" transform="translate(354, 3.5)"><path d="M0,-2.5 Q0,0 2.5,0 Q0,0 0,2.5 Q0,0 -2.5,0 Q0,0 0,-2.5 Z" fill="#ffffff"/></g>
            </svg>`
        ];

        const BADGE_SNOW_TEMPLATE =
            `<svg class="badge-snow-cap" viewBox="0 0 260 14" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                    <linearGradient id="snowGradBadge" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#ffffff"/>
                        <stop offset="60%" stop-color="#f0f6fa"/>
                        <stop offset="100%" stop-color="#cbdde9"/>
                    </linearGradient>
                </defs>
                <path d="M0,10 C0,4 6,1 15,1 C30,1 40,4 55,4 C70,4 80,1 100,1 C120,1 130,3 150,3 C170,3 180,1 200,1 C220,1 235,3 248,3 C256,3 260,6 260,10 C254,12 246,11 238,11 C228,11 220,14 210,14 C198,14 192,11 180,11 C168,11 160,13 148,13 C136,13 128,10 116,10 C104,10 96,14 84,14 C72,14 64,11 50,11 C38,11 30,13 18,13 C8,13 0,11 0,10 Z" fill="url(#snowGradBadge)"/>
                <g class="snow-sparkle snow-sparkle-1" transform="translate(100, 2.5)"><path d="M0,-2 Q0,0 2,0 Q0,0 0,2 Q0,0 -2,0 Q0,0 0,-2 Z" fill="#ffffff"/></g>
            </svg>`;

        const SNOWMAN_TEMPLATES = {
            edu: `<svg class="little-snowman snowman-edu" viewBox="0 0 38 46" aria-label="Snowman with top hat" role="img" title="Enjoying the winter! ⛄">
                <defs>
                    <radialGradient id="snwHead1" cx="35%" cy="35%" r="65%">
                        <stop offset="0%" stop-color="#ffffff"/>
                        <stop offset="75%" stop-color="#f0f5fb"/>
                        <stop offset="100%" stop-color="#d3e2ee"/>
                    </radialGradient>
                    <radialGradient id="snwBody1" cx="35%" cy="35%" r="65%">
                        <stop offset="0%" stop-color="#ffffff"/>
                        <stop offset="80%" stop-color="#ebf3f9"/>
                        <stop offset="100%" stop-color="#cadbe8"/>
                    </radialGradient>
                </defs>
                <line x1="11" y1="30" x2="2" y2="24" stroke="#795548" stroke-width="1.6" stroke-linecap="round"/>
                <line x1="4" y1="25" x2="3" y2="21" stroke="#795548" stroke-width="1.2" stroke-linecap="round"/>
                <line x1="27" y1="30" x2="36" y2="22" stroke="#795548" stroke-width="1.6" stroke-linecap="round"/>
                <line x1="34" y1="24" x2="36" y2="28" stroke="#795548" stroke-width="1.2" stroke-linecap="round"/>
                <circle cx="19" cy="34" r="10.5" fill="url(#snwBody1)"/>
                <circle cx="19" cy="20" r="7.5" fill="url(#snwHead1)"/>
                <circle cx="19" cy="31" r="1" fill="#222222"/>
                <circle cx="19" cy="35" r="1" fill="#222222"/>
                <circle cx="19" cy="39" r="1" fill="#222222"/>
                <circle cx="16.5" cy="18.5" r="1" fill="#1a1a1a"/>
                <circle cx="21" cy="18.5" r="1" fill="#1a1a1a"/>
                <polygon points="18.5,20.5 25,21.5 18.5,22.5" fill="#e67e22"/>
                <circle cx="16" cy="23.5" r="0.6" fill="#222222"/>
                <circle cx="17.5" cy="24.5" r="0.6" fill="#222222"/>
                <circle cx="19.5" cy="24.5" r="0.6" fill="#222222"/>
                <circle cx="21" cy="23.5" r="0.6" fill="#222222"/>
                <path d="M12,26 C15,28 23,28 26,26" stroke="#c8a96e" stroke-width="3" stroke-linecap="round"/>
                <path d="M21,27 L22,34 L25,33 L23.5,27 Z" fill="#c8a96e"/>
                <rect x="12" y="13" width="14" height="2" rx="0.8" fill="#181818"/>
                <rect x="14" y="6" width="10" height="7.5" rx="0.8" fill="#181818"/>
                <rect x="14" y="11.5" width="10" height="1.8" fill="#c8a96e"/>
            </svg>`,

            skill: `<svg class="little-snowman snowman-skill" viewBox="0 0 38 46" aria-label="Snowman with earmuffs" role="img" title="Happy coding & learning! ❄️">
                <defs>
                    <radialGradient id="snwHead3" cx="35%" cy="35%" r="65%">
                        <stop offset="0%" stop-color="#ffffff"/>
                        <stop offset="75%" stop-color="#f0f5fb"/>
                        <stop offset="100%" stop-color="#d3e2ee"/>
                    </radialGradient>
                    <radialGradient id="snwBody3" cx="35%" cy="35%" r="65%">
                        <stop offset="0%" stop-color="#ffffff"/>
                        <stop offset="80%" stop-color="#ebf3f9"/>
                        <stop offset="100%" stop-color="#cadbe8"/>
                    </radialGradient>
                </defs>
                <line x1="11" y1="30" x2="3" y2="25" stroke="#795548" stroke-width="1.6" stroke-linecap="round"/>
                <line x1="27" y1="30" x2="35" y2="25" stroke="#795548" stroke-width="1.6" stroke-linecap="round"/>
                <circle cx="19" cy="34" r="10.5" fill="url(#snwBody3)"/>
                <circle cx="19" cy="20" r="7.5" fill="url(#snwHead3)"/>
                <circle cx="19" cy="31" r="1" fill="#222222"/>
                <circle cx="19" cy="35" r="1" fill="#222222"/>
                <circle cx="19" cy="39" r="1" fill="#222222"/>
                <circle cx="16.5" cy="19" r="1" fill="#1a1a1a"/>
                <circle cx="21" cy="19" r="1" fill="#1a1a1a"/>
                <polygon points="18.5,20.8 24.5,21.6 18.5,22.6" fill="#e67e22"/>
                <circle cx="17" cy="24" r="0.6" fill="#222222"/>
                <circle cx="18.5" cy="24.6" r="0.6" fill="#222222"/>
                <circle cx="20.5" cy="24" r="0.6" fill="#222222"/>
                <path d="M12,26 C15,28 23,28 26,26" stroke="#c8a96e" stroke-width="3" stroke-linecap="round"/>
                <path d="M19,27 L20,33 L22.5,33 L21,27 Z" fill="#c8a96e"/>
                <path d="M11.5,19 C11,10 27,10 26.5,19" stroke="#1f1f1f" stroke-width="1.4" fill="none"/>
                <circle cx="11.5" cy="19" r="2.8" fill="#c8a96e"/>
                <circle cx="26.5" cy="19" r="2.8" fill="#c8a96e"/>
            </svg>`,

            contact: `<svg class="little-snowman snowman-contact" viewBox="0 0 38 46" aria-label="Waving snowman in beanie" role="img" title="Say hello to Amir! 👋⛄">
                <defs>
                    <radialGradient id="snwHead2" cx="35%" cy="35%" r="65%">
                        <stop offset="0%" stop-color="#ffffff"/>
                        <stop offset="75%" stop-color="#f0f5fb"/>
                        <stop offset="100%" stop-color="#d3e2ee"/>
                    </radialGradient>
                    <radialGradient id="snwBody2" cx="35%" cy="35%" r="65%">
                        <stop offset="0%" stop-color="#ffffff"/>
                        <stop offset="80%" stop-color="#ebf3f9"/>
                        <stop offset="100%" stop-color="#cadbe8"/>
                    </radialGradient>
                </defs>
                <line x1="11" y1="30" x2="3" y2="23" stroke="#795548" stroke-width="1.6" stroke-linecap="round"/>
                <line x1="27" y1="30" x2="36" y2="19" stroke="#795548" stroke-width="1.6" stroke-linecap="round"/>
                <line x1="33" y1="22" x2="36" y2="25" stroke="#795548" stroke-width="1.2" stroke-linecap="round"/>
                <circle cx="19" cy="34" r="10.5" fill="url(#snwBody2)"/>
                <circle cx="19" cy="20" r="7.5" fill="url(#snwHead2)"/>
                <circle cx="19" cy="32" r="1" fill="#222222"/>
                <circle cx="19" cy="36" r="1" fill="#222222"/>
                <circle cx="16.5" cy="19.5" r="1" fill="#1a1a1a"/>
                <circle cx="21" cy="19.5" r="1" fill="#1a1a1a"/>
                <polygon points="18.5,21 25,21.8 18.5,22.8" fill="#e67e22"/>
                <circle cx="16.5" cy="24" r="0.6" fill="#222222"/>
                <circle cx="18" cy="24.8" r="0.6" fill="#222222"/>
                <circle cx="20" cy="24.8" r="0.6" fill="#222222"/>
                <circle cx="21.5" cy="24" r="0.6" fill="#222222"/>
                <path d="M12,26.5 C15,28.5 23,28.5 26,26.5" stroke="#c8a96e" stroke-width="3.2" stroke-linecap="round"/>
                <path d="M15,28 L14,35 L17,35 L17.5,28 Z" fill="#c8a96e"/>
                <path d="M12.5,14.5 C13,8 25,8 25.5,14.5 Z" fill="#242424"/>
                <rect x="11.5" y="13.5" width="15" height="2.5" rx="1.2" fill="#c8a96e"/>
                <circle cx="19" cy="7" r="2.2" fill="#ffffff"/>
            </svg>`,

            footer: `<svg class="little-snowman snowman-footer" viewBox="0 0 38 46" aria-label="Little footer snowman" role="img" title="Happy holidays! ✨">
                <circle cx="19" cy="34" r="10.5" fill="#ffffff"/>
                <circle cx="19" cy="20" r="7.5" fill="#ffffff"/>
                <circle cx="16.5" cy="18.5" r="1" fill="#1a1a1a"/>
                <circle cx="21" cy="18.5" r="1" fill="#1a1a1a"/>
                <polygon points="18.5,20.5 25,21.5 18.5,22.5" fill="#e67e22"/>
                <path d="M12,26 C15,28 23,28 26,26" stroke="#c8a96e" stroke-width="2.8" stroke-linecap="round"/>
                <rect x="12" y="13" width="14" height="2" rx="0.8" fill="#181818"/>
                <rect x="14" y="7" width="10" height="6.5" rx="0.8" fill="#181818"/>
                <rect x="14" y="12" width="10" height="1.5" fill="#c8a96e"/>
            </svg>`
        };

        function calculateWinterState() {
            const params = new URLSearchParams(window.location.search);
            if (params.has('snow')) {
                const val = params.get('snow');
                if (val === 'heavy' || val === 'december' || val === 'christmas' || val === 'max') {
                    return { active: true, progress: 1.0, label: 'Christmas Peak (Preview)' };
                }
                if (val === 'light' || val === 'nov') {
                    return { active: true, progress: 0.25, label: 'Early November (Preview)' };
                }
                if (val === 'mid') {
                    return { active: true, progress: 0.55, label: 'Late November (Preview)' };
                }
                const num = parseFloat(val);
                if (!isNaN(num)) {
                    return { active: num > 0, progress: Math.min(Math.max(num, 0), 1), label: `Custom Intensity ${num}` };
                }
            }
            if (params.has('winter')) {
                return { active: true, progress: 0.85, label: 'Winter Season (Preview)' };
            }

            const now = new Date();
            const month = now.getMonth(); // 0 = Jan, 10 = Nov, 11 = Dec
            const date = now.getDate();

            // Active in November, December, January (repeats every upcoming year)
            if (month !== 10 && month !== 11 && month !== 0) {
                return { active: false, progress: 0, label: 'Off-Season' };
            }

            let progress = 0;
            let label = '';

            if (month === 10) {
                // November: Starts light on Nov 1, slowly builds week by week
                const dayFactor = (date - 1) / 29;
                progress = 0.18 + dayFactor * 0.54; // 0.18 -> 0.72
                const weekNum = Math.min(Math.floor((date - 1) / 7) + 1, 4);
                label = `November Week ${weekNum}`;
            } else if (month === 11) {
                // December: Accelerates toward Christmas Peak (Dec 24-31 = 1.0)
                if (date <= 24) {
                    progress = 0.72 + ((date - 1) / 23) * 0.28; // 0.72 -> 1.0
                } else {
                    progress = 1.0;
                }
                const weekNum = Math.min(Math.floor((date - 1) / 7) + 1, 4);
                label = date >= 24 ? 'Christmas Peak' : `December Week ${weekNum}`;
            } else if (month === 0) {
                // January: Strong winter wonderland, gradually easing
                const dayFactor = (date - 1) / 30;
                progress = 1.0 - dayFactor * 0.65; // 1.0 -> 0.35
                const weekNum = Math.min(Math.floor((date - 1) / 7) + 1, 4);
                label = `January Week ${weekNum}`;
            }

            return {
                active: true,
                progress: Math.max(0.15, Math.min(1.0, progress)),
                label
            };
        }

        let winterState = calculateWinterState();
        if (!winterState.active) return;

        function updateCapHeight(prog) {
            const capHeight = Math.round(14 + prog * 8); // 14px in early Nov -> 22px in peak Dec
            document.documentElement.style.setProperty('--snow-cap-height', `${capHeight}px`);
        }
        updateCapHeight(winterState.progress);

        function attachSnowCaps() {
            document.querySelectorAll('.card-snow-cap, .badge-snow-cap, .little-snowman').forEach(el => el.remove());

            // Target card boxes: Education, Skills, Contact
            const targetCards = document.querySelectorAll('.edu-card, .skill-block, .contact-card');
            targetCards.forEach((card, idx) => {
                const template = SNOW_CAP_TEMPLATES[idx % SNOW_CAP_TEMPLATES.length];
                card.insertAdjacentHTML('afterbegin', template);
            });

            // Target hero badge
            const heroBadge = document.querySelector('.hero-badge');
            if (heroBadge) {
                heroBadge.insertAdjacentHTML('afterbegin', BADGE_SNOW_TEMPLATE);
            }

            // Perch little snowmen on select boxes
            const eduCard = document.querySelector('.edu-card');
            if (eduCard) {
                eduCard.insertAdjacentHTML('afterbegin', SNOWMAN_TEMPLATES.edu);
            }

            const skillBlock = document.querySelector('.skill-block');
            if (skillBlock) {
                skillBlock.insertAdjacentHTML('afterbegin', SNOWMAN_TEMPLATES.skill);
            }

            const contactCard = document.querySelector('.contact-card');
            if (contactCard) {
                contactCard.insertAdjacentHTML('afterbegin', SNOWMAN_TEMPLATES.contact);
            }

            const footerInner = document.querySelector('.footer-inner');
            if (footerInner && !footerInner.querySelector('.snowman-footer')) {
                footerInner.insertAdjacentHTML('beforeend', SNOWMAN_TEMPLATES.footer);
            }
        }
        attachSnowCaps();

        // Create snowfall canvas
        let snowCanvas = document.getElementById('snowCanvas');
        if (!snowCanvas) {
            snowCanvas = document.createElement('canvas');
            snowCanvas.id = 'snowCanvas';
            snowCanvas.className = 'snow-canvas';
            document.body.appendChild(snowCanvas);
        }
        const ctx = snowCanvas.getContext('2d');
        let width, height;
        let flakes = [];

        function resizeSnow() {
            width = snowCanvas.width = window.innerWidth;
            height = snowCanvas.height = window.innerHeight;
        }

        function createFlakes(prog) {
            flakes = [];
            const isMobile = window.innerWidth < 768;
            let count = Math.round(45 + prog * 130);
            if (isMobile) count = Math.round(count * 0.6);

            for (let i = 0; i < count; i++) {
                const typeRand = Math.random();
                let r, opacity, speedY, isBokeh = false;

                if (typeRand < 0.6) {
                    r = Math.random() * 0.9 + 0.9;
                    opacity = Math.random() * 0.35 + 0.25;
                    speedY = Math.random() * 0.7 + 0.5 + prog * 0.3;
                } else if (typeRand < 0.9) {
                    r = Math.random() * 1.2 + 2.0;
                    opacity = Math.random() * 0.35 + 0.55;
                    speedY = Math.random() * 1.0 + 0.9 + prog * 0.4;
                } else {
                    r = Math.random() * 1.8 + 3.4;
                    opacity = Math.random() * 0.25 + 0.25;
                    speedY = Math.random() * 1.2 + 1.2 + prog * 0.5;
                    isBokeh = true;
                }

                flakes.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    r,
                    opacity,
                    speedY,
                    swing: Math.random() * 1.4 + 0.6,
                    angle: Math.random() * Math.PI * 2,
                    angularSpeed: Math.random() * 0.02 + 0.01,
                    isBokeh
                });
            }
        }

        let animationFrameId;
        function renderSnow() {
            if (document.hidden) {
                animationFrameId = requestAnimationFrame(renderSnow);
                return;
            }

            ctx.clearRect(0, 0, width, height);

            const time = Date.now();
            const wind = Math.sin(time * 0.0006) * (0.35 + winterState.progress * 0.45);

            for (let i = 0; i < flakes.length; i++) {
                const f = flakes[i];
                f.angle += f.angularSpeed;
                f.x += Math.sin(f.angle) * f.swing + wind;
                f.y += f.speedY;

                if (f.y > height + 10) {
                    f.y = -10;
                    f.x = Math.random() * width;
                }
                if (f.x < -15) f.x = width + 10;
                if (f.x > width + 15) f.x = -10;

                ctx.beginPath();
                ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);

                if (f.isBokeh) {
                    const gradient = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.r);
                    gradient.addColorStop(0, `rgba(255, 255, 255, ${f.opacity * 1.2})`);
                    gradient.addColorStop(0.5, `rgba(240, 248, 255, ${f.opacity * 0.6})`);
                    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
                    ctx.fillStyle = gradient;
                } else {
                    ctx.fillStyle = `rgba(255, 255, 255, ${f.opacity})`;
                }
                ctx.fill();
            }

            animationFrameId = requestAnimationFrame(renderSnow);
        }

        resizeSnow();
        createFlakes(winterState.progress);
        renderSnow();

        window.addEventListener('resize', () => {
            resizeSnow();
            createFlakes(winterState.progress);
        });

        // Testing & preview helper: set intensity live e.g. window.setWinterSeason('christmas') or window.setWinterSeason(1.0)
        window.setWinterSeason = function(val) {
            let prog = typeof val === 'number' ? val : 1.0;
            if (typeof val === 'string') {
                const lower = val.toLowerCase();
                if (lower.includes('nov') || lower.includes('light')) prog = 0.25;
                else if (lower.includes('mid')) prog = 0.55;
                else if (lower.includes('dec') || lower.includes('peak') || lower.includes('christ')) prog = 1.0;
                else if (lower.includes('off') || lower === '0') prog = 0;
                else {
                    const parsed = parseFloat(val);
                    if (!isNaN(parsed)) prog = parsed;
                }
            }
            prog = Math.max(0, Math.min(1.0, prog));
            winterState.progress = prog;
            winterState.active = prog > 0;
            winterState.label = `Manual Override (${Math.round(prog * 100)}%)`;
            updateCapHeight(prog);
            if (winterState.active) {
                attachSnowCaps();
                createFlakes(prog);
            } else {
                document.querySelectorAll('.card-snow-cap, .badge-snow-cap, .little-snowman').forEach(el => el.remove());
                ctx.clearRect(0, 0, width, height);
                flakes = [];
            }
            console.log(`❄️ Winter Season updated to: ${winterState.label}`);
        };

        console.log(`❄️ Winter Season Active: ${winterState.label} (Weekly Progress: ${Math.round(winterState.progress * 100)}%)`);
    }

});
