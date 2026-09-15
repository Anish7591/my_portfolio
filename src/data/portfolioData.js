const portfolioData = {
  personal: {
    name: 'Anish Kumar Singh',
    location: 'Bhubaneswar, Odisha',
    phone: '+917549139591',
    email: 'anishkumarsingh783@gmail.com',
    linkedin: 'https://www.linkedin.com/in/anish-kumar-singh-b06500329',
    roles: ['Developer', 'Engineer', 'Problem Solver', 'Full Stack Dev'],
    summary:
      "I'm a Computer Science Engineering student at Gandhi Engineering College, Bhubaneswar, with a passion for full-stack web development and a drive to build meaningful digital experiences.",
    summary2:
      'My journey started with curiosity — taking apart how websites work, then learning to build them. Today, I combine strong fundamentals with hands-on experience from real-world internships.',
    summary3
      "I believe in clean code, intuitive UI, and continuous learning. Whether it's a React component or a Node.js API, I bring the same attention to detail and craftsmanship.",
  },

  stats: [
    { num: '2+', label: 'Internships' },
    { num: '3+', label: 'Projects' },
    { num: '6+', label: 'Technologies' },
    { num: '2028', label: 'Graduation' },
  ],

  strengths: [
    { icon: '🎯', title: 'Quick Learner', sub: 'Adapts fast to new tech stacks' },
    { icon: '🤝', title: 'Team Player', sub: 'Collaborative & communicative' },
    { icon: '✨', title: 'Clean Code', sub: 'Readable, maintainable practices' },
    { icon: '🚀', title: 'Full Stack Focused', sub: 'Frontend + backend + databases' },
  ],

  skills: [
    {
      cat: 'LANGUAGES',
      name: 'Programming',
      tags: ['Java', 'JavaScript', 'HTML5', 'CSS3', 'PHP'],
      color: 'purple',
    },
    {
      cat: 'FRONTEND',
      name: 'UI Development',
      tags: ['React.js', 'AngularJS', 'Responsive Design', 'UI/UX'],
      color: 'green',
    },
    {
      cat: 'BACKEND & DB',
      name: 'Server & Data',
      tags: ['Node.js', 'MongoDB', 'MySQL', 'REST APIs'],
      color: 'red',
    },
    {
      cat: 'CONCEPTS',
      name: 'Core Skills',
      tags: ['Debugging', 'Testing', 'Code Review', 'Git', 'Problem Solving'],
      color: 'purple',
    },
  ],

  experience: [
    {
      period: 'FEB 2025 — APR 2025',
      title: 'Web Development Intern',
      company: 'Acmegrade · Remote',
      color: 'purple',
      points: [
        'Developed and maintained responsive web pages using HTML, CSS & JavaScript',
        'Improved user experience and website usability through UI enhancements',
        'Participated in debugging, testing, and code review sessions',
      ],
    },
    {
      period: 'JUL 2025 — AUG 2025',
      title: 'Java Development Intern',
      company: 'VaultofCodes · Remote',
      color: 'teal',
      points: [
        'Worked on Java development concepts and backend programming tasks',
        'Improved problem-solving skills and backend development understanding',
      ],
    },
    {
      period:'MAY 2026 — JUN 2026',
      title:'Full Stack Development',
      company:'upSkill Campus .Hybrid',
      color: 'teal',
      points:[
        'Developed responsive web applications.',
        'Worked on HTML, CSS, and JavaScript for frontend development.',
        'Used React.js to create interactive user interfaces.',
        'Developed backend applications using Node.js.',    
        'Created and tested REST APIs.',
        'Worked with MySQL database and CRUD operations.',
        'Implemented basic authentication and form validation.',
        'Used Git and GitHub for version control.',
          'Tested APIs using Postman.',
         'Integrated frontend, backend, and database into complete web applications.',
            'Worked on real-world projects and fixed bugs/debugged applications.',
  ],
    },
  projects: [
    {
      num: '01',
      title: 'AI Resume Builder',
      desc: 'An AI-powered resume and CV builder platform with an interactive dashboard and integrated chatbot features for intelligent content suggestions.',
      tech: ['AI', 'React.js', 'Node.js', 'Dashboard'],
    },
    {
      num: '02',
      title: 'E-Commerce Platform',
      desc: 'A full-featured PHP + MySQL based eCommerce platform with user authentication, product management, and shopping cart functionality.',
      tech: ['PHP', 'MySQL', 'Auth', 'CRUD'],
    },
    {
      num: '03',
      title: 'React Profile Page',
      desc: 'A fully responsive, component-driven profile page built with reusable React.js components and modern CSS techniques.',
      tech: ['React.js', 'JSX', 'CSS3', 'Responsive'],
    },
  ],

  education: {
    degree: 'B.Tech in Computer Science Engineering',
    school: 'Gandhi Engineering College, Bhubaneswar',
    year: 'EXPECTED GRADUATION — APRIL 2028',
    cert 📜:[
  'Certified: Computer Architecture & Organization',
  'Certified: Cloud computing',
  ],
  },
};

export default portfolioData;
