import {
  FaGlobe,
  FaCode,
  FaComments,
  FaChalkboardTeacher,
  FaTrophy,
  FaMicrophone,
  FaLaptopCode,
} from "react-icons/fa";

// Single source of truth for every event on the site.
// - `summary`     -> short, 1-sentence version used on the homepage teaser
//                    and on the Events page's Past Events cards.
// - `description` -> full paragraph, used on the Events page's Upcoming cards.
// - `highlights`  -> kept for a future event-detail view; not rendered yet.
export const events = [
  // ---------- completed (newest first) ----------
  {
    id: "code-forge-2026",
    title: "Code Forge 2026",
    type: "Hackathon",
    date: "27th March, 2026",
    location: "MPSTME, Vile Parle",
    participants: "52 teams",
    summary:
      "A high-intensity engineering competition with Taqneeq 18.0 — 52 teams debugging, optimizing, and shipping real codebases.",
    description:
      "A high-intensity software engineering competition organized in collaboration with Taqneeq 18.0, where participants debugged, optimized, and enhanced real-world codebases using open-source development practices.",
    highlights: [
      "52 participating teams from multiple colleges",
      "Hands-on debugging, optimization & feature implementation",
      "Repository-based software engineering challenge",
      "Judged by industry experts from Quant BP Wealth, StoxBox & Scira AI",
      "Focus on practical coding, collaboration & open innovation",
    ],
    icon: FaCode,
    status: "completed",
  },
  {
    id: "hackathon-masterclass",
    title: "Hackathon Masterclass",
    type: "Speaker Session",
    date: "10th September, 2025",
    location: "MPSTME, Vile Parle",
    participants: "100+ Students",
    summary:
      "SIH winners Saniya Shetty and Vir Bhalani shared strategies on ideation, teamwork, pitching, and execution.",
    description:
      "An interactive masterclass featuring Smart India Hackathon winners Saniya Shetty and Vir Bhalani, focused on preparing students for competitive hackathons through practical insights on ideation, teamwork, pitching, and execution.",
    highlights: [
      "Sessions by SIH 2023 & SIH 2024 champions",
      "Strategies for winning national-level hackathons",
      "MVP development, time management & team collaboration",
      "Project pitching and judging best practices",
      "Real-world experiences, Q&A, and networking opportunities",
    ],
    icon: FaMicrophone,
    status: "completed",
  },
  {
    id: "commit-1",
    title: "COMMIT 1.0",
    type: "Hackathon · Flagship",
    date: "6th – 13th September, 2025",
    location: "MPSTME, Vile Parle",
    participants: "Cybersecurity · Sustainability · FinTech",
    summary:
      "Our flagship multi-round hackathon across Cybersecurity, Sustainability and FinTech, with a ₹18,000 prize pool.",
    description:
      "A multi-round college hackathon focusing on Cybersecurity, Sustainability, and FinTech. Teams built innovative solutions and competed for ₹18,000 in prizes across an online quiz, idea submission, and a 7-hour offline build phase.",
    highlights: [
      "₹18,000 total cash prize pool",
      "Three tracks: Cybersecurity, Sustainability, FinTech",
      "Online MCQ Quiz + Idea Submission + Offline Final Round",
      "7-hour intensive build phase with mentor guidance",
      "Certificates and goodies for all participants",
      "Bonus points for using FOSS tools and frameworks",
    ],
    icon: FaTrophy,
    status: "completed",
  },
  {
    id: "foss-unlocked-1",
    title: "FOSS Unlocked 1.0",
    type: "Club Orientation",
    date: "29th July, 2025",
    location: "MPSTME, Vile Parle",
    participants: "100+ Freshers",
    summary:
      "Kicked off the year with technical games, open discussions, and a warm welcome for 100+ freshers.",
    description:
      "The official introductory event of FOSS Club MPSTME, designed to welcome first-year students into the open-source community. Through engaging activities, technical games, and interactive discussions, participants explored Free and Open Source Software, learned about the club's initiatives, and connected with the committee and mentors.",
    highlights: [
      "100+ freshers introduced to the FOSS community",
      "Interactive technical games and quizzes with exciting rewards",
      "Open discussions on Free and Open Source Software and its impact",
      "Networking opportunities with club members and mentors",
      "Overview of club activities, events, projects, and ways to get involved",
    ],
    icon: FaChalkboardTeacher,
    status: "completed",
  },
  {
    id: "mumbaifoss-2025",
    title: "MumbaiFOSS 2025",
    type: "Conference",
    date: "19th April, 2025",
    location: "MPSTME, NMIMS",
    participants: "300+",
    summary:
      "United 300+ FOSS enthusiasts across Mumbai with project showcases, workshops, and expert talks.",
    description:
      "A major Free and Open Source Software conference with the aim of uniting the FOSS community of Mumbai, fostering collaboration and knowledge sharing.",
    highlights: [
      "Over 300 participants from across Mumbai and beyond",
      "Project showcases including Skyflo, FreeCAD, OSM, and more",
      "Workshops on KiCad and DIY Maker Badges",
      "Talks from industry experts on various FOSS technologies",
      "Panel discussion on OSS culture for next-gen engineers",
    ],
    icon: FaGlobe,
    status: "completed",
  },
  {
    id: "hackforge-2025",
    title: "HackForge 2025",
    type: "Hackathon",
    date: "19th – 21st April, 2025",
    location: "Hybrid (Online + MPSTME)",
    participants: "170 teams",
    summary:
      "A hybrid intercollegiate hackathon with Cyber Chakravyuh — 170 teams and a ₹45,000 prize pool.",
    description:
      "A hybrid intercollegiate hackathon focused on real-world problem-solving using Free and Open Source Software, organized by FOSS Club × Cyber Chakravyuh.",
    highlights: [
      "₹45,000 prize pool with internship opportunities",
      "Two-round competition format",
      "Online quiz covering FOSS, Cybersecurity, AI/ML",
      "Offline hackathon with Cybersecurity and Sustainable Tech tracks",
      "40 participants in the final round, using only open-source tools",
    ],
    icon: FaCode,
    status: "completed",
  },
  {
    id: "ubuntu-workshop",
    title: "Getting Started with Ubuntu",
    type: "Workshop",
    date: "March 2025",
    location: "MPSTME Computer Lab",
    participants: "50+",
    summary:
      "Hands-on session on installing Ubuntu via VirtualBox and WSL, with an intro to the Linux command line.",
    description:
      "A hands-on workshop focused on Ubuntu Linux installation and setup through VirtualBox and the Windows Subsystem for Linux (WSL).",
    highlights: [
      "Practical Ubuntu installation experience",
      "VirtualBox setup and configuration",
      "Windows Subsystem for Linux (WSL) tutorial",
      "Introduction to the Linux command line",
      "Development environment setup",
    ],
    icon: FaLaptopCode,
    status: "completed",
  },
  {
    id: "windows-vs-linux",
    title: "Windows vs Linux: A Comparative Discussion",
    type: "Discussion",
    date: "February 2025",
    location: "MPSTME Auditorium",
    participants: "80+",
    summary:
      "An open, interactive debate on Windows vs Linux — trade-offs, use cases, and open source vs proprietary software.",
    description:
      "An engaging discussion session exploring the pros and cons of Windows and Linux operating systems, and where each fits in a student's toolkit.",
    highlights: [
      "Interactive comparison of operating systems",
      "Real-world use case discussions",
      "Open source vs proprietary software debate",
      "Student experiences and preferences",
      "Q&A session with community experts",
    ],
    icon: FaComments,
    status: "completed",
  },

  // ---------- upcoming ----------
  {
    id: "foss-unlocked-2",
    title: "FOSS Unlocked 2.0",
    type: "Club Orientation",
    date: "30th July, 2026",
    location: "MPSTME, Vile Parle",
    participants: "100+ Freshers",
    summary:
      "The official welcome for first-years — club showcase, technical games, and an intro to the FOSS community.",
    description:
      "The official welcome for first-years — a showcase of club projects and activities from the past year, technical games and interactive activities with the OC, and an introduction to the FOSS community, its committee, and its mentors.",
    highlights: [
      "100+ freshers introduced to the FOSS community",
      "Interactive technical games and quizzes with exciting rewards",
      "Display of club projects and activities from the past year",
      "Networking opportunities with club members and mentors",
      "Overview of club activities, events, projects, and ways to get involved",
    ],
    icon: FaChalkboardTeacher,
    status: "completed",
    exploreLink: "https://unlocked.fossmpstme.com",
  },
  {
    id: "hackathon-readiness-workshop",
    title: "Hackbook",
    type: "Workshop",
    date: "5th - 6th August, 2026",
    location: "MPSTME, Vile Parle",
    participants: "Open to all",
    summary:
      "A two-day hands-on primer for first hackathons — Git, GitHub, MVP planning, and a guided mini hackathon.",
    description:
      "A two-day hands-on workshop designed to prepare first-year students for their first hackathon — covering web development fundamentals, Git and GitHub, MVP planning and ideation, responsible AI-assisted development, and a guided mini hackathon to put it all into practice.",
    highlights: [
      "Beginner-friendly introduction to hackathons and project development",
      "Hands-on sessions covering web fundamentals, Git, and GitHub",
      "Guided mini hackathon with team-based problem solving",
      "MVP planning, ideation, and effective project pitching",
      "Practical session on responsible AI-assisted development and debugging",
      "Resources, mentorship, and networking with the FOSS Club community",
    ],
    icon: FaLaptopCode,
    status: "completed",
  },
  {
    id: "init-26",
    title: "INIT'26",
    type: "National Hackathon",
    date: "5-6 September 2026",
    location: "Online",
    participants: "Engineering Students",
    summary:
      "A 24-hour online hackathon where 3-member teams pick a track — Fintech or Cybersecurity — and build a solution from scratch.",
    description:
      "INIT'26 is a 24-hour online hackathon by MPSTME where engineering students form teams of exactly 3 and choose one of two tracks — Fintech or Cybersecurity — to ideate, build, and submit a working solution. Inter-college teams are welcome, and winners get felicitated on Engineer's Day by the Dean.",
    highlights: [
      "24-hour online hackathon, two tracks: Fintech & Cybersecurity",
      "Teams of exactly 3 members, inter-college teams allowed",
      "Submission requires a project/repo link + idea PPT",
      "Winners felicitated on Engineer's Day (15 Sept 2026) by the Dean",
      "Certificates for all, goodies & swag + industry networking for winners/finalists",
    ],
    icon: FaTrophy,
    status: "upcoming",
  },
  {
    id: "commit-2",
    title: "COMMIT 2.0",
    type: "National Hackathon",
    date: "To be Announced",
    location: "MPSTME, Vile Parle",
    participants: "Open to all",
    summary:
      "The next edition of our flagship hackathon — bigger tracks, national reach, and real mentorship from industry pros.",
    description:
      "The second edition of FOSS Club MPSTME's flagship hackathon returns with bigger challenges, exciting tracks, and a platform for students to build innovative open-source solutions — bringing together developers, designers, and problem-solvers from colleges across India.",
    highlights: [
      "Multi-round national hackathon",
      "Real-world problem statements across diverse domains",
      "Mentorship from industry professionals",
      "Exciting prizes, certificates, and networking opportunities",
      "Open to students from colleges across India",
    ],
    icon: FaTrophy,
    status: "upcoming",
  },
];

export const upcomingEvents = events.filter((e) => e.status === "upcoming");
export const pastEvents = events.filter((e) => e.status === "completed");

// Homepage teaser: all upcoming + the 3 most recent completed events.
export const featuredEvents = [...upcomingEvents, ...pastEvents.slice(0, 3)];