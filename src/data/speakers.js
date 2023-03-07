import adrianaImg from "../assets/speakers/adriana.jpg";
import yuanImg from "../assets/speakers/yuan.jpg";
import bolsterImg from "../assets/speakers/bolster.jpg";
import angieImg from "../assets/speakers/angie.jpg";
import danImg from "../assets/speakers/dan.jpg";
import matthewImg from "../assets/speakers/matt.jpg"
import johnImg from "../assets/speakers/john.jpg"
import brendaImg from "../assets/speakers/brenda.jpg"
import isabelaImg from "../assets/speakers/isabela.jpg"
import thomasImg from "../assets/speakers/thomas.jpg"
import arianaImg from "../assets/speakers/ariana.jpg"
import manuelImg from "../assets/speakers/manuel.jpg"
import cliodhnaImg from "../assets/speakers/cliodhna.jpg"

/** @type {import('../pages/Speakers/Speakers').Speaker[]} */
const speakers = [
  {
    name: "John Romero",
    jobTitle: "Game Designer",
    talkTitle: "30 Years of DOOM",
    talkDescription:
        "Join us as we celebrate one of the most influential video games ever made - DOOM.\n\n" +
        "Leading the celebrations will be an in-conversation event with one of the game's designers, John Romero, who will be interviewed by partner, CEO and co-founder of Romero Games, Brenda Romero.",
    bio: "John Romero is an award-winning programmer, game designer and level designer whose work spans over 130 games, 108 of which have been published commercially. Romero is considered to be the father of first person shooters having led the design and contributed to the programming and audio design of the iconic and genre-defining games DOOM, Quake, Heretic and Hexen. \n\n" +
    "Romero is also was also one of the earliest supporters of eSports and a professional-level DOOM and Quake player. To date, Romero has co-founded eight successful game companies including the likes of id Software, Gazillion Entertainment and most recently Romero Games in Galway, Ireland.\n\n" +
    "He is considered to be among the world's top game designers, and his products have won well over 100 awards. Romero is set to receive the Lifetime Achievement Award at the Game Developers Conference in March 2023.",
    twitter: "https://twitter.com/d_murph21",
    linkedin: "https://twitter.com/romero",
    image: {
      url: johnImg,
      alt: "John Romero resting his hands on a skull.",
    },
  },
  {
    name: "Brenda Romero",
    jobTitle: "CEO and Game Director at Romero Games",
    talkTitle: "30 Years of DOOM",
    talkDescription:
    "Join us as we celebrate one of the most influential video games ever made - DOOM.\n\n" +
    "Leading the celebrations will be an in-conversation event with one of the game's designers, John Romero, who will be interviewed by partner, CEO and co-founder of Romero Games, Brenda Romero.",
    bio: "Brenda Romero is a BAFTA award-winning game designer, artist and Fulbright recipient who entered the game industry in 1981. She has worked on over 50 games, including seminal titles in the Wizardry, Ghost Recon and Dungeons & Dragons franchises.\n\n" +
    "Away from the machine, her analog series of games, The Mechanic is the Message, has drawn national and international acclaim.\n\n" +
    "Most recently, in 2018, she received a Lifetime Achievement Award (the Bizkaia award) at the Fun and Serious Games Festival in Bilbao, Spain, and the inaugural Grace Hopper Award presented by Science Foundation Ireland at the Women in Tech conference.",
    twitter: "https://twitter.com/br",
    linkedin: "https://ie.linkedin.com/in/brendaromerogamedev",
    image: {
      url: brendaImg,
      alt: "Brenda Romero smiling at camera",
    },
  },
  {
    name: "Daniel Murphy",
    jobTitle: "Head of SRE at PwC",
    talkTitle: "SRE: The Next Great Frontier",
    talkDescription:
        "A glimpse into DevOps, SRE, and platform engineering. Where they came from and how they are enabling technology to develop faster than ever. From Taylor swift’s Ticketmaster fiasco to Elon Musk’s Twitter tantrums, we explore how SRE made this all possible.",
    bio: "Having spent the last 15 years in the technology industry working with pharmaceutical companies, manufacturing, and legal. Daniel was also one of the first SRE managers in Ireland and an early adopter of DevOps principles. Currently working for PwC and transforming businesses through well-architected SRE solutions.",
    twitter: "https://twitter.com/d_murph21",
    linkedin: "https://www.linkedin.com/in/daniel-murphy-254a2046",
    image: {
      url: danImg,
      alt: "Daniel Murphy looking away from the camera in a suit.",
    },
  },
  {
    name: "Andrew Bolster",
    jobTitle:
      "Senior R&D Manager (Data Science) at Synopsys Software Integrity Group",
    talkTitle: "Practical ML In Cybersecurity",
    talkDescription:
      "As production use of AI/ML techniques evolve from 'Proofs of Concept' into core product capabilities, this talk covers the development, integration, and operationalisation of ML augmentation in a Dynamic Application Security Testing context; the opportunities, the early wins, the challenges, and the impacts.\n\n" +
      "No specific security knowledge necessary, but a little bit of ML workflow awareness is beneficial.",
    twitter: "https://twitter.com/Bolster",
    image: {
      url: bolsterImg,
      alt: "Bolster posing with folded arms against a grey background.",
    },
  },
  {
    name: "Angie McKeown",
    jobTitle: "Security Architect at Microsoft",
    talkTitle:
      "Get in the Robot, Shinji – The Pros and Cons of Getting into Security",
    talkDescription:
      "How I got into security, why I think it’s cool, what the downsides are, what kinds of roles are out there, and what kind of personality traits suit them best. With bonus mechs!",
    bio:
      "Angie is a Security Architect at Microsoft in one of the CTO teams. She is currently focused on Azure SecOps (so mainly the Defenders & Sentinel), taking care of delivery readiness for field employees and doing technical quality assurance on security deals and deliveries. She has a Masters in Applied Cyber Security, and is fascinated by Digital Forensics.\n\n" +
      "Her background is really varied; she's been a teacher, made VR things, run a bookstore, owned an Artisan Tea company, and also worked as web/app developer. One of her first ever jobs was in an internet cafe run by the council (before people had it in their homes) teaching people what hyperlinks were and how to use Yahoo! She also founded the NI Game Dev network, and is now on the steering committee for InfosecNI.\n\n" +
      "She is on Twitter constantly, learning Mandarin, watching/reading xianxia, and going to lots of tech meetups. She loves brunch, and kpop, and her best life tip is Get More Sleep.",
    twitter: "https://twitter.com/AngieMcKeown",
    image: {
      url: angieImg,
      alt: "Angie McKeown on a sofa.",
    },
  },
  {
    name: "Matthew Coulter",
    jobTitle: "Senior Portfolio Architect",
    talkTitle: "What I Have Learned Building Local and Virtual AWS Communities",
    talkDescription: "I have spent the past 4 years working with the global AWS community to try and lower the barriers to entry and meet like minded individuals.\n\n " +
    "In that time, I have created a popular open-source repo, started a global, virtual conference attended by thousands every year, written a book, delivered a keynote in Las Vegas at AWS re:Invent and started the local BelfAWSt Meetup.\n\n" +
    "Whether you want to create a new community or grow an existing one, let me tell you my mistakes and successes.",
    bio:
      "Matt is an AWS DevTools Hero, Serverless Architect, Author, Belfast AWS Meetup organiser, CDK Day founder and keynote speaker.\n\n" +
      "He is focused on creating the right environment for empowered teams to rapidly deliver business value in a well-architected, sustainable and serverless-first way.\n\n",
    linkedin: "https://uk.linkedin.com/in/nideveloper",
    twitter: "https://twitter.com/NIDeveloper",
    image: {
      url: matthewImg,
      alt: "Profile photo of Matthew Coulter",
    },
  },
  {
    name: "Isabela Franco",
    jobTitle: "Director – Innovation Consultant and Facilitator at Mastercard Digital Labs",
    talkTitle: "Keynote Talk - MasterCard Opening Talk",
    bio:
      "Isabela Franco has over 20 years of experience in the Financial Services, Travel & Tourism, and Education sectors, having developed expertise across a wide range of areas, which includes Digital Transformation, Product Development, Agile Project Management, and Design Thinking. She has worked at large and small organizations leading multi-disciplinary teams to deliver digital transformation and innovation projects, from ideation to launching.\n\n" +
      "Presently, at Mastercard Digital Labs, she is a Director - Innovation Consultant and Facilitator, where she co-creates with clients to deliver high-impact customer-centric experiences, designing breakthrough products, platforms, and services.\n\n" +
      "Her huge interest in Sustainability has motivated her to spend the last years studying new Economic Theories, Change Management, Systems Thinking, and the Climate Crisis. As a lifelong learner, she continues this journey by furthering her studies in Futures Thinking, Sustainable Finance, and Circular Economy. She has been currently applying new techniques in Sustainability projects she leads within Mastercard to design more sustainable, innovative, and scalable solutions that can enable faster transition to a low-carbon economy.",
    linkedin: "https://www.linkedin.com/in/isabelafranco/",
    image: {
      url: isabelaImg,
      alt: "Profile photo of Isabela Franco",
    },
  },
  {
    name: "Thomas Cashman",
    jobTitle: "Director at Viridian Software",
    talkTitle: "Gaming Panel",
    bio:
      "Thomas has over a decade technical experience building game engines, telecom systems and compilers. He specializes in high-performance and high-reliability. In 2017 he bootstrapped Viridian Software and has grown it into a game technology studio that focuses new IP development, porting and publishing.",
      linkedin: "https://ie.linkedin.com/in/thomascashman",
      twitter: "https://twitter.com/tom_cashman",
    image: {
      url: thomasImg,
      alt: "Profile photo of Thomas Cashman with a game controller.",
    },
  },
  {
    name: "Ariana Jez",
    jobTitle: "Senior Producer at Black Shamrock",
    talkTitle: "Gaming Panel",
    bio:
      "Ariana Jez is a senior producer at Virtuos-owned video game development company Black Shamrock, which is based in Dublin. Virtuos is headquartered in Singapore with studios in Asia, Europe, and the US. Over the course of her career, she has worked on multiple AAA games such as Call of Duty, Destiny 2, and Resident Evil.",
      linkedin: "https://www.linkedin.com/in/ariana-je%C5%BC-5a988aa3/",
    image: {
      url: arianaImg,
      alt: "Profile photo of Ariana staring at camera",
    },
  },
  {
    name: "Manuel Schlothauer",
    jobTitle: "Founder of HeyManuel.com",
    talkTitle: "DEI Panel",
    bio:
      "Manuel is an award-winning Queer Therapist & Coach, bestselling Author, and the Founder of HeyManuel.com. He specialises in helping LGBTQ+ Professionals being authentically themselves to become Queer Leaders.\n\n" +
      "As a consultant, he helps organisations navigate the complex intersection of Mental Health, Diversity, Inclusion, Equity, Belonging, HR & Leadership. He has been listed as one of the Top 100 Global LGBTQ+ Role Models by Yahoo! Finance and is one of the judges of the Queer Student Awards in 2023.",
    linkedin: "https://www.linkedin.com/in/manuelschlothauer/",
    image: {
      url: manuelImg,
      alt: "Profile photo of Manuel smiling at the camera.",
    },
  },
  {
    name: "Adriana Morvaiova",
    jobTitle: "DEI Specialist at Sensata Technologies",
    talkTitle: "DEI Panel",
    bio:
      "Adriana is a DEI Specialist for Sensata Technologies, TEDx speaker and educator. Trained as an NLP Practitioner, Reiki Practitioner and Life Coach.\n\n" +
      "Born in Slovakia with a Hungarian heritage, she moved to Northern Ireland with a one-way ticket, one suitcase each with zero English and zero job, only dreams and aspirations for a brighter future.\n\n" +
      "Joined Sensata Technologies in 2006, progressed through various roles in the company into her current global role as DEI specialist. She is also a founder of ACE (Appreciating Cultural Exchange) that is an award winning employee resource group.\n\n" +
      "In her spare time Adriana serves as a Non-Exec. director on the board of Mediation NI, that is a charity focusing on conflict resolution and Peace building.\n\n",
    linkedin: 'https://www.linkedin.com/in/adriana-morvaiova/',
    image: {
      url: adrianaImg,
      alt: "Adriana Morvaiova posing for a picture at a restaurant.",
    },
  },
  {
    name: "Clíodhna Harrison",
    jobTitle: "Software Engineer at Tines",
    talkTitle: "DEI Panel",
    bio:
      "Clíodhna is a Software Engineer at Tines and a DCU Computing student. They are a former Redbrick committee member and have been involved with SISTEM since the beginning.\n\n" +
      "Clíodhna is autistic, has ADHD and chronic illness. They are passionate about DEI and neurodiversity awareness as well as acceptance.",
      linkedin: "https://www.linkedin.com/in/cliodhna-harrison/",
    image: {
      url: cliodhnaImg,
      alt: "Profile photo of Cliodhna",
    },
  },
  {
    name: "Yuan Zhang",
    jobTitle: "2nd Year CS Student at Ulster University",
    talkTitle: "DEI Panel",
    bio:
      "Yuan is currently involved as the Google Developer Student Club lead at UU, Partnership lead at NIDC, Chair at Ulster University Computing Society, Committee member at BCS Northern Ireland Chapter, and Student ambassador at Liberty IT. He is also involved in organizing SISTEM.\n\n" +
    " While he is proud of his involvement in these roles, he is also mindful that there is always more to learn and ways to improve. He is grateful for the opportunities and support that have allowed him to take on these responsibilities and looks forward to continuing to contribute to the tech community in whatever ways he can.",
      linkedin: "https://www.linkedin.com/in/yuan-zhang-965aaa141",
      twitter: "https://twitter.com/YuanMitchell",
    image: {
      url: yuanImg,
      alt: "Profile photo of Yuan Zhang smiling next to a window.",
    },
  },
];

export default speakers;
