// Personal Information
export const personalInfo = {
  name: "Anupam Sanidhya",
  title: "Technical Product Manager",
  tagline:
    "Bridging technical expertise with business strategy to build customer-centric solutions",
  bio: "Product Management & Strategy professional with 3+ years of experience in product strategy & development. Led cross-functional teams to deliver high-impact products, improving operational efficiency by 50% and reducing customer complaints by 20%. Skilled in Agile/SAFe® methodologies, user research, and data-driven decision-making.",
  about:
    "The world of technology has always fascinated me and I'm always up for exploring and learning new things. It started with opening up random toys and machines to get to know them better, to making things that make them smarter. The power of social media, which can connect so many people at once, made me more interested in the computer science sector. Video Games and Movies give me bewildering surrealism, providing a pathway for cerebral solace.",
  email: "asanid@uw.edu",
  phone: "+1-206-519-2052",
  location: "Seattle, WA, USA",
  resumeUrl: "#",
  social: {
    linkedin: "https://linkedin.com/in/anupamsanidhya",
    github: "https://github.com/iridescent-anupam",
  },
};

// Core Competencies
export const coreCompetencies = [
  "Product Strategy & Roadmap Development",
  "Agile/SAFe® Methodologies & Sprint Planning",
  "Cross-functional Team Leadership",
  "Data-driven Decision Making & Analytics",
  "User Research & Customer-Centric Design",
  "Stakeholder Management & Communication",
  "Technical Product Management",
  "B2B SaaS Product Development",
  "Microsoft Dynamics 365 CRM Integration",
  "API Design & Integration Architecture",
];

// Projects - Brief for homepage, full details available
export const projects = [
  {
    id: "pco-connect",
    title: "PCO Connect",
    role: "Product Manager",
    company: "University of Washington",
    year: "2025",
    duration: "Jun 2025 - Aug 2025",
    image:
      "https://teachwithtvw.org/wp-content/uploads/2023/05/TWT_FeatureImage_1200x628.jpg",
    description:
      "Led end-to-end product delivery of a statewide civic education platform to increase political engagement among Washington State residents, particularly young voters (18-24).",
    challenge:
      "Only 16% of 18-24 year-olds voted in 2023 elections due to fragmented county-level information and lack of accessible resources about Precinct Committee Officers (PCOs).",
    solution:
      "Built an AI-accelerated platform using Next.js 15, TypeScript, React 19, integrating county-level PCO directories, U.S. Census Geocoding API, and interactive mapping to centralize civic information.",
    fullDescription: `Led the end-to-end product delivery of PCO Connect, a statewide civic education website designed to increase political engagement among Washington State residents, particularly young voters (18-24), by demystifying the role of Precinct Committee Officers (PCOs).

Key Contributions:
• Defined product vision, requirements, and roadmap to address low youth civic engagement (only 16% of 18-24 year-olds voted in 2023), translating stakeholder needs into technical specifications and user stories.
• Built the platform using AI-accelerated development in Cursor with Next.js 15, TypeScript, React 19, Tailwind CSS, and shadcn/UI, demonstrating hands-on technical product leadership.
• Architected a scalable backend using Next.js API routes, integrating county-level PCO directories from JSON datasets, U.S. Census Geocoding API for address-to-county lookup, and Excel-to-JSON data pipeline for flexible content management.
• Designed and implemented key features: What is a PCO, Become a PCO (eligibility, timeline, myth vs. fact), Party Platforms comparison, Find Your Precinct (county directory), and Resources hub with videos and FAQs.
• Ensured accessibility-first design (WCAG compliance), mobile responsiveness, and optimal performance through React-Leaflet integration and OpenStreetMap tiles.
• Delivered comprehensive technical documentation including system architecture diagrams, API specifications, deployment runbook, and user guide for seamless handoff and future iteration.
• Successfully deployed on Netlify with CI/CD pipeline, resolving React 19 peer dependency conflicts and Node version compatibility for production stability.

Impact: Centralized fragmented county-level information into a single, user-friendly platform that lowers barriers to civic participation and empowers residents to take meaningful action in grassroots politics.`,
    metrics: [
      { value: "1", label: "Statewide Platform" },
      { value: "39", label: "Counties Covered" },
      { value: "18-24", label: "Target Age" },
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "React",
      "Product Strategy",
      "Netlify",
      "API Design",
    ],
    technologies: [
      "Next.js 15",
      "TypeScript",
      "React 19",
      "Tailwind CSS",
      "shadcn/UI",
      "U.S. Census API",
      "React-Leaflet",
      "OpenStreetMap",
      "Netlify",
    ],
    liveUrl: "https://tvwpco.netlify.app/",
    media: [
      {
        type: "video",
        url: "https://youtu.be/VH60RthnNis",
        title: "PCO Connect Demo & Walkthrough",
        thumbnail:
          "https://img.youtube.com/vi/VH60RthnNis/maxresdefault.jpg",
      },
      {
        type: "pdf",
        url: "https://docs.google.com/document/d/1XkLKeQXMYR0_K5eKk-tqfJUp_pUTnhP7/edit?usp=sharing&ouid=111184055108168585195&rtpof=true&sd=true",
        title: "Technical Documentation & Product Spec",
      },
    ],
  },
  {
    id: "canvas-events",
    title: "Canvas+ Events",
    role: "Product Manager",
    company: "University of Washington",
    year: "2025",
    duration: "May 2025 - Jun 2025",
    image:
      "https://images.unsplash.com/photo-1741636174266-a090f9427ec0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwY2FtcHVzJTIwZXZlbnRzfGVufDF8fHx8MTc2MzQyOTUwOXww&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "Designed and prototyped a platform integrated into Canvas LMS to create a personalized hub helping students find events, connect with peers, and feel a sense of belonging.",
    challenge:
      "Students struggled to discover campus events and often felt anxious about attending alone, leading to low engagement and feelings of isolation.",
    solution:
      "Created a Netflix-style interface with personalized 'For You' feed, social visibility showing classmate attendance, and smart filters integrated directly into Canvas LMS.",
    fullDescription: `We designed and prototyped Canvas+ Events, a platform integrated directly into the Canvas LMS to create a centralized, personalized hub that helps students find events, connect with peers, and feel a true sense of belonging. It features a "Netflix-style" interface with visual, scrollable event cards, making discovery intuitive and engaging.

Key features include:
• A personalized "For You" feed that recommends events based on a student's major, interests, and past attendance.
• A social visibility layer that shows which classmates are attending an event, reducing the anxiety of showing up alone.
• Smart filters and seamless calendar integration to make planning effortless.

As the Product Manager, I led our team through an end-to-end design process that went beyond surface-level features. My focus was on a deep, human-centered strategy, applying key academic frameworks to our design:
• We started by identifying student "be-goals" (to be connected, to be included) and designed to meet fundamental psychological needs for relatedness and competence, drawing on Hassenzahl's models.
• Our design accounted for Kahneman's two selves: we created a seamless experiencing self journey while ensuring the remembering self would retain a positive story of connection and belonging.
• Grounded in the work of Mekler & Hornbæk, we designed for meaning by focusing on connectedness, purpose, and coherence to foster eudaimonic well-being—not just a useful tool, but a platform for growth.`,
    metrics: [
      { value: "100%", label: "Canvas Integration" },
      { value: "5", label: "Key Features" },
      { value: "UX", label: "Research-Driven" },
    ],
    tags: [
      "UX Research",
      "Human-Centered Design",
      "Prototyping",
      "Product Strategy",
      "Canvas LMS",
    ],
    technologies: [
      "Figma",
      "User Research",
      "Lean Canvas",
      "UX Design",
      "Prototyping",
    ],
    media: [
      {
        type: "video",
        url: "https://www.youtube.com/watch?v=vztr9XzG81s",
        title: "Canvas+ Events Video",
        thumbnail:
          "https://img.youtube.com/vi/vztr9XzG81s/maxresdefault.jpg",
      },
      {
        type: "pdf",
        url: "https://drive.google.com/file/d/1GanLJke9CaDgGGfijonrWhI8GqN7KyS4/view?usp=drive_link",
        title: "Canvas+ Events Presentation",
      },
    ],
  },
  {
    id: "pinterest-strategy",
    title: "Pondering on Pinterest",
    role: "Product Strategist",
    company: "University of Washington",
    year: "2025",
    duration: "Jan 2025 - Mar 2025",
    image:
      "https://images.ctfassets.net/2pyx8rwuvz6x/6y134GLJ4XZWMPsLmTPu9M/01b4965f714dc63085e46dfd905a8096/optimized_JM_Summer_Trends_Pin_Grid.jpg?fm=webp&q=85",
    description:
      "Developed transformation strategy evolving Pinterest from passive inspiration platform into interactive ecosystem where users discover, create, and take action.",
    challenge:
      "Pinterest faced challenges with ad density, international monetization, and needed to transform from passive browsing to active engagement.",
    solution:
      "Created $6-7M 3-year strategic roadmap with Buy vs. Build analysis, prioritizing Creator Monetization, Visual Shopping Hub, and Community Features.",
    fullDescription: `Developed a transformation strategy that evolves Pinterest from a passive inspiration platform into an interactive ecosystem where users can discover, create, and take action.

Our process began with a thorough current state analysis across Product, Customer, Business, and Technology dimensions. This revealed key insights:
• Pinterest's unique position at the intersection of search, social, and commerce
• Strong engagement metrics but challenges with ad density and international monetization
• Technical strengths in AI/ML with opportunities for infrastructure optimization

From this analysis, we identified our North Star metric: Weekly Active Users (WAU), and developed three strategic objectives:
1️⃣ Enhance discoverability and usability
2️⃣ Accelerate revenue growth and diversify income streams
3️⃣ Foster community engagement and user-generated content

Our roadmap prioritizes initiatives using a custom framework that balances business value, customer impact, and technical feasibility:
• Creator Monetization & Visual Shopping Hub ($1.28M-$1.39M)
• Localized Performance Infrastructure ($2.26M-$2.4M)
• Enhanced Discovery & UX improvements ($610K-$1.02M)
• Strategic Brand & Influencer Partnerships ($1M-$1.26M)
• Community-Building Features ($880K-$950K)

We applied a strategic Buy vs. Build analysis to each initiative, determining where to develop in-house capabilities versus leveraging partnerships.

With a total investment of $6-7M over three years, our financial projections show significant ROI: 5.27% increase in conversion revenue, 35% reduction in cloud costs, and substantial improvements in user engagement metrics.`,
    metrics: [
      { value: "$6-7M", label: "Investment" },
      { value: "5.27%", label: "Revenue Growth" },
      { value: "35%", label: "Cost Reduction" },
    ],
    tags: [
      "Product Strategy",
      "Financial Analysis",
      "Roadmap Planning",
      "Buy vs Build",
    ],
    technologies: [
      "Strategic Analysis",
      "Financial Modeling",
      "OKRs",
      "Roadmap Planning",
    ],
  },
  {
    id: "duolingo-green-owls",
    title: "The Green Owls - Duolingo Product Case",
    role: "Product Manager",
    company: "University of Washington",
    year: "2024",
    duration: "Oct 2024 - Dec 2024",
    image:
      "https://dinakaran.dev/blog/assets/images/duolingo.jpg",
    description:
      "Comprehensive project reimagining Duolingo's future through innovative features LingoLores (cultural storytelling) and DuoDiscuss (community forums).",
    challenge:
      "Language learning lacks cultural context and community engagement, limiting user retention and depth of learning experience.",
    solution:
      "Proposed LingoLores for gamified cultural storytelling and DuoDiscuss for collaborative community learning, with full MVP, roadmap, and investor pitch.",
    fullDescription: `A comprehensive project that reimagined Duolingo's future through innovative features and robust management frameworks.

🔍 Strategic Analysis:
Conducted user research and SWOT analysis aligned with Duolingo's OKRs.

🎭 Agile Roles:
Adopted roles to support Agile workflows:
• Product Manager: Defined vision and strategy
• Product Owner: Managed backlog and priorities
• Project Manager: Oversaw timelines and resources
• Scrum Master: Facilitated ceremonies and removed obstacles

💡 Feature Proposals:
• LingoLores: Gamified cultural storytelling for immersive learning
• DuoDiscuss: Community forums for collaborative feedback

🧠 Artifacts Delivered:
• Project Charter: Defined scope and goals
• Buy vs Build Analysis: Evaluated development options
• PR FAQ + MVP: Drafted materials for feature launch
• Investor Pitch: Built a funding case
• Roadmap: Mapped feature timelines
• Backlog: Prioritized user stories

📊 Project Management:
• Network Mapping: Tracked dependencies
• Change Management: Handled scope shifts
• Risk Mitigation: Addressed potential blockers

🚀 Launch Planning:
Finalized launch for LingoLores with defined feature purpose, strategy, progress updates, rollout steps, and launch strategy.`,
    metrics: [
      { value: "2", label: "New Features" },
      { value: "100%", label: "Agile Framework" },
      { value: "MVP", label: "Ready" },
    ],
    tags: [
      "Product Management",
      "Scrum",
      "Agile",
      "MVP Development",
      "Roadmap Planning",
    ],
    technologies: [
      "Agile/Scrum",
      "Product Charter",
      "User Stories",
      "Roadmap",
      "Investor Pitch",
    ],
  },
];

// Experience
export const experience = [
  {
    id: "lexmark-tpm2",
    role: "Technical Product Manager 2",
    company: "Lexmark International",
    location: "Kolkata, India",
    period: "Aug 2023 - Aug 2024",
    logo: "https://iprsoftwaremedia.com/84/files/20255/6862d6f13d6332b07be6dd6b_xer-lexmk_RGB%20LinkedIn%201/xer-lexmk_RGB%20LinkedIn%201_d9b176da-b824-4bc2-96fe-5b4579ac09f4-prv.png",
    description:
      "Led product strategy and development for enterprise web applications, achieving 40% improvement in release velocity and 99.9% uptime for 1000+ global users.",
    achievements: [
      "Accelerated product adoption by 30% across 5 global markets by aligning roadmap to business OKRs & KPIs, introducing data-driven prioritization, and quarterly business reviews",
      "Improved release velocity by 40% through SAFe® agile based sprint planning & execution, standardizing backlog and acceptance criteria, reducing requirement-related defects by 25%",
      "Doubled internal operational efficiency by launching a ReactJS & FluentUI powered web portal with RESTful APIs and regression test automation, supporting 1000+ global users with 99.9% uptime",
      "Increased B2B partner sales by 10% and reduced transactional errors by 25% by redesigning parts disposition & claims workflow and automating CI/CD post-launch validation pipelines",
      "F2F 2023 Participation: Built Power Automate flow using AI Builder for multilingual case creation from email within 2 minutes",
    ],
    skills: [
      "ServiceNow",
      "Sprint Backlog",
      "Microsoft Azure",
      "ReactJS",
      "FluentUI",
      "REST API",
      "CI/CD",
      "Azure DevOps",
      "Power Automate",
      "AI Builder",
      "SAFe Agile",
      "Product Strategy",
      "OKRs",
      "Stakeholder Management",
      "B2B SaaS",
      "Dynamics 365",
    ],
  },
  {
    id: "lexmark-tpm",
    role: "Technical Product Manager",
    company: "Lexmark International",
    location: "Kolkata, India",
    period: "Jun 2021 - Jul 2023",
    logo: "https://iprsoftwaremedia.com/84/files/20255/6862d6f13d6332b07be6dd6b_xer-lexmk_RGB%20LinkedIn%201/xer-lexmk_RGB%20LinkedIn%201_d9b176da-b824-4bc2-96fe-5b4579ac09f4-prv.png",
    description:
      "Spearheaded Field Service Mobile App development and Microsoft Dynamics 365 CRM enhancements, improving performance by 50% and elevating NPS by 15 points.",
    achievements: [
      "Spearheaded Field Service Mobile App (FSMA) roadmap & development, improving app's performance by 50% and deploying 15+ critical features on MVP across NA, LA, EMEA, boosting field technician efficiency",
      "Reduced order processing errors by 15%, ensuring business continuity across EMEA, by resolving system-level tax and RMA logic issues via proactive stakeholder alignment",
      "Improved global communications accuracy by 30% by re-architecting a multilingual Notification Engine (19 languages) with Azure serverless functions and A/B testing enhancements",
      "Elevated NPS by 15 points by resolving 100+ high-impact Dynamics 365 CRM defects and enhancing D365-SAP-MDM data integration, reducing complaints by 20%",
    ],
    skills: [
      "ServiceNow",
      "Sprint Backlog",
      "React Native",
      "Microsoft Dynamics 365",
      "Azure Functions",
      "SAP Integration",
      "Multilingual Systems",
      "A/B Testing",
      "CRM",
      "Mobile App Development",
      "Agile/Scrum",
      "Cross-functional Leadership",
      "Data Integration",
      "NPS Improvement",
      "Global Markets",
      "Field Service",
      "JavaScript",
      "Azure",
      "Product Roadmap",
      "User Research",
      "Stakeholder Management",
      "API Integration",
      "Performance Optimization",
    ],
  },
];

// Education
export const education = [
  {
    id: "uw",
    degree: "Master of Science - MS",
    field: "Information Management",
    school: "University of Washington",
    location: "Seattle, WA",
    period: "2024 - 2025",
    gpa: "3.93/4.0",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/58/University_of_Washington_seal.svg/1200px-University_of_Washington_seal.svg.png",
    description:
      "Early Career Track (ECA) with Program/Product Management & Consulting Specialization (PPMC)",
    achievements: [
      "GPA: 3.93/4.0",
      "Specialization in Product Management & Consulting",
      "Led multiple product case studies including Duolingo, Pinterest, and Starbucks",
      "Developed civic tech platform PCO Connect serving Washington State",
    ],
  },
  {
    id: "iiest",
    degree: "Bachelor of Technology - BTech",
    field: "Information Technology",
    school:
      "Indian Institute of Engineering Science and Technology (IIEST), Shibpur",
    location: "Howrah, WB, India",
    period: "2017 - 2021",
    gpa: "8.13/10 CGPA",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOxJU-TqO-IVKl_NyUf1wcEpsjuV_pqR4c-w&s",
    description: "First Class with Honours",
    achievements: [
      "CGPA: 8.13/10 (First Class with Honours)",
      "1st position at College Level - Smart India Hackathon 2020",
      "Built drone prototype for last-mile delivery using Raspberry Pi, GPS, LiDAR, and FPV Camera",
      "Developed Smart Graphics System and Intelligent Embedded Systems projects",
    ],
  },
];

// Skills organized by category
export const skills = [
  {
    category: "Product Management",
    skills: [
      "Product Strategy & Roadmap",
      "Product Lifecycle Management",
      "Agile/Scrum/SAFe®",
      "User Research & UX",
      "Data-driven Decision Making",
      "Stakeholder Management",
      "OKRs & KPIs",
      "A/B Testing",
      "Product Analytics",
    ],
  },
  {
    category: "Technical Skills",
    skills: [
      "JavaScript",
      "TypeScript",
      "ReactJS",
      "React Native",
      "Next.js",
      "Node.js",
      "Python",
      "SQL",
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      "Microsoft Azure",
      "Azure Functions",
      "Azure DevOps",
      "CI/CD Pipelines",
      "Netlify",
      "Vercel",
    ],
  },
  {
    category: "Enterprise Systems",
    skills: [
      "Microsoft Dynamics 365 CRM",
      "SAP Integration",
      "ServiceNow",
      "Power Automate",
      "AI Builder",
    ],
  },
  {
    category: "Design & Tools",
    skills: [
      "Figma",
      "FluentUI",
      "Tailwind CSS",
      "shadcn/UI",
      "RESTful APIs",
      "Git",
    ],
  },
  {
    category: "Methodologies",
    skills: [
      "SAFe® Agile",
      "Scrum",
      "Sprint Planning",
      "Backlog Management",
      "User Stories",
      "Buy vs Build Analysis",
    ],
  },
];

// Certifications
export const certifications = [
  {
    id: "ibm-pm",
    title: "Product Management: An Introduction",
    issuer: "Coursera (IBM)",
    date: "Jan 2025",
    credentialId: "15XDPM78WDTT",
    logo: "https://images.credly.com/images/6abd5c40-4663-4c4c-ab4e-ea4a86269db6/twitter_thumb_201604_image.png",
    skills: [
      "Product Management",
      "Product Lifecycle Management",
      "Value Creation",
    ],
  },
  {
    id: "azure-fundamentals",
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "Nov 2022",
    credentialId: "I492-8347",
    logo: "https://images.credly.com/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png",
    skills: ["Microsoft Azure", "Azure Functions"],
  },
  {
    id: "dynamics-crm",
    title:
      "Microsoft Certified: Dynamics 365 Fundamentals (CRM)",
    issuer: "Microsoft",
    date: "Aug 2021",
    credentialId: "H942-5037",
    logo: "https://images.credly.com/images/42992295-0ee2-4527-982d-e51efbec40fc/dynamics365-fundamentals-crm-600x600.png",
    skills: [
      "Microsoft Dynamics CRM",
      "Microsoft Dynamics 365",
    ],
  },
];

// Awards & Honors
export const awards = [
  {
    id: "lexquest-2023",
    title: "LexQuest 2023 Winner",
    issuer: "Lexmark International",
    date: "Oct 2023",
    description:
      "1st position in Lexmark's LexQuest Quiz competition",
  },
  {
    id: "rtw-2023",
    title: "Right This Way (RTW) Award",
    issuer: "Lexmark International",
    date: "Mar 2023",
    description:
      "Awarded for mentoring junior team members with JavaScript training & developing Field Service Mobile App",
  },
  {
    id: "rtw-2022",
    title: "Right This Way (RTW) Award",
    issuer: "Lexmark International",
    date: "Nov 2022",
    description:
      "Awarded for mentoring junior team members with JavaScript training & developing Field Service Mobile App",
  },
  {
    id: "appreciation-2022",
    title: "Appreciation Award for MLDDA & MPSEI",
    issuer: "Lexmark International",
    date: "Sep 2022",
    description:
      "A token of appreciation for the successful launch of MPS Express Indirect and MLDDA",
  },
  {
    id: "sih-2020",
    title: "Smart India Hackathon - 1st Position",
    issuer: "Smart India Hackathon",
    date: "Jan 2020",
    description:
      "1st position at College Level for building a Drone prototype for last-mile delivery in multi-storeyed society (AWS topic AN318)",
  },
];