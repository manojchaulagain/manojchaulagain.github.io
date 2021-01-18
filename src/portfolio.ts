import harvard from './assets/images/harvardLogo.png';
import emoji from 'react-easy-emoji';
import stanford from './assets/images/stanfordLogo.png';
import facebook from './assets/images/facebookLogo.png';
import { faHtml5, faSass, faCloudflare, faCss3, faJs, faReact, faNodeJs, faSwift, faNpm, faDocker, faAws, faPython } from '@fortawesome/free-brands-svg-icons';
import googleAssistantLogo from './assets/images/googleAssistantLogo.webp';
import pwaLogo from './assets/images/pwaLogo.webp';
import codeInLogo from './assets/images/codeInLogo.webp';
import quoraLogo from './assets/images/quoraLogo.png';
import airbnbLogo from './assets/images/airbnbLogo.png';
import saayaLogo from './assets/images/saayaHealthLogo.webp';
import nextuLogo from './assets/images/nextuLogo.webp';
const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: 'Manoj Chaulagain',
  title: "Hi all, I'm Manoj",
  subTitle: emoji(
    'A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.'
  ),
  resumeLink:
    'https://drive.google.com',
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: 'https://github.com/saadpasta',
  linkedin: 'https://www.linkedin.com/in/manoj-c-a9150714b/',
  gmail: 'chaulagainmanoj45@gmail.com',
  gitlab: 'https://gitlab.com/manojchaulagain',
  facebook: 'https://www.facebook.com/manoj.chaulagain',
  medium: 'https://medium.com/@manojchaulagain',
  stackoverflow: 'https://stackoverflow.com/users/10422806/manoj-chaulagain',
  // Instagram and Twitter are also supported in the links!
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  skills: [
    emoji(
      '⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications'
    ),
    emoji('⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks'),
    emoji(
      '⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean'
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: 'html-5',
      fontAwesomeClassname: faHtml5,
    },
    {
      skillName: 'css3',
      fontAwesomeClassname: faCss3,
    },
    {
      skillName: 'sass',
      fontAwesomeClassname: faSass,
    },
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: faJs,
    },
    {
      skillName: 'reactjs',
      fontAwesomeClassname: faReact,
    },
    {
      skillName: 'nodejs',
      fontAwesomeClassname: faNodeJs,
    },
    {
      skillName: 'swift',
      fontAwesomeClassname: faSwift,
    },
    {
      skillName: 'npm',
      fontAwesomeClassname: faNpm,
    },
    {
      skillName: 'sql-database',
      fontAwesomeClassname: faAws,
    },
    {
      skillName: 'aws',
      fontAwesomeClassname: faAws,
    },
    {
      skillName: 'firebase',
      fontAwesomeClassname: faCloudflare,
    },
    {
      skillName: 'python',
      fontAwesomeClassname: faPython,
    },
    {
      skillName: 'docker',
      fontAwesomeClassname: faDocker,
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: 'Georgia Institue of Technology',
      logo: harvard,
      subHeader: 'Master of Science in Computer Science',
      duration: 'Currently Pursuing',
      desc: 'Participated in the research of XXX and published 3 papers.',
      descBullets: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      ],
    },
    {
      schoolName: 'Southern Polytechnic State University',
      logo: stanford,
      subHeader: 'Bachelor of Science in Electrical Engineering',
      duration: 'Graduated 2013',
      desc:
        'Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...',
      descBullets: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit'],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: 'Frontend/Design', //Insert stack or technology you have experience in
      progressPercentage: '90%', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Backend',
      progressPercentage: '70%',
    },
    {
      Stack: 'Programming',
      progressPercentage: '60%',
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: 'Software Engineer',
      company: 'Facebook',
      companylogo: facebook,
      date: 'June 2018 – Present',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      descBullets: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      ],
    },
    {
      role: 'Front-End Developer',
      company: 'Quora',
      companylogo: quoraLogo,
      date: 'May 2017 – May 2018',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      role: 'Software Engineer Intern',
      company: 'Airbnb',
      companylogo: airbnbLogo,
      date: 'Jan 2015 – Sep 2015',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'manojchaulagain', // Change to your github username to view your profile in Contact Section.
  showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: 'Big Projects',
  subtitle: 'SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH',
  projects: [
    {
      image: saayaLogo,
      link: 'https://reachhealth.com/',
    },
    {
      image: nextuLogo,
      link: 'https://quadientusa.com/',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji('Achievements And Certifications 🏆 '),
  subtitle:
    'Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !',

  achievementsCards: [
    {
      title: 'Google Code-In Finalist',
      subtitle:
        'First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.',
      image: codeInLogo,
      footerLink: [
        {
          name: 'Certification',
          url:
            'https://drive.google.com',
        },
        {
          name: 'Award Letter',
          url:
            'https://drive.google.com',
        },
        {
          name: 'Google Code-in Blog',
          url:
            'https://opensource.googleblog.com',
        },
      ],
    },
    {
      title: 'Google Assistant Action',
      subtitle:
        'Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.',
      image: googleAssistantLogo,
      footerLink: [
        {
          name: 'View Google Assistant Action',
          url:
            'https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en',
        },
      ],
    },

    {
      title: 'Web App Developer',
      subtitle: 'Completed Certifcation from Web App Development',
      image: pwaLogo,
      footerLink: [
        { name: 'Certification', url: '' },
        {
          name: 'Final Project',
          url: 'https://test.firebaseapp.com/',
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: 'Blogs',
  subtitle:
    'With Love for Developing cool stuff, I love to write and teach others what I have learnt.',

  blogs: [
    {
      url:
        'https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae',
      title: 'Win a Google Assistant Tshirt and $200 in Google Cloud Credits',
      description:
        'Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?',
    },
    {
      url: 'https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e',
      title: 'Why REACT is The Best?',
      description:
        'React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: 'TALKS',
  subtitle: emoji(
    'I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅'
  ),

  talks: [
    {
      title: 'Build Actions For Google Assistant',
      subtitle: 'Codelab at GDG DevFest',
      slides_url: 'https://bit.ly/manojchaulagain-slides',
      event_url: 'https://www.facebook.com',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji('Podcast 🎙️'),
  subtitle: 'I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY',

  // Please Provide with Your Podcast embeded Link
  podcast: [
    'https://www.youtube.com/watch?v=IBQS_uSQ-BQ',
  ],
  display: true, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji('Contact Me ☎️'),
  subtitle:
    'Discuss a project or just want to say hi? My Inbox is open for all.',
  number: '2063696125',
  emailAddress: 'chaulagainmanoj45@gmail.com',
};

// Twitter Section

const twitterDetails = {
  userName: 'twitter', //Replace "twitter" with your twitter username without @
  display: true, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
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
};
