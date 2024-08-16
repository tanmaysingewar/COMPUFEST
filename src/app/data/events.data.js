import Global_Careers from '@/app/data/Flyer/Global_Careers.png';
import Hawkins_ML_Hunt from '@/app/data/Flyer/Hawkins_ML_Hunt.png';
import Web_Tech_Seminar from '@/app/data/Flyer/Web_Tech_Seminar.png';
import Tech_Hackathon from '@/app/data/Flyer/Tech_Hackathon.png';
import Optimizer from '@/app/data/Flyer/Optimizer.png';
import Versus_Coding from '@/app/data/Flyer/Versus_Coding.png';

import Lens_Crafter from '@/app/data/Flyer/Lens_Crafter.png';
import Chess from '@/app/data/Flyer/Chess.png';
import Tug_of_War from '@/app/data/Flyer/Tug_of_War.png';
import Mock_Parliament from '@/app/data/Flyer/Mock_Parliament.png';
import Smash_Kartz from '@/app/data/Flyer/Smash_Kartz.png';
import Valorant from '@/app/data/Flyer/Valorant.png';
import BGMI_PubG from '@/app/data/Flyer/BGMI_PubG.png';

const TEC_EVENTS = [
  {
    eventId: "1",
    title: "Power BI Workshop",
    subTitle: "Master the Power of Data",
    dec: "A comprehensive workshop on utilizing Power BI for data analysis and visualization.",
    date: "10 August 2024",
    time: "10:00 AM",
    venue: "New ccc",
    duration: "2 hours",
    entryFee: "99",
    price: [],
    formLink: "",
    flyer: ''
  },
  {
    eventId: "2",
    title: "Global Careers in AI & ML Webinar",
    subTitle: "Shape Your Future in AI & ML",
    dec: "Explore global career opportunities in AI and ML with industry experts.",
    date: "17 August 2024",
    time: "7:00 PM",
    venue: "Online",
    duration: "",
    entryFee: "0",
    price: [],
    formLink: "",
    flyer: Global_Careers
  },
  {
    eventId: "3",
    title: "Hawkins ML Hunt",
    subTitle: "Challenge Your ML Skills",
    dec: "A three-day online event where participants solve challenging ML problems.",
    date: "17, 18, 19 August 2024",
    time: "7:00 PM",
    venue: "Online",
    duration: "",
    entryFee: "70",
    price: [900, 500, 300],
    formLink: "https://forms.gle/cMgbSws3MMR85njVA",
    flyer: Hawkins_ML_Hunt
  },
  {
    eventId: "4",
    title: "Webnetics",
    subTitle: "Discover the Latest in Web Tech",
    dec: "A seminar focused on the latest trends and technologies in web development along with hands-on project building.",
    date: "21 August 2024",
    time: "10:00 AM",
    venue: "AIDS Lab-2",
    duration: "2 hours",
    entryFee: "69",
    price: [],
    formLink: "https://forms.gle/zWctR5m4v5JWDwp8A",
    flyer: Web_Tech_Seminar
  },
  {
    eventId: "5",
    title: "Tech Hackathon",
    subTitle: "Innovate and Compete",
    dec: "A full-day hackathon where participants collaborate to build innovative tech solutions.",
    date: "23 August 2024",
    time: "9:00 AM",
    venue: "AIDS Lab-2",
    duration: "9 hours",
    entryFee: "250",
    price: [40000],
    formLink: "https://forms.gle/R9sAM2zcABp2jatF9",
    flyer: Tech_Hackathon
  },
  {
    eventId: "6",
    title: "Video Editing (theme-based)",
    subTitle: "Show Your Editing Prowess",
    dec: "A themed video editing competition for creative minds.",
    date: "23 August 2024",
    time: "10:00 AM",
    venue: "Lab 4",
    duration: "2 hours",
    entryFee: "50",
    price: [250],
    formLink: "",
    flyer: ''
  },
  {
    eventId: "7",
    title: "TechBuzz",
    subTitle: "Buzz Around Tech",
    dec: "An interactive session where participants discuss and present trending tech topics.",
    date: "23 August 2024",
    time: "1:00 PM",
    venue: "Lab 3",
    duration: "2 hours",
    entryFee: "50",
    price: [500],
    formLink: "",
    flyer: ''
  },
  {
    eventId: "8",
    title: "Resume Building Competition (ATS score)",
    subTitle: "Build the Perfect Resume",
    dec: "Compete to create the best ATS-compliant resume and win a momento.",
    date: "24 August 2024",
    time: "10:00 AM",
    venue: "AIDS-Lab 1",
    duration: "2 hours",
    entryFee: "0",
    price: [0],
    formLink: "",
    flyer: ''
  },
  {
    eventId: "9",
    title: "Optimizer (International level event)",
    subTitle: "Optimize for Success",
    dec: "Put your programming prowess to the test in our exciting coding contest and it is free!!!",
    date: "24 August 2024",
    time: "10:00 AM",
    venue: "Hybrid",
    duration: "2.5 hours",
    entryFee: "0",
    price: [0],
    formLink: "https://forms.gle/nxU2oip6rXJPLjJo6",
    flyer: Optimizer
  },
  {
    eventId: "10",
    title: "UI & UX Design Workshop",
    subTitle: "Design with Impact",
    dec: "A workshop on creating user-friendly and visually appealing UI & UX designs.",
    date: "24 August 2024",
    time: "11:00 AM",
    venue: "Lab 3",
    duration: "",
    entryFee: "50",
    price: [],
    formLink: "",
    flyer: ''
  },
  {
    eventId: "11",
    title: "Scripted Secrets",
    subTitle: "Unveil the Code and find the treasure",
    dec: "Assemble a team of 4 and use your collective technical skills to solve challenging problems and uncover hidden treasures.",
    date: "24 August 2024",
    time: "12:00 PM",
    venue: "AIDS Lab 2 & 3",
    duration: "2 hours",
    entryFee: "250",
    price: [2000, 1000],
    formLink: "https://forms.gle/4u5Un76d8MXvMGtg7",
    flyer: ''
  },
  {
    eventId: "12",
    title: "DZGNathon",
    subTitle: "Design Like a Pro",
    dec: "A design marathon that challenges your creativity and design skills.",
    date: "24 August 2024",
    time: "1:00 PM",
    venue: "AIDS -Lab 3",
    duration: "14 hours",
    entryFee: "50",
    price: [300],
    formLink: "",
    flyer: ''
  },
  {
    eventId: "13",
    title: "Versus Coding",
    subTitle: "Code to Compete",
    dec: "A coding competition where the best coders compete head-to-head.",
    date: "24 August 2024",
    time: "1:30 PM",
    venue: "AIDS Lab-2 & online",
    duration: "1 hour",
    entryFee: "100",
    price: [1000, 500],
    formLink: "https://forms.gle/YFVvqaaYNsARQkVAA",
    flyer: Versus_Coding
  },
  {
    eventId: "14",
    title: "Mastering The Modern Engineer's Toolkit Workshop",
    subTitle: "Bridging College Curriculum with Real-World Engineering",
    dec: "Discover how to apply your college curriculum to real-world engineering challenges.",
    date: "24 August 2024",
    time: "TBD",
    venue: "Lab 2",
    duration: "",
    entryFee: "50",
    price: [],
    formLink: "",
    flyer: ''
  },
];


const NON_TEC_EVENTS = [
  {
    eventId: "100",
    title: "Lens Crafter",
    subTitle: "Capture the Perfect Shot",
    dec: "A reel-making competition where participants showcase their skills.",
    date: "23 & 24 August 2024",
    time: "9:00 AM",
    venue: "TBD",
    duration: "2 hours",
    entryFee: "70",
    price: [500, 300],
    formLink: "https://forms.gle/6QnzQKt3XY1mbvEo6",
    flyer: Lens_Crafter
  },
  {
    eventId: "102",
    title: "Chess",
    subTitle: "Checkmate the Competition",
    dec: "A chess tournament where strategic minds compete for the top spot.",
    date: "23 August 2024",
    time: "10:00 AM",
    venue: "EL-303",
    duration: "2 hours",
    entryFee: "50",
    price: [800, 600],
    formLink: "https://forms.gle/Gaafrnz28EP8pcnz7",
    flyer: Chess
  },
  {
    eventId: "103",
    title: "Tug of War",
    subTitle: "Test Your Strength",
    dec: "A team-based tug of war competition requiring strength and coordination.",
    date: "23 August 2024",
    time: "12:00 PM",
    venue: "Infront of CCC",
    duration: "2 hours",
    entryFee: "250",
    price: [1000],
    formLink: "https://forms.gle/9om8rNvMKV5tUZSK9",
    flyer: Tug_of_War
  },
  {
    eventId: "104",
    title: "Mock Parliament",
    subTitle: "Debate and Legislate",
    dec: "A simulated parliamentary session where participants debate and create laws.",
    date: "23 August 2024",
    time: "12:00 PM",
    venue: "New CCC",
    duration: "2 hours",
    entryFee: "150",
    price: [1500, 700],
    formLink: "https://forms.gle/B7PGJYhVZUswBvkV9",
    flyer: Mock_Parliament
  },
  {
    eventId: "105",
    title: "Smash Karts",
    subTitle: "Race to Victory",
    dec: "An online kart racing game competition with exciting challenges.",
    date: "23 August 2024",
    time: "9:00 PM",
    venue: "Online",
    duration: "2 hours",
    entryFee: "50",
    price: [500],
    formLink: "https://forms.gle/XbprttVdCg5RibtUA",
    flyer: Smash_Kartz
  },
  {
    eventId: "106",
    title: "Valorant",
    subTitle: "Dominate the Arena",
    dec: "A competitive Valorant tournament for gamers looking to prove their skills.",
    date: "23 August 2024",
    time: "11:00 PM",
    venue: "Online",
    duration: "2 hours",
    entryFee: "300",
    price: [1500],
    formLink: "https://forms.gle/mpaMitojkCPQqjio7",
    flyer: Valorant
  },
  {
    eventId: "107",
    title: "Arm Wrestling",
    subTitle: "Show Your Strength",
    dec: "A one-on-one arm wrestling competition for the strongest contenders.",
    date: "24 August 2024",
    time: "12:00 PM",
    venue: "In front of Main Building",
    duration: "2 hours",
    entryFee: "100",
    price: [3000, 1000],
    formLink: "https://forms.gle/J9ARQjfpLfLDJYxLA",
    flyer: ''
  },
  {
    eventId: "108",
    title: "Power Lifting",
    subTitle: "Lift to Win",
    dec: "A powerlifting competition where the strongest participants lift to win big prizes.",
    date: "24 August 2024",
    time: "TBD",
    venue: "TBD",
    duration: "2 hours",
    entryFee: "200",
    price: [15000, 1000, 500],
    formLink: "https://forms.gle/fRQuyBpk9areKYkM8",
    flyer: ''
  },
  {
    eventId: "109",
    title: "BGMI (PubG)",
    subTitle: "Battle for Glory",
    dec: "An online BGMI tournament where players compete in intense battle royale matches.",
    date: "24 August 2024",
    time: "11:00 PM",
    venue: "Online",
    duration: "2 hours",
    entryFee: "150",
    price: [1500, 1000],
    formLink: "https://forms.gle/QQicEbMF43Ar2hEV6",
    flyer: BGMI_PubG
  },
];

export { TEC_EVENTS, NON_TEC_EVENTS };
