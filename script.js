document.addEventListener("DOMContentLoaded", () => {
    // --- Menu mobile toggle ---
    const menuToggle = document.getElementById("mobile-menu-toggle");
    const sideNav = document.getElementById("side-nav");

    if (menuToggle && sideNav) {
        menuToggle.addEventListener("click", () => {
            menuToggle.classList.toggle("active");
            sideNav.classList.toggle("active");
        });
    }

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        observer.observe(section);
    });

    const languageSwitcher = document.getElementById('language-switcher');
    let currentLanguage = 'fr';

    const translations = {
        fr: {
            title: "Community Manager - Lalou Zeppa",
            headerTitle: "Community Manager Freelance",
            headerSubtitle: "Vous cherchez un community manager sur Bordeaux ?",
            contactBtn: "Contactez-moi",
            navHome: "Accueil",
            navPresentation: "Présentation",
            navServices: "Services",
            navExperiences: "Expériences",
            navRealizations: "Réalisations",
            navContact: "Contact",
            presentationTitle: "Présentation",
            presentationText1: "Community Manager, spécialisé dans la création et la gestion de stratégies digitales pour les marques, entreprises et créateurs de contenu. Mon objectif est d'offrir une communication engageante, cohérente et impactante sur tous les canaux.",
            presentationText2: "Je développe des contenus attractifs, optimise la présence en ligne et crée des expériences qui renforcent l'image de marque et fidélisent la communauté. J'analyse les performances pour ajuster les stratégies et maximiser l'engagement.",
            presentationText3: "J'accompagne également sur la rédaction optimisée pour les réseaux sociaux et le web afin d'améliorer la visibilité, valoriser votre message et toucher efficacement votre audience.",
            realizationsTitle: "Réalisations",
            contactTitle: "Contact",
            contactEmail: "Email :",
            langText: "FR",
            servicesTitle: "Mes services",
            servicesCards: [
                {
                    title: "Audit & Stratégie",
                    front: "Analyse de votre présence en ligne et conseils personnalisés",
                    back: [
                        "— Audit de vos réseaux sociaux actuels",
                        "— Analyse concurrentielle sectorielle",
                        "— Identification des points forts et axes d'amélioration",
                        "— Recommandations stratégiques adaptées à vos objectifs",
                        "— Plan d'action personnalisé et opérationnel"
                    ]
                },
                {
                    title: "Community Management",
                    front: "Création de contenus et gestion de vos comptes au quotidien",
                    back: [
                        "— Élaboration d'un calendrier éditorial cohérent",
                        "— Rédaction de publications engageantes",
                        "— Création de visuels (Canva, templates personnalisés)",
                        "— Programmation, animation et modération des comptes",
                        "— Analyse des statistiques et ajustements de stratégie"
                    ]
                },
                {
                    title: "Formation",
                    front: "Apprenez à animer vos réseaux sociaux comme un pro",
                    back: [
                        "— Formation personnalisée (Instagram, LinkedIn, etc.)",
                        "— Apprentissage des bonnes pratiques de contenu",
                        "— Conseils pour renforcer votre visibilité et votre engagement",
                        "— Accompagnement pas à pas, adapté à votre niveau",
                        "— Support post-formation (questions, suivi, conseils)"
                    ]
                }
            ],
            servicesHintFront: "Cliquez pour plus de détails",
            servicesHintBack: "Cliquez pour revenir",
            experiencesTitle: "Parcours & expertises",
            experiencesText: [
                "Forte de plusieurs années d'expérience dans la communication digitale et le marketing sur les réseaux sociaux, j'accompagne aujourd'hui des marques et institutions dans leur développement en ligne. En tant que Social Media Manager indépendante, je conçois et pilote des stratégies social media sur mesure, alliant performance, créativité et cohérence de marque.",
                "Mon parcours m'a menée à collaborer avec des acteurs variés : start-up, agences, collectivités, grandes entreprises et écoles. J'ai notamment occupé le poste de cheffe de projet chez Amaris Consulting, où j'ai développé mes compétences en gestion d'équipes et pilotage de projets complexes. J'ai également cofondé Lolotte & Lou, un projet récompensé par la CCI de Bordeaux, preuve de mon esprit entrepreneurial.",
                "Aujourd'hui, j'enseigne le Social Media Marketing à l'Ynov Campus Bordeaux en tant que formatrice freelance, tout en continuant d'accompagner des marques comme Prozym, Douxo ou Vetotentic dans leur rayonnement digital.",
                "Créative, organisée et orientée résultats, je mobilise mes compétences en stratégie de contenu, publicité social media, community management, analyse de performances et formation professionnelle pour répondre aux enjeux de mes clients."
            ],
            footerCopyright: "©2025 Tous droits réservés.",
            footerPrivacy: "Confidentialité",
            footerLegal: "Mentions légales"
        },
        en: {
            title: "Community Manager - Lalou Zeppa",
            headerTitle: "Freelance Community Manager",
            headerSubtitle: "Looking for a community manager to grow your business?",
            contactBtn: "Contact me",
            navHome: "Home",
            navPresentation: "About",
            navServices: "Services",
            navExperiences: "Experience",
            navRealizations: "Portfolio",
            navContact: "Contact",
            presentationTitle: "About Me",
            presentationText1: "Community Manager, specialized in creating and managing digital strategies for brands, companies and content creators. My goal is to offer engaging, consistent and impactful communication across all channels.",
            presentationText2: "I develop attractive content, optimize online presence and create experiences that strengthen brand image and build community loyalty. I analyze performance to adjust strategies and maximize engagement.",
            presentationText3: "I also provide support on optimized writing for social media and the web to improve visibility, enhance your message and effectively reach your audience.",
            realizationsTitle: "Portfolio",
            contactTitle: "Contact",
            contactEmail: "Email:",
            langText: "EN",
            servicesTitle: "My Services",
            servicesCards: [
                {
                    title: "Audit & Strategy",
                    front: "Online presence analysis and personalized advice",
                    back: [
                        "— Audit of your current social media",
                        "— Sectoral competitive analysis",
                        "— Identification of strengths and improvement areas",
                        "— Strategic recommendations aligned with your goals",
                        "— Personalized and actionable plan"
                    ]
                },
                {
                    title: "Community Management",
                    front: "Content creation and daily account management",
                    back: [
                        "— Creation of a coherent editorial calendar",
                        "— Writing engaging posts",
                        "— Visual creation (Canva, custom templates)",
                        "— Scheduling, moderating and managing accounts",
                        "— Analytics and strategy adjustments"
                    ]
                },
                {
                    title: "Training",
                    front: "Learn to manage your social media like a pro",
                    back: [
                        "— Personalized training (Instagram, LinkedIn, etc.)",
                        "— Best practices in content creation",
                        "— Tips to boost your visibility and engagement",
                        "— Step-by-step guidance tailored to your level",
                        "— Post-training support (Q&A, follow-up, advice)"
                    ]
                }
            ],
            servicesHintFront: "Click for more details",
            servicesHintBack: "Click to return",
            experiencesTitle: "Experience & Expertise",
            experiencesText: [
                "With several years of experience in digital communication and social media marketing, I now support brands and institutions in their online development. As a freelance Social Media Manager, I design and lead tailor-made social media strategies that combine performance, creativity, and brand consistency.",
                "My career has led me to collaborate with a wide range of clients: start-ups, agencies, local authorities, large companies, and schools. I notably held the position of Project Manager at Amaris Consulting, where I developed skills in team management and complex project leadership. I also co-founded Lolotte & Lou, a project awarded by the Bordeaux Chamber of Commerce, highlighting my entrepreneurial spirit.",
                "Today, I teach Social Media Marketing at Ynov Campus Bordeaux as a freelance instructor, while continuing to support brands like Prozym, Douxo, and Vetotentic in their digital presence.",
                "Creative, organized, and results-oriented, I leverage my expertise in content strategy, social media advertising, community management, performance analysis, and professional training to meet my clients' challenges."
            ],
            footerCopyright: "©2025 All rights reserved.",
            footerPrivacy: "Privacy Policy",
            footerLegal: "Legal Notice"
        }
    };

    function switchLanguage() {
        currentLanguage = currentLanguage === 'fr' ? 'en' : 'fr';
        const t = translations[currentLanguage];
        document.title = t.title;
        document.querySelector('.lang-text').textContent = t.langText;

        const path = window.location.pathname;

        if (path.includes('index.html') || path === '/' || path.endsWith('index.html')) {
            document.querySelector('header h1').textContent = t.headerTitle;
            document.querySelector('header p').textContent = t.headerSubtitle;
            document.querySelector('header .btn').textContent = t.contactBtn;

            const navLinks = document.querySelectorAll('.side-nav a');
            navLinks[0].textContent = t.navHome;
            navLinks[1].textContent = t.navPresentation;
            navLinks[2].textContent = t.navServices;
            navLinks[3].textContent = t.navExperiences;
            navLinks[4].textContent = t.navRealizations;
            navLinks[5].textContent = t.navContact;

            document.querySelector('#presentation h2').textContent = t.presentationTitle;
            const presentationParagraphs = document.querySelectorAll('#presentation .presentation-text p');
            presentationParagraphs[0].textContent = t.presentationText1;
            presentationParagraphs[1].textContent = t.presentationText2;
            presentationParagraphs[2].textContent = t.presentationText3;

            document.querySelector('#services h2').textContent = t.servicesTitle;
            document.querySelectorAll('#services .flip-card').forEach((card, index) => {
                const front = card.querySelector('.flip-card-front');
                const back = card.querySelector('.flip-card-back');
                if (t.servicesCards[index]) {
                    front.querySelector('h3').textContent = t.servicesCards[index].title;
                    front.querySelector('p').textContent = t.servicesCards[index].front;
                    front.querySelector('.click-hint').textContent = t.servicesHintFront;
                    back.querySelector('.click-hint').textContent = t.servicesHintBack;
                    const backList = back.querySelectorAll('ul.service-details li');
                    backList.forEach((li, i) => {
                        li.textContent = t.servicesCards[index].back[i] || '';
                    });
                }
            });

            document.querySelector('#experiences h2').textContent = t.experiencesTitle;
            const expParagraphs = document.querySelectorAll('#expertises-content p');
            expParagraphs.forEach((p, index) => {
                if (t.experiencesText[index]) {
                    p.textContent = t.experiencesText[index];
                }
            });

            document.querySelector('#realisations h2').textContent = t.realizationsTitle;
            document.querySelector('#contact h2').textContent = t.contactTitle;
            document.querySelector('#contact p').innerHTML = `${t.contactEmail} <a href="mailto:lalou.zeppa@gmail.com">lalou.zeppa@gmail.com</a>`;

            document.querySelector('.footer-left').textContent = t.footerCopyright;
            const footerLinks = document.querySelectorAll('.footer-right a');
            footerLinks[0].textContent = t.footerPrivacy;
            footerLinks[1].textContent = t.footerLegal;

            document.querySelectorAll('[data-lang]').forEach(el => {
                if (el.getAttribute('data-lang') === currentLanguage) {
                    el.style.display = '';
                } else {
                    el.style.display = 'none';
                }
            });
        }
    }

    languageSwitcher.addEventListener('click', switchLanguage);
});


window.addEventListener("scroll", () => {
    const socialIcons = document.querySelector(".social-icons-horizontal");
    if (window.scrollY > 10) {
        socialIcons.classList.add("scrolled");
    } else {
        socialIcons.classList.remove("scrolled");
    }
});
