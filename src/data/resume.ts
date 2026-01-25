// Resume Data for Georgi Krastev
// Senior Full-Stack Engineer / Technical Architect

export const personalInfo = {
  name: "Georgi Krastev",
  title: "Senior Full-Stack Engineer",
  subtitle: "Technical Architect & Solution Designer",
  location: "Sofia, Bulgaria",
  email: "krustevgeorgi@yahoo.com",
  phone: "+359 87 960 6986",
  languages: ["Bulgarian (Native)", "English (Professional)"],
  yearsOfExperience: 9,
  tagline: "Building scalable systems that power businesses",
  bio: "Hands-on architect with 9+ years crafting high-performance web applications, AI automation systems, and enterprise integrations. I transform complex requirements into elegant, maintainable solutions-from satellite operations platforms to fleet management systems processing thousands of transactions monthly.",
  currentlyAvailableFor: ["Senior Full Stack Engineer", "Technical Architect", "Staff Engineer", "CTO"],
  highlights: [
    "Architected platforms serving 20+ enterprise clients",
    "Led teams of 15+ developers across multiple projects",
    "Reduced support tickets by 20% through UX improvements",
    "Saved 80 hours/month through AI automation"
  ]
}

export const skills = {
  frontend: {
    title: "Frontend",
    icon: "Layout",
    items: [
      { name: "React", level: 95, years: 6 },
      { name: "TypeScript", level: 92, years: 5 },
      { name: "Vue 3", level: 88, years: 3 },
      { name: "Redux", level: 90, years: 5 },
      { name: "Tailwind CSS", level: 90, years: 4 },
      { name: "Storybook", level: 85, years: 3 },
    ]
  },
  backend: {
    title: "Backend",
    icon: "Server",
    items: [
      { name: "Node.js", level: 88, years: 6 },
      { name: "Express", level: 85, years: 5 },
      { name: "SQL", level: 82, years: 7 },
      { name: "MongoDB", level: 80, years: 4 },
      { name: "Supabase", level: 78, years: 2 },
      { name: "WebSockets", level: 85, years: 4 },
    ]
  },
  cloud: {
    title: "Cloud & DevOps",
    icon: "Cloud",
    items: [
      { name: "AWS (S3, EC2, CloudFront)", level: 85, years: 4 },
      { name: "Docker", level: 80, years: 3 },
      { name: "GitHub Actions", level: 88, years: 4 },
      { name: "CI/CD Pipelines", level: 85, years: 5 },
    ]
  },
  integrations: {
    title: "Integrations & APIs",
    icon: "Puzzle",
    items: [
      { name: "REST APIs", level: 92, years: 8 },
      { name: "SOAP APIs", level: 80, years: 3 },
      { name: "OAuth", level: 85, years: 5 },
      { name: "n8n Automation", level: 88, years: 2 },
    ]
  },
  architecture: {
    title: "Architecture",
    icon: "Boxes",
    items: [
      { name: "System Design", level: 88, years: 5 },
      { name: "RBAC", level: 85, years: 4 },
      { name: "Component Libraries", level: 90, years: 4 },
      { name: "Performance Optimization", level: 85, years: 5 },
    ]
  }
}

export const experiences = [
  {
    id: "mvp-forge",
    company: "Boutique Tech Consultancy",
    subtitle: "MVP Forge / ZenGroup",
    title: "Principal Full-Stack Engineer / Solution Architect",
    period: "2024 – Present",
    location: "Sofia, Bulgaria",
    type: "current",
    description: "Leading technical architecture and development for multiple high-impact projects, from AI automation services to enterprise fleet management systems.",
    achievements: [
      {
        title: "AI-Powered Reporting Automation",
        description: "Built a 50-step n8n pipeline automating survey data collection, period-over-period analysis, and report generation with custom JS nodes",
        impact: "Saves 80 hours/month (equivalent to 2 FTEs)",
        tags: ["n8n", "AWS", "React", "Automation"]
      },
      {
        title: "TabiSurvey Platform",
        description: "Architected and shipped an advanced survey platform with RBAC, dynamic survey builder, and comprehensive analytics",
        impact: "MVP delivered within weeks",
        tags: ["Vue 3", "Vite", "Pinia", "Supabase"]
      },
      {
        title: "Prezaredi.bg Fleet Management",
        description: "Led development of fuel payments & fleet card platform for corporate clients with BORICA payment integration",
        impact: "~400 fleet cards, 20+ corporate clients, thousands of transactions/month, ~99% uptime",
        tags: ["React Native", "AWS", "SQL", "SOAP API"]
      },
      {
        title: "Team Leadership",
        description: "Coordinated ~15 external developers, designers, and PMs. Made architectural decisions and negotiated with enterprise partners.",
        impact: "Successful delivery across multiple concurrent projects",
        tags: ["Leadership", "Architecture", "Stakeholder Management"]
      }
    ],
    technologies: ["React", "Vue 3", "React Native", "Node.js", "AWS", "SQL", "n8n", "SOAP", "GitHub Actions"]
  },
  {
    id: "endurosat",
    company: "EnduroSat",
    subtitle: "Satellite Technology Company",
    title: "Technical Lead & Platform Architect",
    officialTitle: "Product Manager",
    period: "Dec 2022 – Dec 2025",
    location: "Sofia, Bulgaria",
    type: "recent",
    description: "Transformed the satellite operations platform with a complete V2 rewrite, establishing component architecture standards across multiple product teams.",
    achievements: [
      {
        title: "Platform V2 Rewrite",
        description: "Completely rewrote the Satellite Operations Platform from a messy legacy codebase to a modern React/Redux architecture",
        impact: "Significant performance improvements",
        tags: ["React", "Redux", "Architecture", "Performance"]
      },
      {
        title: "Component Library",
        description: "Built a comprehensive component library from scratch with Storybook, standardizing UI across all internal products",
        impact: "Centralized ~20-25% of codebase into shared, tested components",
        tags: ["Storybook", "Component Library", "Design System"]
      },
      {
        title: "Customer Success Portal",
        description: "Developed MyEnduroSat customer success portal improving service management, mission tracking, and self-service capabilities for satellite operators",
        impact: "Reduced support tickets by ~20%",
        tags: ["React", "UX", "Customer Portal", "Dashboard"]
      }
    ],
    technologies: ["React", "Redux", "TypeScript", "AWS S3", "CloudFront", "EC2", "Cognito", "GitHub Actions", "Storybook"]
  },
  {
    id: "devcloud",
    company: "DevCloud BG",
    subtitle: "Industrial Robotics",
    title: "Senior Frontend Engineer",
    period: "2019 – 2022",
    location: "Sofia, Bulgaria",
    type: "past",
    description: "Built real-time control systems for industrial robots used in silicon wafer manufacturing, deployed and tested in production environments in China.",
    achievements: [
      {
        title: "Robot Control Center (RCC)",
        description: "Built a React web application with WebSocket real-time communication for robot control and monitoring",
        impact: "Deployed and tested in production in China",
        tags: ["React", "WebSockets", "Real-time"]
      },
      {
        title: "Visual Workflow Builder",
        description: "Created a block-based visual programming interface for scheduling and orchestrating robot commands",
        impact: "Enabled non-developers to program robot sequences",
        tags: ["Visual Programming", "Drag & Drop", "UX"]
      }
    ],
    technologies: ["React", "WebSockets", "Node.js", "Industrial IoT"]
  },
  {
    id: "aucoda",
    company: "Aucoda",
    subtitle: "UK-based Tech Startup",
    title: "Software Engineer",
    period: "2017 – 2019",
    location: "Remote / UK",
    type: "past",
    description: "Contributed to a revolutionary programming language platform that generates production-ready native apps for iOS, web, and Android from a single codebase.",
    achievements: [
      {
        title: "OAuth Implementation",
        description: "Implemented OAuth authentication flows for iOS and web platforms",
        impact: "Enabled secure third-party authentication",
        tags: ["OAuth", "iOS", "Web", "Security"]
      },
      {
        title: "Syntax Processing Engine",
        description: "Developed custom syntax processing and parsing for the AU programming language",
        impact: "Core language feature implementation",
        tags: ["Parsing", "Compiler", "JavaScript"]
      }
    ],
    technologies: ["JavaScript", "iOS", "Swift", "OAuth", "Compilers"]
  }
]

export const caseStudies = [
  {
    id: "tabisurvey",
    title: "TabiSurvey Platform",
    subtitle: "Advanced Survey & Analytics System",
    category: "Full-Stack Development",
    thumbnail: "survey",
    problem: "Organizations needed a modern, flexible survey platform with advanced analytics, role-based access control, and the ability to create complex multi-step surveys without technical expertise.",
    constraints: [
      "Complex RBAC requirements for enterprise clients",
      "Dynamic survey builder with conditional logic",
      "Real-time analytics and reporting",
      "Rapid MVP delivery timeline"
    ],
    approach: [
      "Architected modern Vue 3 + Vite frontend with Pinia state management",
      "Implemented comprehensive RBAC system for multi-tenant access",
      "Built dynamic survey builder with drag-and-drop interface",
      "Created real-time analytics dashboard with data visualization",
      "Integrated Supabase for backend and authentication"
    ],
    architecture: {
      frontend: ["Vue 3", "Vite", "Pinia"],
      backend: ["Supabase", "PostgreSQL"],
      cloud: ["Supabase Hosting"],
      integrations: ["Auth System", "Analytics API", "Export Services"]
    },
    results: [
      { metric: "MVP", label: "Delivered in Weeks" },
      { metric: "100%", label: "Feature Complete" },
      { metric: "5+", label: "Survey Types" },
      { metric: "Real-time", label: "Analytics" }
    ],
    risks: [
      "Scope creep managed through clear MVP definition",
      "Performance ensured through efficient state management"
    ],
    teamSize: 3,
    duration: "2024"
  },
  {
    id: "robot-control-center",
    title: "Robot Control Center",
    subtitle: "Industrial Robotics Platform",
    category: "Real-Time Systems",
    thumbnail: "robot",
    problem: "Silicon wafer manufacturing required a sophisticated control system for industrial robots, with real-time monitoring, visual programming for command sequences, and deployment in international production environments.",
    constraints: [
      "Real-time WebSocket communication requirements",
      "Visual programming for non-technical operators",
      "International deployment (China production environment)",
      "Industrial-grade reliability requirements"
    ],
    approach: [
      "Built React web application with WebSocket real-time communication",
      "Created block-based visual programming interface for robot commands",
      "Implemented real-time monitoring dashboard with status indicators",
      "Designed intuitive UX for factory floor operators",
      "Deployed and tested in production environment in China"
    ],
    architecture: {
      frontend: ["React", "WebSockets", "Canvas"],
      backend: ["Node.js", "WebSocket Server"],
      cloud: ["Industrial IoT Infrastructure"],
      integrations: ["Robot APIs", "Monitoring Systems", "Command Queues"]
    },
    results: [
      { metric: "Real-time", label: "Control & Monitoring" },
      { metric: "Visual", label: "Programming Interface" },
      { metric: "Production", label: "Deployed in China" },
      { metric: "24/7", label: "Factory Operation" }
    ],
    risks: [
      "Latency managed through optimized WebSocket protocols",
      "Reliability ensured through redundant communication channels"
    ],
    teamSize: 4,
    duration: "2019 – 2022"
  },
  {
    id: "prezaredi",
    title: "Prezaredi.bg Fleet Management",
    subtitle: "Enterprise Fuel Payment Platform",
    category: "Full-Stack Architecture",
    thumbnail: "fuel",
    problem: "Corporate clients needed a unified platform for managing fuel payments across multiple petrol station networks, with secure card issuance and real-time transaction tracking.",
    constraints: [
      "Integration with legacy BORICA SOAP APIs for card issuance",
      "Real-time reconciliation between multiple payment providers",
      "High availability requirements (~99% uptime)",
      "Mobile-first approach for field workers"
    ],
    approach: [
      "Designed microservices architecture with AWS backend",
      "Implemented BORICA SOAP integration for card printing and PIN management",
      "Built React Native mobile app for iOS and Android",
      "Created automated reconciliation system to handle invoice discrepancies",
      "Set up comprehensive CI/CD with GitHub Actions"
    ],
    architecture: {
      frontend: ["React Native", "React (Admin)"],
      backend: ["Node.js", "Express", "SQL"],
      cloud: ["AWS S3", "EC2", "CloudFront"],
      integrations: ["BORICA SOAP API", "Petrol Station APIs", "Email Notifications"]
    },
    results: [
      { metric: "20+", label: "Corporate Clients" },
      { metric: "400+", label: "Fleet Cards Issued" },
      { metric: "99%", label: "System Uptime" },
      { metric: "1000s", label: "Transactions/Month" }
    ],
    risks: [
      "Reconciliation mismatches (e.g., 55 vs 55.50) resolved through standardized rounding rules",
      "Card security handled via IVR system with AI voice for lost/stolen card blocking"
    ],
    teamSize: 15,
    duration: "Feb 2024 – Present"
  },
  {
    id: "endurosat-platform",
    title: "Satellite Operations Platform V2",
    subtitle: "Mission-Critical Space Tech",
    category: "Platform Rewrite",
    thumbnail: "satellite",
    problem: "Legacy satellite operations platform was difficult to maintain, had performance issues, and lacked consistent UI patterns across different product areas.",
    constraints: [
      "Cannot disrupt ongoing satellite missions",
      "Multiple teams with different UI implementations",
      "Complex state management requirements",
      "Must maintain backwards compatibility"
    ],
    approach: [
      "Incremental V2 rewrite maintaining feature parity",
      "Built component library with Storybook for UI standardization",
      "Implemented centralized state management with Redux",
      "Created shared utilities and hooks for cross-team use"
    ],
    architecture: {
      frontend: ["React", "Redux", "TypeScript", "Storybook"],
      backend: ["AWS Services"],
      cloud: ["S3", "CloudFront", "EC2", "Cognito"],
      integrations: ["Satellite Ground Stations", "Mission Control Systems"]
    },
    results: [
      { metric: "20-25%", label: "Code Centralized" },
      { metric: "20%", label: "Fewer Support Tickets" },
      { metric: "3x", label: "Faster Development" },
      { metric: "100%", label: "UI Consistency" }
    ],
    risks: [
      "Migration risk mitigated through phased rollout",
      "Performance monitored with automated alerts"
    ],
    teamSize: 8,
    duration: "Dec 2022 – Dec 2025"
  },
  {
    id: "ai-automation",
    title: "AI-Powered Report Automation",
    subtitle: "n8n Workflow Engine",
    category: "Automation & AI",
    thumbnail: "automation",
    problem: "Manual survey data collection, analysis, and report generation consumed significant team hours every month, leading to delays and inconsistencies.",
    constraints: [
      "Multiple data sources with different formats",
      "Reports needed period-over-period comparison",
      "Must be accessible via web app and email",
      "Required custom business logic for insights"
    ],
    approach: [
      "Designed 50-step n8n automation pipeline",
      "Built custom JavaScript nodes for complex data transformations",
      "Integrated AWS S3 for report storage",
      "Created React frontend for report access and download"
    ],
    architecture: {
      frontend: ["React", "Report Viewer"],
      backend: ["n8n", "Custom JS Nodes"],
      cloud: ["AWS S3"],
      integrations: ["Survey APIs", "Email Service", "AWS"]
    },
    results: [
      { metric: "80", label: "Hours Saved/Month" },
      { metric: "50", label: "Automation Steps" },
      { metric: "2 FTE", label: "Equivalent Savings" },
      { metric: "100%", label: "Report Accuracy" }
    ],
    risks: [
      "Data quality ensured through validation steps",
      "Fallback notifications for pipeline failures"
    ],
    teamSize: 2,
    duration: "2024"
  }
]

export const metrics = [
  { value: "9+", label: "Years Experience", icon: "Calendar" },
  { value: "15+", label: "Team Members Led", icon: "Users" },
  { value: "20+", label: "Enterprise Clients", icon: "Building" },
  { value: "99%", label: "System Uptime", icon: "Activity" },
  { value: "80h", label: "Monthly Hours Saved", icon: "Clock" },
  { value: "3", label: "Countries Deployed", icon: "Globe" }
]

export const howIWork = [
  {
    title: "Discovery & Architecture",
    description: "I start by deeply understanding the problem space, stakeholder needs, and technical constraints. This leads to clear architectural decisions documented for the team.",
    icon: "Search"
  },
  {
    title: "Rapid Prototyping",
    description: "I believe in shipping early and iterating. MVPs get validated quickly, and feedback loops are short. No analysis paralysis.",
    icon: "Zap"
  },
  {
    title: "Clean, Maintainable Code",
    description: "Component libraries, design systems, and shared utilities. I build foundations that scale and that other developers love working with.",
    icon: "Code"
  },
  {
    title: "Async-First Communication",
    description: "Clear documentation, recorded decisions, and structured updates. I work effectively across timezones and with distributed teams.",
    icon: "MessageSquare"
  }
]

export const education = {
  institution: "University of Manchester",
  degree: "Studied Computer Science",
  period: "2015 – 2017",
  location: "Manchester, UK"
}

export const navigation = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Case Studies", href: "#cases" },
  { label: "Contact", href: "#contact" }
]
