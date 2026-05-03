// ─────────────────────────────────────────────
//  src/data/projects.js
//  Edit this file to add, remove, or update projects.
//  The Projects component maps over this array automatically.
// ─────────────────────────────────────────────

export const projects = [
  {
    id: 1,
    name: "Non-Profit Integrated Management System",
    badge: "Capstone · Saint Vincent de Paul",
    badgeStyle: "capstone",
    featured: true,                         
    highlight: "Volunteering for a non-profit organization - still in active development phase",
    description:
      "Full-stack platform serving a local non-profit. Public-facing site lets community members sign up for assistance and volunteers register for shifts. Back-office admin suite built in Microsoft Power Apps & Power Automate manages a hamper distribution system and other services.",
    tags: ["Power Apps", "Power Automate", "SharePoint Lists", "HTML/CSS", "JavaScript", "Git"],
    youtubeId: null,          // null = no video, card shows placeholder text
  },
  {
    id: 2,
    name: "3D Game - Unreal Engine",
    badge: "Solo · Top of Class",
    badgeStyle: "solo",
    featured: false,
    highlight: "\"It is amazing! One of the most unique and pleasurable experiences I had with a student's game.\" - Pedro Ferreira, course instructor",
    description:
      "Designed and built a complete game in Unreal Engine using Blueprint visual scripting. Recognized by the instructor as creative, excellent code organization, and following industry-standard practices.",
    tags: ["Unreal Engine", "Blueprint", "Game Design", "3D"],
    youtubeId: "YZgEDK0DERE",
  },
  {
    id: 3,
    name: "Connect 4 with AI - C# WinForms",
    badge: "2 Person Team with Andrei Laqui · Above & Beyond",
    badgeStyle: "Team",
    featured: false,
    highlight: "Full desktop game app with animations, AI opponent, and polished UI.",
    description:
      "Built a polished WinForms desktop application in C# featuring full game UI, and an AI opponent. Significantly exceeded project requirements by implementing a complete graphical interface with animated piece drops.",
    tags: ["C#", "WinForms", ".NET", "OOP", "AI Logic"],
    youtubeId: "C1VtxDSuhaY",
  },
  {
    id: 4,
    name: "Workspace Rental Platform",
    badge: "Team · Best Code Organization",
    badgeStyle: "team",
    featured: false,
    highlight: " \"Most organized code\" - course instructor",
    description:
      "Full-stack workspace rental web app with user authentication, listing management, and MongoDB integration, running on a local Node.js server. Praised by the instructor for exceptional code organization and structure.",
    tags: ["Node.js", "MongoDB", "HTML/CSS", "JavaScript", "Auth"],
    youtubeId: null,
  },
  {
    id: 5,
    name: "Mobile & Desktop App Concepts",
    badge: "Ongoing · In Development",
    badgeStyle: "ongoing",
    featured: false,
    highlight: "Building toward real App Store & Play Store releases",
    description:
      "A growing portfolio of original app ideas — several explored as group and solo projects in Android Studio (Kotlin) and WinForms. Each inspired by meeting real-world needs, and I'm actively developing them with the goal of publishing.",
    tags: ["Kotlin", "Android Studio", "C#", "WinForms", "Java"],
    youtubeId: null,                         // null = no video, card shows placeholder text
  },
];
