export const portfolioData = {
  personal: {
    name: "Arya Deepak Wazalwar",
    title: "Product Data Science Enthusiast",
    subtitle: "Electronics & Telecommunication Engineering student passionate about Product Data Science and AI/ML Innovation",
    location: "Pune, India",
    phone: "+91-8999757332",
    email: "aryawazalwar15@gmail.com",
    linkedin: "https://www.linkedin.com/in/arya-wazalwar-196485259/",
    github: "https://github.com/aryaw001/",
    about: "Analytical and result-oriented Electronics Telecommunication Engineering student with strong foundations in Python, Machine Learning, and Data Analytics. Experienced in real-world data projects, building end-to-end pipelines, and deploying analytical dashboards. Passionate about turning complex datasets into actionable insights through statistical modeling, visualization, and predictive analytics."
  },
  
  skills: {
    "Programming & Tools": [
      { name: "Python", level: 90, icon: "fab fa-python" },
      { name: "SQL", level: 85, icon: "fas fa-database" },
      { name: "JavaScript/TypeScript", level: 80, icon: "fab fa-js" },
      { name: "Embedded C", level: 75, icon: "fas fa-microchip" }
    ],
    "AI/ML & Analytics": [
      { name: "Pandas & NumPy", level: 90, icon: "fas fa-chart-line" },
      { name: "Scikit-learn", level: 85, icon: "fas fa-robot" },
      { name: "Machine Learning", level: 85, icon: "fas fa-brain" },
      { name: "Predictive Modeling", level: 80, icon: "fas fa-chart-bar" }
    ],
    "Data Engineering": [
      { name: "ETL Pipelines", level: 85, icon: "fas fa-stream" },
      { name: "Data Cleaning", level: 90, icon: "fas fa-broom" },
      { name: "Query Optimization", level: 80, icon: "fas fa-tachometer-alt" },
      { name: "Statistical Modeling", level: 85, icon: "fas fa-calculator" }
    ],
    "Visualization & Cloud": [
      { name: "Matplotlib & Seaborn", level: 90, icon: "fas fa-chart-area" },
      { name: "Tableau", level: 85, icon: "fas fa-chart-pie" },
      { name: "AWS", level: 85, icon: "fab fa-aws" },
      { name: "Azure & Firebase", level: 75, icon: "fab fa-microsoft" }
    ]
  },

  experience: [
    {
      title: "Software Developer Intern",
      company: "Voyant Systems Pvt Ltd, Pune",
      duration: "May 2025 – July 2025",
      achievements: [
        "Built a full-stack DBTM (Digital Body Training Model) web application using React.js, Node.js, and MySQL, deployed on Render",
        "Integrated ESP32-S3, VL53L1X, and SH1106 OLED to capture real-time measurements, with live data sync via WebSockets",
        "Developed backend architecture using SQL Server, Firebase Realtime Database, and REST APIs for seamless device-cloud interaction",
        "Designed analytical dashboards and visual reports using Python (Matplotlib, Plotly) and Tableau for performance evaluation",
        "Ensured end-to-end data pipeline flow with interactive visualizations and responsive UI, improving test insight and decision-making"
      ],
      technologies: ["React.js", "Node.js", "MySQL", "Firebase", "ESP32-S3", "Python", "WebSockets", "Matplotlib", "Plotly", "SQL Server"]
    }
  ],

  projects: [
  {
    title: "Soldier Health Monitoring System",
    image: "/images/soldier-project.png", // <-- Add this line
    description: "Built GIS map for air, water, and noise pollution visualization...",
    technologies: ["Python", "SQL", "Data Visualization", "ETL", "Leaflet.js", "Web Dev", "Object Detection"],
    category: "Data Science",
    color: "from-orange-400 to-red-500",
    link: "https://drive.google.com/file/d/1I4ZbU2Gg-01bkCIRZDqZ_j5jr9hzKlW0/view?usp=sharing"
  },
  {
    title: "ENVIROAI – AI Enabled Pollution Monitoring",
    image: "/images/enviroai-project.png", // <-- Add this line
    description: "Developed an interactive map using Leaflet.js to display air, noise, and water pollution...",
    technologies: ["Python", "SQL", "GIS Mapping", "Leaflet.js", "Web Dev", "Object Detection"],
    category: "Environmental Tech",
    color: "from-amber-400 to-orange-500",
    link: "https://drive.google.com/drive/folders/1JWfayS9x1TA6b9HaNHFtj86ja6C6hzF9?usp=drive_link"
  },
  {
    title: "SHL AI Product Design Webapp",
    image: "/images/shl-ai-project.png", // <-- Add this line
    description: "Developed a conversational AI tool to assist users in navigating SHL's product catalog...",
    technologies: ["AI/ML", "Web Development", "UI/UX", "Conversational AI"],
    category: "AI/ML",
    color: "from-yellow-400 to-red-500",
    link: "https://slsassesmentrecomendation.tiiny.site/"
  }
],
  education: [
  {
    degree: "Bachelor of Technology",
    image: "/images/pccoe-logo.png", // <-- Add this line
    field: "Electronics & Telecommunication",
    institution: "Pimpri Chinchwad College of Engineering",
    duration: "2022 – 2026",
    grade: "CGPA: 7.91/10",
    type: "B.Tech"
  },
  {
    degree: "Higher Secondary Certificate",
    image: "/images/college-logo.png", // <-- Add this line
    field: "Science Stream",
    institution: "Maharashtra HSC Board",
    duration: "2020-2022",
    grade: "88.50%",
    type: "HSC"
  },
  {
    degree: "Secondary School Certificate",
    image: "/images/school-logo.png", // <-- Add this line
    field: "All Subjects",
    institution: "CBSE Board",
    duration: "2019-2020",
    grade: "92.60%",
    type: "SSC"
  }
],
  certificates: [
    {
      name: "AWS Solutions Architect",
      level: "Professional",
      issuer: "Amazon Web Services",
      date: "June 2023",
      icon: "fab fa-aws",
      color: "from-orange-50 to-orange-100 border-orange-200",
      iconColor: "text-orange-600",
      dateColor: "text-orange-600"
    },
    {
      name: "Microsoft Azure Fundamentals",
      level: "Fundamentals",
      issuer: "Great Learning",
      date: "June 2025",
      icon: "fab fa-microsoft",
      color: "from-blue-50 to-blue-100 border-blue-200",
      iconColor: "text-blue-600",
      dateColor: "text-blue-600"
    },
    {
      name: "Introduction to SQL",
      level: "Beginner",
      issuer: "Database Management",
      date: "March 2025",
      icon: "fas fa-database",
      color: "from-green-50 to-green-100 border-green-200",
      iconColor: "text-green-600",
      dateColor: "text-green-600"
    },
    {
      name: "MATLAB Certified",
      level: "Certified",
      issuer: "MathWorks",
      date: "December 2024",
      icon: "fas fa-chart-line",
      color: "from-purple-50 to-purple-100 border-purple-200",
      iconColor: "text-purple-600",
      dateColor: "text-purple-600"
    },
    {
      name: "Excel Formulas & Functions",
      level: "Advanced",
      issuer: "Data Analyst 101",
      date: "August 2024",
      icon: "fas fa-table",
      color: "from-emerald-50 to-emerald-100 border-emerald-200",
      iconColor: "text-emerald-600",
      dateColor: "text-emerald-600"
    }
  ],

  achievements: [
    "First Prize – Annual Third-Year Project Exhibition",
    "AWS Solutions Architect – Professional Certified",
    "General Chair, Abhiyantrix'25 Research Conference",
    "Represented Vidarbha Cricket Association U14 & U16"
  ]
};
