/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Nausherwan Nasir",
  title: "Hello World!, I'm Nausherwan",
  subTitle: emoji(
    "Curious tech enthusiast 🚀 who designs and builds web and mobile apps with JavaScript, React, Node.js, and React Native and other cool frameworks. Currently learning AI/ML techniques, secure systems with cybersecurity best practices, and automate deployments using DevOps tools."
  ),
   // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/nausherwannasir",
  linkedin: "https://www.linkedin.com/in/nausherwan-nasir-8399751b2/",
  gmail: "nausherwan436@gmail.com",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Tech Enthusiast WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Build responsive UIs with HTML5, CSS3, Sass and React.js for web and mobile."
    ),
    emoji("⚡ Develop back-end services in Node.js, Swift (for iOS) and Python, exposing clean RESTful APIs."),
    emoji(
      "⚡Design and manage databases using MySQL and SQL-based stores; integrate with Firebase and AWS data services."
    ),
    emoji(
      "⚡ Containerize and deploy applications with Docker on AWS, Azure or Digital Ocean."
    ),
    emoji(
      "⚡ Automate workflows and data pipelines in Python, leveraging Azure ML, MLflow and GitHub Actions."
    ),
    emoji(
      "⚡ Secure systems through network security best-practices, Linux hardening, IDS monitoring and SIEM tooling."
    ),
    emoji(
      "⚡ Optimize SEO and drive traffic with Google Ads, on-page techniques and performance tuning."
    ),
    emoji(
      "⚡ Drive projects end-to-end, from initial concept through coding, testing and live deployment."
    ),
    
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of New Brunswick",
      logo: require("./assets/images/unblogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2020 - May 2025",
      
    },
    
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // show proficiency bars
  experience: [
    {
      Stack: "Frontend/Design",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend/DevOps",
      progressPercentage: "75%"
    },
    {
      Stack: "Information Security",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: true // keep CodersRank badges hidden
};


// Work experience section

const workExperiences = {
  display: true, // show this section
  experience: [
    {
      role: "Information Security Analyst",
      companylogo: require("./assets/images/infoseclogo.png"),
      company: "Self-employed",
      location: "Hybrid",
      date: "Mar 2024 – May 2025",
      descBullets: [
        "Conducted risk assessments of 25 third-party vendors, remediating 80% of high-risk issues within one quarter.",
        "Authored and delivered 12 security policy and procedure documents, improving team adherence by 45%.",
        "Automated GRC tooling to track compliance tasks, reducing manual reporting time by 50%.",
        "Led cloud security reviews for GCP projects, eliminating 95% of identified configuration gaps.",
        "Assisted internal teams with 10 security reviews per year, guiding them through controls mapping and evidence collection."
      ]
    },
    {
      role: "Web Developer",
      company: "Airfler",
      companylogo: require("./assets/images/airflerlogo.png"),
      location: "Fredericton, NB (Remote)",
      date: "Jun 2024 – Jan 2025",
      descBullets: [
        "Designed and delivered the initial website 40% faster than the planned deadline to showcase before an expo.",
        "Integrated Google Ads, driving a 25% increase in traffic and a 15% lift in conversions.",
        "Applied SEO strategies that boosted organic search traffic by 30% within three months."
      ]
    },
    {
      role: "Residence Assistant",
      company: "University of New Brunswick",
      companylogo: require("./assets/images/unblogo.png"),
      location: "Fredericton, NB",
      date: "Aug 2023 – Dec 2024",
      descBullets: [
        "Led a community of 150+ residents, ensuring a safe, inclusive, and engaging living environment.",
        "Organized 12 residence-wide events, boosting participation and community satisfaction.",
        "Mediated conflicts and provided support, improving overall resident well-being."
      ]
    },
    {
      role: "Global Talent Partner",
      companylogo: require("./assets/images/aieseclogo.png"),
      company: "AIESEC",
      location: "Seasonal",
      date: "Aug 2012 – Dec 2019",
      descBullets: [
        "Managed conflict resolution between global interns and host teams, ensuring smooth program delivery.",
        "Planned and executed 30+ recruitment and cultural events, increasing engagement by 40%."
      ]
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Some of my key GitHub repositories",
  projects: [
    
    {
      image: require("./assets/images/typescriptlogo.png"),
      projectName: "Skill-Scrapper",
      projectDesc: "A TypeScript tool that scrapes job-post skills at scale.",
      footerLink: [
        {
          name: "View Repo",
          url: "https://github.com/nausherwannasir/Skill-Scrapper"
        }
      ]
    },
    {
      image: require("./assets/images/tensorflowlogo.png"),
      projectName: "tensorflow",
      projectDesc: "Building and training a LLM based on NVIDIA’s TensorFlow framework for machine learning.",
      footerLink: [
        {
          name: "View Repo",
          url: "https://github.com/nausherwannasir/tensorflow"
        }
      ]
    },
    {
      
      projectName: "Scam Shield",
      image: require("./assets/images/scamshieldlogo.png"),
      projectDesc: "My chrome extension that alerts the user if they receive a fraudulent email or visit a compromised website",
      footerLink: [
        {
          name: "View Repo",
          url: "https://github.com/nausherwannasir/fraud-dataset-benchmark-legacy"
        }
      ]
    },
    {
      
      projectName: "simplekit",
      image: require("./assets/images/uilogo.png"),
      projectDesc: "A TypeScript-based UI component library to build Web Applications using MVC",
      footerLink: [
        {
          name: "View Repo",
          url: "https://github.com/nausherwannasir/simplekit"
        }
      ]
    }
  ],
  display: true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
  achievementsCards: [
    // …your existing cards…
    {
      title: "IBM Cybersecurity Analyst Professional Certificate",
      subtitle: "IBM – 14-course specialization, completed May 15, 2025",
      image: require("./assets/images/ibmlogo.png"),
      imageAlt: "IBM Logo",
      footerLink: [
        { name: "Certificate", url: "https://www.coursera.org/account/accomplishments/professional-cert/RQKP1QRDA6BF" }
      ]
    },
    {
      title: "MLOps | Machine Learning Operations Specialization",
      subtitle: "Duke University – Completed May 15, 2025",
      image: require("./assets/images/dukelogo.png"),
      imageAlt: "Duke University Logo",
      footerLink: [
        { name: "Certificate", url: "https://www.coursera.org/account/accomplishments/specialization/NSFW4V3QQW46" }
      ]
    },
    {
      title: "Google IT Automation with Python Professional Certificate",
      subtitle: "Google – Completed March 5, 2024",
      image: require("./assets/images/googlelogo.webp"),
      imageAlt: "Google Logo",
      footerLink: [
        { name: "Certificate", url: "https://www.coursera.org/account/accomplishments/professional-cert/9ZU8SVYFVXXX" }
      ]
    },
    {
      title: "Google Project Management Professional Certificate",
      subtitle: "Google – Completed April 15, 2023",
      image: require("./assets/images/googlelogo.webp"),
      imageAlt: "Google Logo",
      footerLink: [
        { name: "Certificate", url: "https://www.coursera.org/account/accomplishments/professional-cert/5XNINO19BFPJ" }
      ]
    },
    
    {
      title: "Google Cybersecurity Professional Certificate",
      subtitle: "Google – 8-course specialization, completed June 15, 2021",
      image: require("./assets/images/googlelogo.webp"),
      imageAlt: "Google Logo",
      footerLink: [
        { name: "Certificate", url: "https://www.coursera.org/account/accomplishments/professional-cert/5XNINO19BFPJ" }
      ]
    }
  ],
  display: true // show this section
};

// Talks Section
const talkSection = {
  title: "Talks",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),
  talks: [
    // your talk entries here
  ],
  display: false
};

// Podcast Section
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  podcast: [
    // your embed URLs here
  ],
  display: false
};

// Twitter Section
const twitterDetails = {
  userName: "yourTwitterHandle", // no @
  display: false
};



// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};



// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-506 292 8096",
  email_address: "nausherwan436@gmail.com"
};


const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,       
  podcastSection,  
  contactInfo,
  twitterDetails,    
  resumeSection,
  isHireable
};
