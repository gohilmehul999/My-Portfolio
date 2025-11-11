// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import vueJsLogo from './assets/tech_logo/vuejs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Experience Section Logo's
import aliterLogo from './assets/company_logo/aliterLogo.png';
import xceltecLogo from './assets/company_logo/xceltec_logo.jpeg';
import skilliqLogo from './assets/company_logo/skilliq.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import krishnavidhyalayaLogo from './assets/education_logo/krishnavidhyalaya.jpeg';

// Project Section Logo's
import githubPortfolioLogo from './assets/work_logo/github_portfolio.png';
import githubProfileViewLogo from './assets/work_logo/githubProfileView.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Vue JS', logo: vueJsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: skilliqLogo,
      role: "Mean Stack developer (Intern)",
      company: "Skill IQ",
      date: "March 2022 - September 2022",
      desc: "Worked as a Mean Stack Developer Intern, Responsible for developing and maintaining web applications using MongoDB, Express.js, Angular, and Node.js. Involved in front-end and back-end development, API integration, debugging, and deploying scalable web solutions. Collaborated with the team to deliver user-friendly and efficient applications.",
      skills: [
        "Bootstrap",
        "Material UI",
        "Angular",
        "MongoDB",
        "Express.js",
        "Node.js",
      ],
    },
        {
      id: 1,
      img: xceltecLogo,
      role: "Mean Stack developer",
      company: "XcelTec (A CMMI Level 5 Company)",
      date: "September 2022 - March 2023",
      desc: "ontributed to a stable MEAN stack project by analyzing client requirements and implementing new features, ensuring smooth integration and scalability.",
      skills: [
        "Material UI",
        "Angular",
        "Express.js",
        "Node.js",
        "Socket.io",
        "MSSQL"
      ],
    },
    {
      id: 2,
      img: aliterLogo,
      role: "Node.Js Developer",
      company: "Aliter Business Solutions Pvt. Ltd",
      date: "March 2023 - April 2025",
      desc: "Worke on a product-based company, for 2 years. Responsible for developing, maintaining, and enhancing web applications by implementing new features, improving performance, and ensuring smooth integration between front-end and back-end systems. Collaborated with teams to deliver high-quality, scalable solutions.",
      skills: [
        "JavaScript",
        "Vue JS",
        "Node JS",
        "MongoDb",
        "MSSQL",
        "SOCKET.IO",
        "QAD INTEGRATION",
        "Azure",
        "Aws",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: krishnavidhyalayaLogo,
      school: "krishna vidhyalaya, Ahmedabad",
      date: "Apr 2016 - March 2017",
      grade: "70%",
      desc: "I completed my class 10 education from krishna vidhyalaya School, Ahmedabad, under the CBSE board, where I studied commerce with Computer.",
      degree: "CBSE(X)",
    },
     {
      id: 1,
      img: krishnavidhyalayaLogo,
      school: "krishna vidhyalaya, Ahmedabad",
      date: "Apr 2018 - March 2019",
      grade: "77%",
      desc: "I completed my class 12 education from krishna vidhyalaya School, Ahmedabad, under the CBSE board, where I studied Accountancy, Economics, and Business Studies/Organization of Commerce and Management,",
      degree: "CBSE(XII)",
    },
    {
      id: 2,
      img: bsaLogo,
      school: "Som-Lalit Institute of Computer Application (SLICA)",
      date: "June 2019 - May 2022",
      grade: "6.7 CGPA",
      desc: "After completing my Bachelor of Computer Applications (BCA) from Som-Lalit Institute of Computer Application in 2022, I started my professional journey as a Web Developer in an IT company. During this time, I worked on developing responsive and user-friendly web applications using technologies like HTML, CSS, JavaScript, and modern frameworks. I gained hands-on experience in both frontend and backend development, collaborating with teams to deliver high-quality and stable projects as per client requirements.",
      degree: "Bachelor of Computer Aplication - BCA",
    }
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing my projects, skills, and experience as a web developer. Built with modern technologies to highlight my work, creativity, and professional journey in an interactive and responsive design.",
      image: githubPortfolioLogo,
      tags: ["React JS", "Tailwind Css"],
      github: "https://github.com/gohilmehul999/My-Portfolio",
      webapp: "https://mehulgohil.vercel.app/",
    },
    {
      id: 1,
      title: "Github Profile Viewer",
      description:
        "The GitHub Profile Viewer is a modern React web application that allows users to search and view detailed information about any GitHub user profile using the GitHub API. Built with React, Tailwind CSS, and Axios, the app provides a clean, responsive, and visually appealing interface to explore GitHub profiles, repositories, and followers in real time.",
      image: githubProfileViewLogo,
      tags: ["React JS", "Tailwind Css"],
      github: "https://github.com/gohilmehul999/github-profile-viewer/tree/main",
      webapp: "https://githubprofileviewer-two.vercel.app/",
    },
  ];  