import { tea, saotg, museum, eurofins, neaq } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    docker,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript, 
    unity,
    aseprite,
    graphql,
    vegaspro,
    food,
    financial,
    robo
} from "../assets/icons";

export const skills = [
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: unity,
        name: "Unity2D",
        type: "Gamedev",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "Database",
    },
    {
        imageUrl: aseprite,
        name: "Aseprite",
        type: "Gamedev",
    },
    {
        imageUrl: graphql,
        name: "GraphQL",
        type: "Database",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: vegaspro,
        name: "Sony Vegas Pro 14",
        type: "Video Editing",
    },
];

export const experiences = [
    {
        title: "Academic Coach",
        company_name: "Staying Ahead of the Game, LLC",
        icon: saotg,
        iconBg: "#f79c5b",
        date: "August 2023 - Present",
        points: [
            "Virtual and in-person academic coach and tutor for students in grades K-12.",
            "Built strong rapport with students and their families by understanding their individual needs and goals.",
            "Specialized in helping students with their executive functioning (impression management, time management, organization, and study skills)",
        ],
    },
    {
        title: "Laboratory Analyst",
        company_name: "Eurofins Built Environment Testing",
        icon: eurofins,
        iconBg: "#a1b7c9",
        date: "Jan 2023 - August 2023",
        points: [
            "Responsible for routine analysis of samples by analytical methods strictly following all company SOPs.",
            "Prepared and analyzed samples by performing QA/QC analyses including re-preps, re-counts, and blanks.",
            "Acquired detailed knowledge and professional handling of analytical instrumentation within specified parameters.",
            "Proficient in laboratory practices and procedures.",
        ],
    },
    {
        title: "Gallery Educator",
        company_name: "Children's Museum of Houston",
        icon: museum,
        iconBg: "#0D70B7",
        date: "Nov 2022 - Feb 2023",
        points: [
            "Led and facilitated programming and demonstrations.",
            "Enhanced visitors learning by describing, modeling, and promoting engagement with exhibits.",
            "Effectively interacted with children, adults, and host organization staff.",
            "Creatively operated outside the box to teach topics to a variety of audiences.",
        ],
    },
    {
        title: "Tea Sales Associate & Barista",
        company_name: "DavidsTea",
        icon: tea,
        iconBg: "#00ada9",
        date: "Nov 2018 - March 2020",
        points: [
            "Provided expertise and guidance on over 100 different teas to ensure a positive customer sales and drink crafting experience.",
        ],
    },
    {
        title: "Educator, Camp Counselor, & Community Programs Coordinator",
        company_name: "The New England Aquarium",
        icon: neaq,
        iconBg: "#022C57",
        date: "Sept 2013 - August 2015",
        points: [
            "Gave formal Live Animal Presentations (LAPs) to groups of 2-300 individuals.",
            "Worked closely with children ages 8-12 over several summers.",
            "Facilitated public programs at community and event centers in Boston.",
            "Presented as role model and ambassador for the Blue Planet.",
            "Engaged with visitors at exhibits, answering questions and showcasing associated aquatic fossils and artifacts.",
            "Team Lead for small-scale dissections" 
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/TeaCandy',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/candacexryan/',
    }
];

export const projects = [
    {
        iconUrl: food,
        theme: 'btn-back-red',
        name: 'Full Stack GrubHub Clone',
        description: 'Developed a web application that allows the user to browse and order from popular restaurants in Houston. Includes user authentication, a database built in HygraphQL, a user-review system, and checkout services with PayPal.',
        link: 'https://top-picks-git-capstone-candaces-projects-5d39bdf3.vercel.app/?category=all',
    },
    {
        iconUrl: robo,
        theme: 'btn-back-pink',
        name: 'AI Article Summarizer',
        description: 'Built a web application leveraging OpenAI\'s RapidAPI, enabling users to input URLs and receive concise summaries of the linked articles. The application is developed using React, Vite, Tailwind CSS, and Redux Toolkit for efficient state management and API handling.',
        link: 'https://cr-article-ai-summarizer.vercel.app/',
    },
    {
        iconUrl: financial,
        theme: 'btn-back-green',
        name: 'Front-End Banking App',
        description: 'Created a stylized ATM service enabling you to make a (fake) bank account to withdraw and deposit money. It utilizes reusable Bootstrap card components, is deployed with Amazon Web Services, and locally stores all user data.',
        link: 'https://candace-ryanbankingapplication.s3.us-east-2.amazonaws.com/gitbankingapp/index.html#/',
    },
    // {
    //     iconUrl: snapgram,
    //     theme: 'btn-back-blue',
    //     name: 'Full Stack Instagram Clone',
    //     description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
    //     link: 'https://github.com/adrianhajdin/social_media_app',
    // },
    // {
    //     iconUrl: estate,
    //     theme: 'btn-back-black',
    //     name: 'Real-Estate Application',
    //     description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    //     link: 'https://github.com/adrianhajdin/projects_realestate',
    // },
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    // }
];