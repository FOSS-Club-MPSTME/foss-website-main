// src/data/teamMembers.js
//
// All team data for the Teams page lives here.

let uid = 0;

function defaultSocials() {
  return {
    github: null,
    linkedin: null,
  };
}

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function member(name, position, description, socialsOverride) {
  uid += 1;
  return {
    id: `member-${uid}`,
    name,
    position,
    photo: `/team/${slugify(name)}.png`,
    description,
    socials: { ...defaultSocials(), ...(socialsOverride || {}) },
  };
}

// Supercore — leadership cards are arranged in the Team page component.
export const supercore = {
  title: "Supercore",
  layout: "row",
  members: [
    member("Bhavya Shah", "Advisory",
      "Provides guidance and continuity for the club's leadership team.",
      {
        linkedin: "https://www.linkedin.com/in/bhavya-shah-6679281b6/",
        github: "https://github.com/bhavyashah1403/",
      }),
    member("Sonal Aggarwal", "Chairperson",
      "Sets the club's overall direction & represents it to the institute & industry partners.",
      {
        linkedin: "https://www.linkedin.com/in/sonal-aggarwal-72bb6432b/",
      }),
    member("Prathamesh Mahadik", "Vice-Chairperson",
      "Supports the Chairperson and drives cross-department coordination for major events.",
      {
        linkedin: "https://www.linkedin.com/in/prathamesh-mahadik-01aa45372/",
        github: "https://github.com/PrathameshAMahadik",
      }),
    member("Preet Agarwal", "Vice-Chairperson",
      "Supports the Chairperson and drives cross-department coordination for major events.",
      {
        linkedin: "https://www.linkedin.com/in/preet-agarwal-43320137a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        github: "https://github.com/PreetAgarwal01/",
      }),
    member("Jash Vakharia", "Secretary",
      "Keeps meeting minutes, official records, and internal communication running smoothly.",
      {
        linkedin: "https://linkedin.com/in/jashvakharia",
        github: "https://github.com/jashvakharia",
      }),
  ],
};

// Core 
export const coreLabel = "Core";

export const departments = [
  {
    title: "Technical Department",
    layout: "row",
    members: [
      member("Sachin Kumar", "Head",
        "Leads workshop planning and reviews code contributions across club projects.",
        {
          linkedin: "https://www.linkedin.com/in/sachinkumarofsec?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
          github: "https://github.com/sachinkumar-gg",
        }),
      member("Rohan Kulkarni", "Head",
        "Co-leads technical sessions and mentors contributors on club projects.",
        {
          linkedin: "https://www.linkedin.com/in/rohan-kulkarni-732183330/",
          github: "https://github.com/rohankullkarni",
        }),
      member("Asavari Shirodkar", "Head",
        "Oversees technical direction and coordinates with other department heads.",
        {
          linkedin: "https://www.linkedin.com/in/asavari-shirodkar-2225b13a0?utm_source=share_via&utm_content=profile&utm_medium=member_android",
          github: "https://github.com/sAsavariShirodkar",
        }),
      member("Aakarsh Singh", "Sub Head",
        "Builds and maintains internal tools used across club events.",
        {
          linkedin: "https://www.linkedin.com/in/aakarsh-singh-173748311/",
          github: "https://github.com/Aakarsh1506",
        }),
      member("Ayush Garg", "Sub Head",
        "Works on backend infrastructure and support for club projects.",
        {
          linkedin: "https://www.linkedin.com/in/ayush-garg10/",
          github: "https://github.com/ayushmgarg",
        }),
    ],
  },
  {
    title: "Public Relations Department",
    layout: "row",
    members: [
      member("Kian Rodrigues", "Head",
        "Manages outreach to sponsors, speakers, and partner communities.",
        {
          linkedin: "https://www.linkedin.com/in/kian-rodrigues-a9a292359?utm_source=share_via&utm_content=profile&utm_medium=member_android",
          github: "https://github.com/CosmicGalaxyhehe",
        }),
      member("Aishita Dhingra", "Head",
        "Coordinates communication with guest speakers and collaborating clubs.",
        {
          linkedin: "https://www.linkedin.com/in/aishita-dhingra-420111364?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
          github: "https://github.com/mailaishitadhingra-design",
        }),
      member("Ayush Krishnan", "Sub Head",
        "Handles inter-college outreach and event partnerships.",
        {
          linkedin: "https://www.linkedin.com/in/ayush-krishnan-a93644394?utm_source=share_via&utm_content=profile&utm_medium=member_android",
          github: "https://github.com/AyushKrishnan07",
        }),
      member("Shaurya Mehta", "Sub Head",
        "Drafts official communication and manages sponsor relations.",
        {
          linkedin: "https://www.linkedin.com/in/shauryamehta14?utm_source=share_via&utm_content=profile&utm_medium=member_android",
          github: "https://github.com/sm4006",
        }),
    ],
  },
  {
    title: "Marketing Department",
    layout: "row",
    members: [
      member("Vedang Mane", "Head",
        "Plans promotional campaigns and event marketing calendars.",
        {
          linkedin: "https://www.linkedin.com/in/vedang-mane-767116216/",
          github: "https://github.com/vedang-21",
        }),
      member("Kashvi Kotecha", "Head",
        "Runs campaign coordination and release timing with Digital Creatives.",
        {
          linkedin: "https://www.linkedin.com/in/kashvi-kotecha-830449371/",
          github: "https://github.com/kashvi-16-k",
        }),
    ],
  },
  {
    title: "Research and Development Department",
    layout: "row",
    members: [
      member("Sanya Gomathi", "Head",
        "Scouts emerging open-source tools and sets the club's technical research agenda.",
        {
          linkedin: "https://www.linkedin.com/in/sanya-gomathi-91b305380",
          github: "https://github.com/sanyagomathi",
        }),
      member("Mahi Jain", "Head",
        "Co-leads exploratory projects and paper reading sessions.",
        {
          linkedin: "https://www.linkedin.com/in/mahi-jain-b8990939a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
          github: "https://github.com/mahijaain",
        }),
      member("Preksha Jain", "Sub Head",
        "Prototypes new ideas for upcoming hackathons.",
        {
          linkedin: "https://www.linkedin.com/in/preksha-jain-39416a420/",
          github: "https://github.com/jainpreksha301-ctrl",
        }),
      member("Virti Shah", "Sub Head",
        "Researches tools and frameworks for internal proof-of-concepts.",
        {
          linkedin: "https://www.linkedin.com/in/virti-shah-6936653a3/",
          github: "https://github.com/Virtishah0808",
        }),
      member("Omkar Mudholkar", "Sub Head",
        "Documents findings from R&D sessions for the wider club.",
        {
          linkedin: "https://www.linkedin.com/in/omkar-mudholkar-77600337a",
          github: "https://github.com/omkar9207",
        }),
    ],
  },
  {
    title: "Operations Department",
    layout: "row",
    members: [
      member("Arpit Kumar Jena", "Head",
        "Handles logistics, venue bookings, and on-ground event execution.",
        {
          linkedin: "https://www.linkedin.com/in/arpit-kumar-jena-302287388",
          github: "https://github.com/ArpitSy6",
        }),
      member("Dheer Sheth", "Head",
        "Manages vendor coordination and event-day logistics.",
        {
          linkedin: "https://www.linkedin.com/in/dheer-sheth-b895ab3b3?utm_source=share_via&utm_content=profile&utm_medium=member_android",
          github: "https://github.com/dheersheth9",
        }),
      member("Mohil Gosar", "Sub Head",
        "Oversees equipment, setup, and volunteer coordination at events.",
        {
          linkedin: "https://www.linkedin.com/in/mohil-gosar?utm_source=share_via&utm_content=profile&utm_medium=member_android",
          github: "https://github.com/MohilGosar",
        }),
    ],
  },
  {
    title: "Digital Creatives Department",
    layout: "row",
    members: [
      member("Shritej Salian", "Head",
        "Leads the visual identity for events, posters, and social posts.",
        {
          github: "https://github.com/Shirts0w0",
        }),
      member("Neha Parab", "Head",
        "Designs graphics and edits video content for the club.",
        {
          linkedin: "https://www.linkedin.com/in/neha-parab-5171933a0?utm_source=share_via&utm_content=profile&utm_medium=member_android",
          github: "https://github.com/codedbyneha",
        }),
      member("Aarush Atale", "Head",
        "Handles motion graphics and event highlight reels.",
        {
          linkedin: "https://www.linkedin.com/in/aarush-atale-b9379934b/",
          github: "https://github.com/Aarush-ron",
        }),
      member("Shardul Sonparote", "Sub Head",
        "Creates illustrations and templates used across campaigns.",
        {
          linkedin: "https://www.linkedin.com/in/shardul-sonparote-2b682941a?trk=contact-info",
          github: "https://github.com/Sharduljs",
        }),
    ],
  },
  {
    title: "Social Media and Content Writing Department",
    layout: "row",
    members: [
      member("Naitik Mehta", "Head",
        "Owns the posting calendar and voice across the club's social channels.",
        {
          linkedin: "https://www.linkedin.com/in/naitik-mehta-0b58a31b5?utm_source=share_via&utm_content=profile&utm_medium=member_android",
          github: "https://github.com/naitikmehta51-oss",
        }),
      member("Diantha Kanchan", "Head",
        "Writes newsletters, event recaps, and long-form content.",
        {
          linkedin: "https://www.linkedin.com/in/diantha-kanchan-726306394?utm_source=share_via&utm_content=profile&utm_medium=member_android",
          github: "https://github.com/dk2874",
        }),
      member("Chandni Iyer", "Head",
        "Drafts captions and manages community replies.",
        {
          linkedin: "https://www.linkedin.com/in/chandni-iyer-4a511b404?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
          github: "https://github.com/chandnii05",
        }),
      member("Ayushi Soni", "Sub Head",
        "Writes blog posts and helps script short-form video content.",
        {
          linkedin: "https://www.linkedin.com/in/ayushi-soni-a55425329?utm_source=share_via&utm_content=profile&utm_medium=member_android",
          github: "https://github.com/ayushipsoni-del",
        }),
      member("Kahaan Desai", "Sub Head",
        "Covers event live-updates and manages story content.",
        {
          linkedin: "https://www.linkedin.com/in/kahaan-desai-16789937a",
          github: "https://github.com/kahaandesai987-ctrl",
        }),
    ],
  },
];
