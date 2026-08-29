<div align="center">

  <h1>⚡ FOSS Club MPSTME — Official Website</h1>
  <p><strong>The digital front-door of FOSS Club MPSTME. Built for speed, interactive storytelling, and open-source excellence.</strong></p>

  <p>
    <a href="https://react.dev"><img src="https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" /></a>
    <a href="https://vitejs.dev"><img src="https://img.shields.io/badge/Vite-8.1-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" /></a>
    <a href="https://framer.com/motion"><img src="https://img.shields.io/badge/Framer_Motion-12.4-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" /></a>
    <a href="https://javascript.info"><img src="https://img.shields.io/badge/ES6+-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" /></a>
    <a href="https://vercel.com"><img src="https://img.shields.io/badge/Deployment-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" /></a>
  </p>

  <br />
</div>

---

## 🚀 Overview

The **FOSS Club MPSTME** website showcases our open-source ecosystem, upcoming events, weekly newsletter (*FOSS Fridays*), and the maintainers behind the code. Designed with terminal aesthetic inspirations, fluid spring animations, dark-mode glassmorphism, and lightning-fast asset loading.

---

## ✨ Key Highlights & Features

- ⚡ **Blazing Fast Asset Pipeline**: Optimized WebP image assets resulting in a **97% bandwidth reduction** (0.4 MB payload for 30+ high-res member portraits), featuring async decoding, explicit layout dimensions, and smooth fade-in loading.
- 💻 **Interactive Cyber-Terminal**: Terminal boot sequence and secret key combo (`foss`) triggering glowing branch connection pulses.
- 👥 **Comprehensive Team Showcase**: Modular hierarchy spanning Supercore, Technical, PR, Marketing, R&D, Operations, Digital Creatives, and Content Writing departments.
- 📅 **Event Hub**: Interactive timeline of national hackathons (*COMMIT 1.0*, *Code Forge*), hands-on workshops, and community orientations.
- 📰 **FOSS Fridays Newsletter**: Dedicated stack card showcase featuring weekly student-written tech breakdowns.

---

## 🛠️ Tech Stack & Ecosystem

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | ![React](https://img.shields.io/badge/-React_19-61DAFB?logo=react&logoColor=black) | Declarative UI components & state management |
| **Build Tool** | ![Vite](https://img.shields.io/badge/-Vite_8.1-646CFF?logo=vite&logoColor=white) | Lightning-fast HMR and production bundle bundling |
| **Animations** | ![Framer Motion](https://img.shields.io/badge/-Framer_Motion_12-0055FF?logo=framer&logoColor=white) | Spring dynamics, scroll timeline transforms & layout shifts |
| **Routing** | ![React Router](https://img.shields.io/badge/-React_Router_7-CA4245?logo=react-router&logoColor=white) | Client-side routing with clean URL parameters |
| **Icons** | ![React Icons](https://img.shields.io/badge/-React_Icons_5-E91E63?logo=react&logoColor=white) + ![Lucide](https://img.shields.io/badge/-Lucide_React-F54E00?logo=react&logoColor=white) | Crisp SVG icon suites |
| **Styling** | ![CSS3](https://img.shields.io/badge/-Vanilla_CSS3-1572B6?logo=css3&logoColor=white) | Custom CSS design tokens, typography scale & grid systems |

---

## 📂 Project Architecture

```
foss-website-main/
├── public/
│   ├── team-images/       # Lightweight, 600x750 compressed WebP avatars (~10-18KB each)
│   ├── team/              # Optimized high-dpi PNG source backups
│   ├── events/            # Event thumbnails & gallery highlights
│   └── foss-logos/        # Vector & transparent brand assets
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Navbar.jsx         # Site navigation & mobile menu drawer
│   │   ├── Footer.jsx         # Global footer with social links
│   │   └── TeamMemberCard.jsx # Member card with terminal ref tags, typing bios & priority loading
│   ├── data/              # Static data registries
│   │   ├── teamMembers.js     # Supercore & department rosters
│   │   ├── events.js          # Hackathons & workshop data
│   │   └── newsletters.js     # FOSS Fridays issue catalog
│   ├── hooks/             # Custom React hooks (useTeamCardInteraction, etc.)
│   ├── pages/             # Page views (LandingPage, TeamPage, EventsPage, About, FOSSFridays)
│   ├── utils/             # Animation presets & helper utilities
│   ├── App.jsx            # Main app router
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global CSS variables & resetting
└── vite.config.js         # Vite bundler configuration
```

---

## 🚦 Getting Started

### Prerequisites

Ensure you have **Node.js 18+** installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/FOSS-Club-MPSTME/foss-website-main.git
   cd foss-website-main
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. Build for production:
   ```bash
   npm run build
   ```

---

## ⚡ Performance Guidelines for Maintainers

When adding new team members or event photos:
- Always optimize team member photos using WebP compression (`max width: 600px`, `quality: 80-85`).
- Keep individual portrait avatars under **30 KB**.
- Place WebP avatars inside `/public/team-images/<slugified-name>.webp`.

---

<div align="center">
  <sub>Built with ❤️ by <strong>FOSS Club MPSTME</strong></sub>
</div>