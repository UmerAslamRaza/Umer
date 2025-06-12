import projectGalleries from "@/enums/projectGalleries";
import ProjectGalleries from "@/enums/projectGalleries";
const projects = [
    {
        id: "1",
        slug: "Chillup-KidConnect-Admin-Dashboard",
        title: "Chillup KidConnect Admin Dashboard",
        sections: [
            {
                heading: "Overview",
                description: "The KidConnect Admin Dashboard is a robust backend platform built with Laravel and\n" +
                    "FilamentPHP, designed to empower platform administrators with complete control over\n" +
                    "users, vendors, schools, and content. This dashboard plays a pivotal role in maintaining\n" +
                    "data integrity, user access levels, and overall system management for a multi-user\n" +
                    "ecosystem spanning parents, vendors, and school administrators.",
                images: ["/images/ChilllupBackend/Vendors 3.png",
                    "/images/ChilllupBackend/Vendors 4.png"]
            },
            {
                heading: "My Role & Contributions",
                description: "I was solely responsible for developing the admin panel, from database schema design to\n" +
                    "API development and UI/UX implementation using FilamentPHP. I designed a scalable\n" +
                    "architecture to manage large data sets like school events, vendor packages, email\n" +
                    "campaigns, and dynamic content creation. I also implemented secure login/auth with JWT\n" +
                    "and user permission logic for super admins vs content moderators.",
                images: ["/images/ChilllupBackend/Vendor Ads 2.png",
                    "/images/ChilllupBackend/Vendor Ads 1.png"]
            },
            {
                heading: "Features Developed",
                description: "• Vendor Management: View, approve, and onboard vendors with auto email\n" +
                    "notifications. Configure free trials and paid packages.\n" +
                    "• School Management: Add/edit school info, upload logos, and integrate Google\n" +
                    "Calendar feeds with event auto-population.\n" +
                    "• User Management: Full CRUD operations on parents and children, with role-based\n" +
                    "access and custom filtering.\n" +
                    "• Email Marketing Engine: Send targeted newsletters and promotional emails based\n" +
                    "on user groupings, vendor tiers, and engagement levels.\n" +
                    "• Analytics Dashboard: Auto-generated reports for vendors, showing booking\n" +
                    "trends, top-performing activities, and location-wise engagement.\n" +
                    "• Vendor Packages: Assign tiered features like \"Top Search Listing\", \"Email\n" +
                    "Promotion\", \"Push Notifications\", etc., via flexible package plans." +
                    "• Smart Calendar Sync: Map Google Calendar templates to schools and vendor\n" +
                    "profiles for seamless event automation.\n" +
                    "• Security & Auth: Implemented secure login using JWT, role-based access control,\n" +
                    "and data validation rules.\n" +
                    "• Activity Templates: Enable vendors to reuse templated events with default fields,\n" +
                    "minimizing data entry effort.",
                images: ["/images/ChilllupBackend/Trends 2.png",
                    "/images/ChilllupBackend/Trends 3.png"]
            }
        ],
        techStack: ["Laravel", "MySQL", "FilamentPHP","JWT Authentication"],
        thumbnail: "/images/ChilllupBackend/Notifications 1.png",
        galleryImages: projectGalleries.ChillupBackend,
        type: "web",
        domain: "Backend",
        featured: true,
        projectSummary:"I developed a robust admin dashboard using Laravel + Filament for a multi-user\n" +
            "ecosystem (parents, vendors, schools). Admins can manage users, vendors, school\n" +
            "events, send targeted emails, and configure vendor packages. I integrated Google Calendar APIs, JWT auth, and built a dynamic analytics system for engagement reporting.\n" +
            "This dashboard serves as the operational hub for the KidConnect platform.",
        role: "Full Stack Developer"
    },
    {
        id: "2",
        slug: "Chillup-Web-dashboard-for-parents",
        title: "Chillup Web Dashboard For Parents",
        sections: [
            {
                heading: "Overview",
                description: "The Vendor Dashboard is a web-based panel where activity providers (vendors) manage\n" +
                    "their business operations. I developed this panel using Vue 3 with TypeScript for frontend\n" +
                    "and integrated it with Laravel APIs on the backend. This dashboard allows vendors to\n" +
                    "register, create events, manage bookings, target audiences, and view performance\n" +
                    "analytics.",
                images: ["/images/Chillupwebdashboard/Products 1.png",
                    "/images/Chillupwebdashboard/Transactions.png"]
            },
            {
                heading: "Key Features",
                description: "• Profile registration, verification & update\n" +
                    "• Event/activity creation with dynamic fields (date, time, location, age group, etc.)\n" +
                    "• Availability management (slots, duration, cut-off dates)\n" +
                    "• Custom tags/keywords for better discoverability\n" +
                    "• Analytics for views/bookings\n" +
                    "• Vendor package management (highlighted listings, newsletter placement)\n" +
                    "• Notifications via Firebase for real-time updates",
                images: ["/images/Chillupwebdashboard/Create_ New Class 7.png",
                    "/images/Chillupwebdashboard/Dashboard 2.png"]
            },
        ],
        techStack: ["Vue.js","TypeScript","REST APIs (Laravel)","Firebase"],
        thumbnail: "/images/Chillupwebdashboard/Dashboard 2.png",
        galleryImages: projectGalleries.Chillupwebdashboard,
        type: "web",
        domain: "frontend",
        featured: true,
        projectSummary:"Built a Vue 3 + TypeScript dashboard for vendors to create and manage kid-related events,\n" +
            "set age/interest filters, and track bookings. Vendors can manage availability, publish\n" +
            "content, and access analytics for their listings. Integrated Firebase notifications and\n" +
            "Laravel APIs to ensure real-time updates and secure data flow. The panel supports tiered\n" +
            "vendor packages and dynamic content filtering.",
        role: "Full Stack Developer"
    },

    {
        id: "3",
        slug: "KidConnect-Vendor-Dashboard",
        title: "KidConnect Vendor Dashboard",
        sections: [
            {
                heading: "Overview",
                description: "The public-facing website for KidConnect serves as the primary marketing channel and\n" +
                    "information portal. I built it using React.js with a focus on performance, SEO, and\n" +
                    "responsiveness.",
                images: ["/images/ChillupPublicWebsite/Vendor.png",
                    "/images/ChillupPublicWebsite/Parent.png",]
            },
            {
                heading: "Key Features",
                description: "• Marketing homepage with dynamic banners\n" +
                    "• Informational pages for parents and vendors\n" +
                    "• Contact page with form validation and submission API\n" +
                    "• Separate login redirects for vendors and admin\n" +
                    "• Responsive layout for mobile and desktop\n" +
                    "• Optimized for SEO and fast page loads\n" +
                    "• Newsletter signup integration\n" +
                    "• Google Analytics setup",
                images: ["/images/ChillupPublicWebsite/About.png",
                    "/images/ChillupPublicWebsite/Legal Info.png"]
            },

        ],
        techStack: ["React.js", "React Router", "Redux"],
        thumbnail: "/images/ChillupPublicWebsite/vendor.png",
        galleryImages: projectGalleries.chillupPublicWebsite,
        type: "web",
        domain: "frontend",
        featured: false,
        projectSummary:"Developed a responsive marketing site using React.js to support a parent-vendor-school\n" +
            "event platform. Includes homepage banners, vendor sign-up CTAs, contact forms, and\n" +
            "login redirects. Fully mobile-optimized with SEO best practices and fast performance.\n" +
            "Integrated analytics and newsletter capture to support lead generation. Designed for both\n" +
            "users and vendors.",
        role: "Full Stack Developer"
    },

    {
        id: "18",
        slug: "St-Chris-Directory",
        title: "St Chris Directory: Comprehensive Contact Management Platform ",
        sections: [
            {
                heading: "Overview",
                description: "A mobile-first healthcare platform connecting patients to doctors in real time.",
                images: ["img/overview1.jpg", "img/overview2.jpg"]
            },
            {
                heading: "Challenges",
                description: "Real-time booking and communication features required optimizing performance and database design.",
                images: []
            },
            {
                heading: "Solutions",
                description: "Built scalable APIs and responsive UI with React Native and Laravel.",
                images: ["img/solution1.jpg"]
            }
        ],
        techStack: ["Vue.js", "Vuex", "Isams integration"],
        thumbnail: "/images/Directory/Groups Details - User Profile.png",
        galleryImages: projectGalleries.Directory,
        type: "web",
        domain: "frontend",
        featured: true,
        
        projectSummary:"",
        
        role: "Full Stack Developer"
    },

    {
        id: "4",
        slug: "Awal-Private-Terminal-Elite-and-General-Aviation-Services-Platform",
        title: "Awal Private Terminal: Elite and General Aviation Services Platform",
        sections: [
            {
                heading: "Overview",
                description: "A mobile-first healthcare platform connecting patients to doctors in real time.",
                images: ["img/overview1.jpg", "img/overview2.jpg"]
            },
            {
                heading: "Challenges",
                description: "Real-time booking and communication features required optimizing performance and database design.",
                images: []
            },
            {
                heading: "Solutions",
                description: "Built scalable APIs and responsive UI with React Native and Laravel.",
                images: ["img/solution1.jpg"]
            }
        ],
        techStack: ["Laravel", "Vue.js", "REST APIs"],
        thumbnail: "/images/AwalTerminal/Elite Form_1@1x.svg",
        galleryImages: projectGalleries.AwalTerminal,
        type: "web",
        domain: "frontend",
        featured: false,
        
        projectSummary:"",
        
        role: "Full Stack Developer"
    },

    {
        id: "5",
        slug: "Chillup-KidConnect-React-Native-Mobile-App-for-Parents",
        title: "Chillup KidConnect React Native Mobile App for Parents",
        sections: [
            {
                heading: "Overview",
                description: "The KidConnect mobile app was designed for parents to discover, organize, and book\n" +
                    "activities for their children. I built the cross-platform app using React Native and\n" +
                    "connected it to a Laravel backend using secure APIs.",
                images: [ "/images/ChillupMobile/Booked.png",
                    "/images/ChillupMobile/School Info 1.png",]
            },
            {
                heading: "Key Features:",
                description: "• Social login: Google, Facebook, Instagram, Apple\n" +
                    "• Personalized onboarding (child’s age, school, interests)\n" +
                    "• Suggested vendors based on trends, age, interests\n" +
                    "• Create, book, and manage events\n" +
                    "• Calendar view for scheduled activities\n" +
                    "• School integration: list school events, notifications for upcoming dates\n" +
                    "• Reminders for renewals and suggested vendor actions\n" +
                    "• Spouse account (view-only access)\n" +
                    "• Smart push notifications via Firebase",
                images: ["/images/ChillupMobile/Home - Settings.png",
                    "/images/ChillupMobile/Complate your profile.png",]
            },
        ],
        techStack: ["React Native", "Redux"],
        thumbnail: "/images/ChillupMobile/Home - School.png",
        galleryImages: projectGalleries.ChillupMobile,
        type: "mobile",
        domain: "frontend",
        featured: false,
        projectSummary:"Built a cross-platform mobile app for parents using React Native, featuring social login,\n" +
            "personalized recommendations, calendar views, and activity booking. Integrated school\n" +
            "events from Google Calendar, with reminders and push notifications. Developed secure\n" +
            "APIs with Laravel and used Firebase for real-time updates. Included view-only spouse login\n" +
            "and smart renewal prompts.",
        role: "Full Stack Developer"
    },

    {
        id: "6",
        slug: "cazasouq",
        title: "Cazasouq Designed For Electronic Enthusiasts And Gamers",
        sections: [
            {
                heading: "Overview",
                description: "A mobile-first healthcare platform connecting patients to doctors in real time.",
                images: ["img/overview1.jpg", "img/overview2.jpg"]
            },
            {
                heading: "Challenges",
                description: "Real-time booking and communication features required optimizing performance and database design.",
                images: []
            },
            {
                heading: "Solutions",
                description: "Built scalable APIs and responsive UI with React Native and Laravel.",
                images: ["img/solution1.jpg"]
            }
        ],
        techStack: ["React Native", "Redux", "React Navigation"],
        thumbnail: "/images/cazasouq/Search Results.png",
        galleryImages: projectGalleries.Cazasouq,
        type: "mobile",
        domain: "frontend",
        featured: false,
        
        projectSummary:"",
        
        role: "Full Stack Developer"
    },

    {
        id: "7",
        slug: "mystartcloud",
        title: "MyStartCloud: Organize Your Cloud Workspace Efficiently",
        sections: [
            {
                heading: "Overview",
                description: "A mobile-first healthcare platform connecting patients to doctors in real time.",
                images: ["img/overview1.jpg", "img/overview2.jpg"]
            },
            {
                heading: "Challenges",
                description: "Real-time booking and communication features required optimizing performance and database design.",
                images: []
            },
            {
                heading: "Solutions",
                description: "Built scalable APIs and responsive UI with React Native and Laravel.",
                images: ["img/solution1.jpg"]
            }
        ],
        techStack: ["Laravel", "Vue.js", "Vuex"],
        thumbnail: "/images/mystartcloud/1440px - Home.png",
        galleryImages: projectGalleries.MyStartCloud,
        type: "web",
        domain: "backend",
        featured: true,
        
        projectSummary:"",
        
        role: "Full Stack Developer"
    },

    {
        id: "12",
        slug: "Springring-Web-Admin-Dashboard",
        title: "Springring Web Admin Dashboard",
        sections: [
            {
                heading: "Overview",
                description: "A mobile-first healthcare platform connecting patients to doctors in real time.",
                images: ["img/overview1.jpg", "img/overview2.jpg"]
            },
            {
                heading: "Challenges",
                description: "Real-time booking and communication features required optimizing performance and database design.",
                images: []
            },
            {
                heading: "Solutions",
                description: "Built scalable APIs and responsive UI with React Native and Laravel.",
                images: ["img/solution1.jpg"]
            }
        ],
        techStack: ["React", "Redux"],
        thumbnail: "/images/SpringringAdminWeb/Dashboard.png",
        galleryImages: projectGalleries.SpringringAdminWeb,
        type: "web",
        domain: "frontend",
        featured: true,
        
        projectSummary:"",
        
        role: "Full Stack Developer"
    },

    {
        id: "8",
        slug: "Bahrain-com-Official-Tourism-Portal-for-the-Kingdom-of-Bahrain",
        title: "Bahrain.com: Official Tourism Portal for the Kingdom of Bahrain",
        sections: [
            {
                heading: "Overview",
                description: "A mobile-first healthcare platform connecting patients to doctors in real time.",
                images: ["img/overview1.jpg", "img/overview2.jpg"]
            },
            {
                heading: "Challenges",
                description: "Real-time booking and communication features required optimizing performance and database design.",
                images: []
            },
            {
                heading: "Solutions",
                description: "Built scalable APIs and responsive UI with React Native and Laravel.",
                images: ["img/solution1.jpg"]
            }
        ],
        techStack: ["Laravel", "Blade", "MySQL"],
        thumbnail: "/images/Bahrain/DESKTOP Media - Images.png",
        galleryImages: projectGalleries.Bahrain,
        type: "web",
        domain: "backend",
        featured: false,
        
        projectSummary:"",
        
        role: "Full Stack Developer"
    },

    {
        id: "9",
        slug: "Calender-bh-Bahrain-Tourism-Official-Event-Festival-Listing-Platform",
        title: "Calender.bh: Bahrain Tourism's Official Event & Festival Listing Platform",
        sections: [
            {
                heading: "Overview",
                description: "A mobile-first healthcare platform connecting patients to doctors in real time.",
                images: ["img/overview1.jpg", "img/overview2.jpg"]
            },
            {
                heading: "Challenges",
                description: "Real-time booking and communication features required optimizing performance and database design.",
                images: []
            },
            {
                heading: "Solutions",
                description: "Built scalable APIs and responsive UI with React Native and Laravel.",
                images: ["img/solution1.jpg"]
            }
        ],
        techStack: ["Laravel", "Blade", "MySQL"],
        thumbnail: "/images/Calender/Homepage.png",
        galleryImages: projectGalleries.Calender,
        type: "web",
        domain: "backend",
        featured: true,
        
        projectSummary:"",
        
        role: "Full Stack Developer"
    },

    {
        id: "10",
        slug: "Lokal-Custom-Shopify-Integration-Product-Management-Dashboard",
        title: "Lokal: Custom Shopify Integration + Product Management Dashboard",
        sections: [
            {
                heading: "Overview",
                description: "A mobile-first healthcare platform connecting patients to doctors in real time.",
                images: ["img/overview1.jpg", "img/overview2.jpg"]
            },
            {
                heading: "Challenges",
                description: "Real-time booking and communication features required optimizing performance and database design.",
                images: []
            },
            {
                heading: "Solutions",
                description: "Built scalable APIs and responsive UI with React Native and Laravel.",
                images: ["img/solution1.jpg"]
            }
        ],
        techStack: ["Vue.js", "Vuex"],
        thumbnail: "/images/Lokal/Super Admin - Orders 1.png",
        galleryImages: projectGalleries.Lokal,
        type: "web",
        domain: "frontend",
        featured: false,
        
        projectSummary:"",
        
        role: "Full Stack Developer"
    },

    {
        id: "11",
        slug: "Spea-Map-based-School-Search-Investment-Analysis-Platform",
        title: "Spea Map-based School Search & Investment Analysis Platform",
        sections: [
            {
                heading: "Overview",
                description: "A mobile-first healthcare platform connecting patients to doctors in real time.",
                images: ["img/overview1.jpg", "img/overview2.jpg"]
            },
            {
                heading: "Challenges",
                description: "Real-time booking and communication features required optimizing performance and database design.",
                images: []
            },
            {
                heading: "Solutions",
                description: "Built scalable APIs and responsive UI with React Native and Laravel.",
                images: ["img/solution1.jpg"]
            }
        ],
        techStack: ["Vue.js", "Vuex"],
        thumbnail: "/images/Spea/Parent 03.png",
        galleryImages: projectGalleries.SPEA,
        type: "web",
        domain: "frontend",
        featured: true,
        
        projectSummary:"",
        
        role: "Full Stack Developer"
    },

    {
        id: "13",
        slug: "Springring-Teacher-Portal",
        title: "Springring Teacher Portal: Digital Platform Tailored For Educators",
        sections: [
            {
                heading: "Overview",
                description: "A mobile-first healthcare platform connecting patients to doctors in real time.",
                images: ["img/overview1.jpg", "img/overview2.jpg"]
            },
            {
                heading: "Challenges",
                description: "Real-time booking and communication features required optimizing performance and database design.",
                images: []
            },
            {
                heading: "Solutions",
                description: "Built scalable APIs and responsive UI with React Native and Laravel.",
                images: ["img/solution1.jpg"]
            }
        ],
        techStack: ["React", "React Native", "Redux"],
        thumbnail: "/images/springring TeacherPortal/Archived Boards - Classes.jpg",
        galleryImages: projectGalleries.springringTeacherPortal,
        type: "web",
        domain: "frontend",
        featured: true,
        
        projectSummary:"",
        
        role: "Full Stack Developer"
    },
    {
        id: "14",
        slug: "St-Chris-ECA-Portal",
        title: "St Chris ECA Portal: Offers Free and Paid Extra-Curricular Activities (ECAs)",
        sections: [
            {
                heading: "Overview",
                description: "A mobile-first healthcare platform connecting patients to doctors in real time.",
                images: ["img/overview1.jpg", "img/overview2.jpg"]
            },
            {
                heading: "Challenges",
                description: "Real-time booking and communication features required optimizing performance and database design.",
                images: []
            },
            {
                heading: "Solutions",
                description: "Built scalable APIs and responsive UI with React Native and Laravel.",
                images: ["img/solution1.jpg"]
            }
        ],
        techStack: ["Laravel", "Vue.js", "Tailwind CSS", "REST APIs", "MySQL"],
        thumbnail: "/images/ECA/Homepage login.png",
        galleryImages: projectGalleries.ECA,
        type: "web",
        domain: "frontend",
        featured: false,
        
        projectSummary:"",
        
        role: "Full Stack Developer"
    },
    {
        id: "15",
        slug: "Admissions",
        title: "Admissions: Offer A Comprehensive And Transparent Admissions",
        sections: [
            {
                heading: "Overview",
                description: "A mobile-first healthcare platform connecting patients to doctors in real time.",
                images: ["img/overview1.jpg", "img/overview2.jpg"]
            },
            {
                heading: "Challenges",
                description: "Real-time booking and communication features required optimizing performance and database design.",
                images: []
            },
            {
                heading: "Solutions",
                description: "Built scalable APIs and responsive UI with React Native and Laravel.",
                images: ["img/solution1.jpg"]
            }
        ],
        techStack: ["Laravel", "MySQL"],
        thumbnail: "/images/Admissions/Application 1.png",
        galleryImages: ProjectGalleries.Admissions,
        type: "web",
        domain: "frontend",
        featured: false,
        
        projectSummary:"",
        
        role: "Full Stack Developer"
    },
    {
        id: "16",
        slug: "FRC-System-Comprehensive-Lesson-Planning-Competencies-Dashboard",
        title: "FRC System: Comprehensive Lesson Planning & Competencies Dashboard",
        sections: [
            {
                heading: "Overview",
                description: "A mobile-first healthcare platform connecting patients to doctors in real time.",
                images: ["img/overview1.jpg", "img/overview2.jpg"]
            },
            {
                heading: "Challenges",
                description: "Real-time booking and communication features required optimizing performance and database design.",
                images: []
            },
            {
                heading: "Solutions",
                description: "Built scalable APIs and responsive UI with React Native and Laravel.",
                images: ["img/solution1.jpg"]
            }
        ],
        techStack: ["Laravel", "React", "Redux", "MySQL"],
        thumbnail: "/images/PDPFRC/Analytics.png",
        galleryImages: ProjectGalleries.FRC,
        type: "web",
        domain: "frontend",
        featured: true,
        
        projectSummary:"",
        
        role: "Full Stack Developer"
    },
    {
        id: "17",
        slug: "PDP-Portal-User-Management-and-Functional-Overview",
        title: "PDP Portal: User Management and Functional Overview",
        sections: [
            {
                heading: "Overview",
                description: "A mobile-first healthcare platform connecting patients to doctors in real time.",
                images: ["img/overview1.jpg", "img/overview2.jpg"]
            },
            {
                heading: "Challenges",
                description: "Real-time booking and communication features required optimizing performance and database design.",
                images: []
            },
            {
                heading: "Solutions",
                description: "Built scalable APIs and responsive UI with React Native and Laravel.",
                images: ["img/solution1.jpg"]
            }
        ],
        techStack: ["Laravel", "React", "Redux", "MySQL"],
        thumbnail: "/images/PDP/Teacher Leader_Leadership Focus.png",
        galleryImages: ProjectGalleries.PDP,
        type: "web",
        domain: "backend    ",
        featured: true,
        
        projectSummary:"",
        
        role: "Full Stack Developer"
    },

    {
        id: "19",
        slug: "Naseebi-Comprehensive-Matchmaking-Mobile-Application",
        title: "Naseebi:Comprehensive Matchmaking Mobile Application",
        sections: [
            {
                heading: "Overview",
                description: "A mobile-first healthcare platform connecting patients to doctors in real time.",
                images: ["img/overview1.jpg", "img/overview2.jpg"]
            },
            {
                heading: "Challenges",
                description: "Real-time booking and communication features required optimizing performance and database design.",
                images: []
            },
            {
                heading: "Solutions",
                description: "Built scalable APIs and responsive UI with React Native and Laravel.",
                images: ["img/solution1.jpg"]
            }
        ],
        techStack: ["React Nativd", "Redux"],
        thumbnail: "/images/NaseebiMobile/Home 1.png",
        galleryImages: ProjectGalleries.NaseebiMobile,
        type: "mobile",
        domain: "frontend",
        featured: false,
        
        projectSummary:"",
        
        role: "Full Stack Developer"
    },
    {
        id: "20",
        slug: "Safr-Care-Healthcare-Transportation-Reimagined",
        title: "Safr Care: Healthcare Transportation, Reimagined",
        sections: [
            {
                heading: "Overview",
                description: "A mobile-first healthcare platform connecting patients to doctors in real time.",
                images: ["img/overview1.jpg", "img/overview2.jpg"]
            },
            {
                heading: "Challenges",
                description: "Real-time booking and communication features required optimizing performance and database design.",
                images: []
            },
            {
                heading: "Solutions",
                description: "Built scalable APIs and responsive UI with React Native and Laravel.",
                images: ["img/solution1.jpg"]
            }
        ],
        techStack: ["Laravel", "Vue.js", "Vuetify"],
        thumbnail: "/images/safercare/image_original-1.jpg",
        galleryImages: ProjectGalleries.safercare,
        type: "web",
        domain: "Backend",
        featured: false,
        
        projectSummary:"",
        
        role: "Full Stack Developer"
    },

    {
        id: "21",
        slug: "naturallockbox",
        title: "Natural Lock Box: CPG Deduction & Sales Reporting Platform",
        sections: [
            {
                heading: "Overview",
                description: "A mobile-first healthcare platform connecting patients to doctors in real time.",
                images: ["img/overview1.jpg", "img/overview2.jpg"]
            },
            {
                heading: "Challenges",
                description: "Real-time booking and communication features required optimizing performance and database design.",
                images: []
            },
            {
                heading: "Solutions",
                description: "Built scalable APIs and responsive UI with React Native and Laravel.",
                images: ["img/solution1.jpg"]
            }
        ],
        techStack: ["Laravel", "Vue.js"],
        thumbnail: "/images/naturallockbox/image_original_4.JPG",
        galleryImages: projectGalleries.naturallockbox,
        type: "web",
        domain: "Backend",
        featured: false,
        
        projectSummary:"",
        
        role: "Full Stack Developer"
    },

];
export default projects;