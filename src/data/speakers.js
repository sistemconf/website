import adrianaImg from "../assets/speakers/adriana.jpg";
import yuanImg from "../assets/speakers/yuan.jpg";
import bolsterImg from "../assets/speakers/bolster.jpg";
import angieImg from "../assets/speakers/angie.jpg";
import danImg from "../assets/speakers/dan.jpg";

/** @type {import('../pages/Speakers/Speakers').Speaker[]} */
const speakers = [
  {
    name: "Daniel Murphy",
    jobTitle: "Head of SRE for PwC",
    talkTitle: "SRE the Next Great Frontier",
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
      "Senior R&D Manager (Data Science) @ Synopsys Software Integrity Group",
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
      "Get in the robot, Shinji – the pros and cons of getting into Security",
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
    name: "Adriana Morvaiova",
    jobTitle: "DEI Specialist for Sensata Technologies",
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
    name: "Yuan Zhang",
    jobTitle: "2nd Year CS Student at Ulster University",
    talkTitle: "DEI Panel",
    bio:
      "Yuan is a 2nd Year Computing Science Student at Ulster University in Northern Ireland. Two years ago, he moved to Northern Ireland on a one-way ticket to start a new chapter in his life. Since then, he has been fortunate enough to take on several roles that allow him to grow and learn from others.\n\n" +
      "Yuan is currently involved as the Google Developer Student Club lead at UU, Partnership lead at NIDC, Chair at Ulster University Computing Society, Committee member at BCS Northern Ireland Chapter, and Student ambassador at Liberty IT. He is also involved in organizing SISTEM.\n\n" +
      "While he is proud of his involvement in these roles, he is also mindful that there is always more to learn and ways to improve. He is grateful for the opportunities and support that have allowed him to take on these responsibilities and looks forward to continuing to contribute to the tech community in whatever ways he can.",
    linkedin: "https://www.linkedin.com/in/yuan-zhang-965aaa141",
    twitter: "https://twitter.com/YuanMitchell",
    image: {
      url: yuanImg,
      alt: "Profile photo of Yuan Zhang smiling next to a window.",
    },
  },
];

export default speakers;
