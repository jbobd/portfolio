const projectData = [
  /* {
        name: 'Chatter',
        summary: 'Chatter is a real-time chat and communication application built with Node.js, Express and Socket.io.  It uses the Handlebars templating engine to render information processed on the server and client-side.  The application is also mobile responsive, and allows users to create chat rooms to discuss topics with friends, family, and more.',
        date: 'July 2019 - July 2019',
        images: 4,
        skills: {
            'Front-End Development': ['JavaScript (ES6)', 'Handlebars', 'HTML5', 'CSS3'],
            'Back-End Development': ['Socket.io', 'Node.js', 'Express'],
            'Quality Assurance & Testing': ['Manual Testing']
        },
        codeLink: 'https://github.com/lhuddlesto/chatter',
        liveLink: 'https://lhuddlesto-chatter.herokuapp.com/'

    },

    {
        name: 'Weather App',
        summary: 'Weather app is a web application that makes calls to the DarkSky API and the MapBox API in order to generate accurate weather data based on the location you provide.  The application utilizes asynchronous programming in order to get the job done.',
        date: 'May 2019 - June 2019',
        images: 2,
        skills: {
            'Front-End Development': ['Handlebars', 'JavaScript (ES6)', 'HTML5', 'CSS3'],
            'Back-End Development': ['Node.js', 'Express'],
            'Quality Assurance & Testing': ['Manual Testing']
        },
        codeLink: 'https://github.com/lhuddlesto/node-weather-site',
        liveLink: 'https://lhuddlesto-weather-app.herokuapp.com/'
    },
    {
        name: 'Task Manager API',
        summary: 'The Task Manager API is an API that handles creating, retrieving, updating and deleting tasks.  User data and task data are stored in a MongoDB Database, and it uses bcrypt to hash user passwords, along with JSON Web Tokens to handle authentication.  The application was unit tested with Jest in order to guarentee reliable functionality.',
        date: 'June 2019 - July 2019',
        skills: {
            'Back-End Development': ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWTs'],
            'Quality Assurance & Testing': ['Jest', 'Manual Testing']
        },
        codeLink: 'https://github.com/lhuddlesto/task-manager-api/',
    },
    {
        name: 'Modern Drum Machine',
        summary: 'The Modern Drum Machine is a digital drum machine that comes with two soundbanks, one based on modern trap sounds and the other based on old-school boom bap.  In total, there are 18 unique sounds, ranging from snares, claps, hihats, open hats, 808s and more.  It is a client-side, mobile-responsive application built with React.',
        date: 'December 2018 - January 2019',
        images: 2,
        skills: {
            'Front-End Development': ['React', 'JavaScript (ES6)', 'CSS3 (Sass)', 'HTML5',],
            'Design': ['Wireframing', 'Responsive Web Design', 'Adobe XD'],
            'Quality Assurance & Testing': ['Manual Testing']
        },
        codeLink: 'https://github.com/lhuddlesto/react-drum-machine',
        liveLink: 'https://react-app-drum-machine.herokuapp.com/'
    },
    {
        name: 'Anime Quote Machine',
        summary: 'The Anime Quote Machine is a React application that generates randomized quotes from select anime characters.  Built with React.',
        date: 'January 2019 - January 2019',
        images: 3,
        skills: {
            'Front-End Development:': ['React', 'JavaScript (ES6)', 'CSS3 (Sass)', 'HTML5'],
            'Design': ['Wireframing', 'Responsive Web Design', 'Adobe XD'],
            'Quality Assurance & Testing': ['Manual Testing']
        },
        codeLink: 'https://github.com/lhuddlesto/anime-quote-machine',
        liveLink: 'https://anime-quote-generator.herokuapp.com/'
    },*/
  {
    name: "Tiny ML",
    summary:
      "Tiny ML is a tiny clone of Mercado Libre, South America biggest MarketPlace.  Node + express backend serve two endpoints for searching and fetching product data, which call MercadoLibre API's. The front end code hits these two endpoints and serve the views.",
    images: 1,
    imageArr: [
      {
        thumb: "https://i.ibb.co/0GSG67Q/screenshot-2020-08-07-at-17-09.jpg",
        full: "https://i.ibb.co/6WtnzMc/Screenshot-2020-08-01-at-22-39-18.png",
      },
      {
        thumb: "https://i.ibb.co/CtNd1L9/ml2.jpg",
        full: "https://i.ibb.co/wQBjfhg/Screenshot-2020-08-02-at-15-31-55.png",
      },
    ],
    skills: {
      "Front-End Development": ["Javascript", "React with Hooks", "SCSS"],
      "Back-End Development": ["Node.js", "Express", "REST APIs"],
    },
    codeLink: "https://github.com/jbobd/ml-test",
    liveLink: "https://jb-ml-test.herokuapp.com/",
  },
  {
    name: "L'armoire E-commerce",
    summary:
      "L'armoire is a complete E-commerce project, done with React, Redux, hooks, firebase authentication and storage and stripe payments",
    images: 1,
    imageArr: [
      {
        thumb: "https://i.ibb.co/Lv6xvJh/larmoire1.jpg",
        full: "https://i.ibb.co/Ny9W12K/larmoire1.png",
      },
      {
        thumb: "https://i.ibb.co/t38qjTh/larmoire2.jpg",
        full: "https://i.ibb.co/nmxy2tS/larmoire2.png",
      },
      {
        thumb: "https://i.ibb.co/RzCjqtc/larmoire4.jpg",
        full: "https://i.ibb.co/Tv9X8QK/larmoire3.png",
      },
    ],
    skills: {
      "Front-End Development": ["React", "Redux", "Firebase", "SCSS"],
      "Back-End Development": ["Firebase", "Stripe", "Node.js", "Express"],
    },
    codeLink: "https://github.com/jbobd/larmoire/",
    liveLink: "https://larmoire.herokuapp.com/",
  },
  {
    name: "codeWorks",
    summary:
      "Tiny IT jobs search platform. Allows to search, add and list coding jobs.",
    images: 1,
    imageArr: [
      "https://i.ibb.co/VLc75NP/code-Works1.png",
      "https://i.ibb.co/wpYQrZp/code-Works2.png",
    ],
    skills: {
      "Front-End Development": ["Handlebars, CSS"],
      "Back-End Development": ["Node.js", "Express", "Sequelize", "Postgres"],
    },
    codeLink: "https://github.com/jbobd/codeworks",
    liveLink: "https://fierce-plateau-37149.herokuapp.com/",
  },
  {
    name: "React ToDos",
    summary: "My first and classic react project",
    skills: {
      "Front-End Development": ["React", "JavaScript (ES6)"],
    },
    imageArr: [],
    codeLink: "https://github.com/jbobd/react_todolist",
    liveLink: "https://",
  },
];

export default projectData;
