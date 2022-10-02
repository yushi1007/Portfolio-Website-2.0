import SkillImg1 from '../assets/img/HTML.png'
import SkillImg2 from '../assets/img/CSS.png'
import SkillImg3 from '../assets/img/JavaScript.png'
import SkillImg4 from '../assets/img/react.png'
import SkillImg5 from '../assets/img/angular.png'
import SkillImg6 from '../assets/img/TypeScript.png'
import SkillImg7 from '../assets/img/Git.png'
import SkillImg8 from '../assets/img/creativecloud.png'
import ProjectImage1 from '../assets/img/fotoset.png'
import ProjectImage2 from '../assets/img/travelatr.png'
import ProjectImage3 from '../assets/img/quickpix.png'
import ProjectImage4 from '../assets/img/amazonclone.png'
import ProjectImage5 from '../assets/img/disneyclone.png'
import ProjectImage6 from '../assets/img/spacebuddies.png'
import { FaLinkedin, FaMediumM } from 'react-icons/fa'
import { FiInstagram, FiGithub } from 'react-icons/fi';

// navigation
export const navigation = [
    {
      name: 'Home',
      href: 'home',
    },
    {
      name: 'About',
      href: 'about',
    },
    {
      name: 'Skills',
      href: 'skills',
    },
    {
      name: 'Projects',
      href: 'projects',
    },
    {
      name: 'Blogs',
      href: 'blogs',
    },
    {
      name: 'Resume',
      href: 'resume',
    },
  ];

  // social media
  export const social = [
    {
      icon: <FaLinkedin />,
      href: 'https://www.linkedin.com/in/yushi95',
      color: 'text-sky-500',
    },
    {
      icon: <FiInstagram />,
      href: 'https://www.instagram.com/yushi.95',
      color: 'text-pink-600',
    },
    {
      icon: <FiGithub />,
      href: 'https://github.com/yushi1007',
      color: '',
    },
    {
      icon: <FaMediumM />,
      href: 'https://yushi95.medium.com/',
      color: '',
    },
  ]

  // about me
  export const aboutMe = [
    {
      description: "Hi there! my name is Yu Shi, a Software Engineer with experience building full stack applications with JavaScript, React, and Ruby on Rails. Possess strong skills in designing, developing and testing multiple web-based applications. Data driven and creative in finding solutions to complex problems. Love to develop innovative applications that enable creativity."
    },
    {
      description: "I love the entire process of developing creative websites. It allows me to create something both beautiful and functional. I want to continue improving my skills that can enable me to be more creative and be able to build visually appealing websites."
    },
    {
      description: "Here are a few technologies I’ve been working with recently:"
    }
  ];

  // skills
  export const skills = [
    {
      name:'React.JS'
    },
    {
      name:'Angular'
    },
    {
      name:'JavaScript'
    },
    {
      name:'TypeScript'
    },
    {
      name:'Tailwind'
    },
    {
      name:'CSS'
    },
  ]

  // skills image 
export const skillImages = [
    {
      image: SkillImg1,
    },
    {
      image: SkillImg2,
    },
    {
      image: SkillImg3,
    },
    {
      image: SkillImg4,
    },
    {
      image: SkillImg5,
    },
    {
      image: SkillImg6,
    },
    {
      image: SkillImg7,
    },
    {
      image: SkillImg8,
    }
]

// project details
export const projects = [
  {
    image: ProjectImage1,
    name: "Fotoset",
    description: "A photo sharing application with camera setting information, include map search, and weather search.",
    tags:["React", "Redux", "Rails", "PostgreSQL", "JWT", "HTML", "CSS", "Maps JavaScript API", "Places API", "Geocoding API", "Yahoo Weather API", "EmailJS"],
    frontend:"https://github.com/yushi1007/Fotoset-Frontend",
    backend:"https://github.com/yushi1007/Fotoset-Backend",
    live:"https://fotoset.netlify.app/",
    video:"https://www.loom.com/share/4af16cfc047e43129db5cc362968db6a",
    repo:"",
  },
  {
    image: ProjectImage2,
    name: "Travelatr",
    description: "A travel information website provides latest travel destination recommendations, including facts, and flights search.",
    tags:["React", "Rails", "PostgreSQL", "JWT", "HTML", "CSS", "Places API", "Skyscanner API"],
    frontend:"https://github.com/yushi1007/Travelatr-Frontend",
    backend:"https://github.com/jpham1109/Travelatr-Backend",
    live:"https://travelatr.netlify.app/",
    video:"https://www.loom.com/share/d988149f565c404bbc4f93fae8b5c976",
    repo:"",
  },
  {
    image: ProjectImage3,
    name: "QuickPix",
    description: "A photography e-commerce website that allows users place order and sell their own print.",
    tags:["Rails", "PostgreSQL", "HTML", "CSS", "Bcrypt"],
    frontend:"https://github.com/yushi1007/QuickPix/tree/main/app/views",
    backend:"https://github.com/yushi1007/QuickPix",
    live:"https://quickpix-yd.herokuapp.com/",
    video:"https://www.loom.com/share/bb90c26da6fc4cf294de2159e2173dce",
    repo:"",
  },
  {
    image: ProjectImage4,
    name: "Amazon Clone",
    description: "This is an Amazon Clone that implemented the Stripe payment processor.",
    tags:["React", "React Context API", "Firebase", "Stripe", "Material-UI", "HTML", "CSS"],
    frontend:"https://github.com/yushi1007/Amazon-Clone/tree/main/src",
    backend:"https://github.com/yushi1007/Amazon-Clone/tree/main/functions",
    live:"https://e-commerce-store-app.web.app/",
    video:"https://youtu.be/W37dflBSDGs",
    repo:"",
  },
  {
    image: ProjectImage5,
    name: "Disney+ Clone",
    description: "This is a Disney+ Clone that allows user to sign in with Google account and see all the movies' details.",
    tags:["React", "Redux", "Firebase", "Styled-Components", "HTML", "CSS"],
    frontend:"https://github.com/yushi1007/Disney-Plus-Clone",
    backend:"https://github.com/yushi1007/Disney-Plus-Clone/blob/main/src/firebase.js",
    live:"https://disney-plus-clone-app-e706d.web.app/",
    video:"https://youtu.be/BqYtAKUvWoI",
    repo:"",
  },
  {
    image: ProjectImage6,
    name: "Space Buddies",
    description: "The encylopedia for space pets! A Ruby CLI application that allows user to sign in or sign up and meet some intergalactic friends!",
    tags:["Ruby", "SQLite3"],
    frontend:"",
    backend:"",
    live:"",
    video:"",
    repo:"https://github.com/sssandraa/project-1",
  },
  {
    image: "",
    name: "",
    description: "",
    tags:[],
    frontend:"",
    backend:"",
    live:"",
    video:"",
    repo:"",
  },
  {
    image: "",
    name: "",
    description: "",
    tags:[],
    frontend:"",
    backend:"",
    live:"",
    video:"",
    repo:"",
  }
]