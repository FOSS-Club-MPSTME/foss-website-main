import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaRegCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaCode,
  FaChalkboardTeacher,
  FaTrophy,
  FaLaptopCode,
  FaArrowRight,
  FaNewspaper,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import Navbar, { Logo } from "../components/Navbar";
import Footer from "../components/Footer";
import "./LandingPage.css";

const JOIN_FORM_LINK = "https://recruitments.fossmpstme.com";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__grid">
        <motion.div
          className="hero__copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">// open source, unlocked</span>
          <h1 className="hero__title">
            FOSS Club
            <br />
            <span className="hero__title--accent">MPSTME</span>
          </h1>
          <p className="hero__subtitle">
            A community of builders, tinkerers and open-source enthusiasts at MPSTME,
            NMIMS — learning, shipping, and shipping some more.
          </p>
          <div className="hero__actions">
            <a
              href={JOIN_FORM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              Join us <FaArrowRight size={14} />
            </a>
            <Link to="/events" className="btn btn--ghost">
              See our events
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="hero__logo-frame">
            <Logo size={280} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="about-brief">
      <div className="about-brief__grid">
        <motion.div
          className="about-brief__copy"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">// who we are</span>
          <h2>About the club</h2>
          <p>
            The FOSS Club at MPSTME is a community of students who build, break, and
            open-source things together — from hackathons to weekly workshops. We believe in the power of open source software to democratize technology and create solutions that benefit everyone. We believe in hands-on experience and practical learning that prepares students for real-world challenges.
          </p>
          <Link to="/about" className="about-brief__link">
            Read more about us <FaArrowRight size={13} />
          </Link>
        </motion.div>

        <motion.div
          className="about-brief__photos"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <img
            src="/about-photo-1.jpeg"
            alt="FOSS Club members at a hackathon"
            className="about-brief__photo-slot"
          />
          <img
            src="/about-photo-2.jpeg"
            alt="FOSS Club members in action"
            className="about-brief__photo-slot about-brief__photo-slot--offset"
          />
        </motion.div>
      </div>
    </section>
  );
}

const events = [
  {
    title: "INIT'26",
    type: "National Hackathon",
    date: "5-6 September 2026",
    location: "Online",
    participants: "Engineering Students",
    description:
      "A 24-hour online hackathon where 3-member teams pick a track — Fintech or Cybersecurity — and build a solution from scratch.",
    icon: FaTrophy,
    status: "upcoming",
  },
  {
    title: "COMMIT 2.0",
    type: "National Hackathon",
    date: "To be Announced",
    location: "MPSTME, Vile Parle",
    participants: "Open to all",
    description:
      "The next edition of our flagship hackathon — bigger tracks, national reach, and real mentorship from industry pros.",
    icon: FaTrophy,
    status: "upcoming",
  },
  {
    title: "FOSS Unlocked 2.0",
    type: "Club Orientation",
    date: "30th July, 2026",
    location: "MPSTME, Vile Parle",
    participants: "100+ Freshers",
    description:
      "The official welcome for first-years — club projects showcase, technical games, and an intro to the FOSS community.",
    icon: FaChalkboardTeacher,
    status: "completed",
    exploreLink: "https://unlocked.fossmpstme.com",
  },
  {
    title: "Hackbook",
    type: "Workshop",
    date: "5th - 6th August, 2026",
    location: "MPSTME, Vile Parle",
    participants: "Open to all",
    description:
      "A two-day hands-on primer for first hackathons — Git, GitHub, MVP planning, and a guided mini hackathon.",
    icon: FaLaptopCode,
    status: "completed",
  },
  {
    title: "FOSS Unlocked 1.0",
    type: "Club Orientation",
    date: "29th July, 2025",
    location: "MPSTME, Vile Parle",
    participants: "100+ Freshers",
    description:
      "The club's official welcome for first-years — technical games, open discussions, and an intro to what we build.",
    icon: FaChalkboardTeacher,
    status: "completed",
  },
  {
    title: "COMMIT 1.0",
    type: "Hackathon · Flagship",
    date: "6th - 13th September 2025",
    location: "MPSTME, Vile Parle",
    participants: "Cybersecurity · Sustainability · FinTech",
    description:
      "Our flagship multi-round hackathon across three tracks, with a ₹18,000 prize pool and a 7-hour build phase.",
    icon: FaTrophy,
    status: "completed",
  },
  {
    title: "Code Forge 2026",
    type: "Hackathon",
    date: "27th March, 2026",
    location: "MPSTME, Vile Parle",
    participants: "52 teams",
    description:
      "A high-intensity engineering competition with Taqneeq 18.0 — debugging, optimizing, and shipping real codebases.",
    icon: FaCode,
    status: "completed",
  },
];

function EventsSection() {
  return (
    <section className="events">
      <div className="section-head">
        <span className="eyebrow">// what we've shipped, what's next</span>
        <h2>Events</h2>
      </div>

      <div className="events__grid">
        {events.map((e, i) => {
          const Icon = e.icon;
          const isUpcoming = e.status === "upcoming";
          return (
            <motion.article
              key={e.title}
              className="event-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <div className="event-card__top">
                <div className="event-card__icon">
                  <Icon size={20} />
                </div>
                <span
                  className={`event-card__badge ${
                    isUpcoming ? "event-card__badge--upcoming" : "event-card__badge--done"
                  }`}
                >
                  {isUpcoming ? "Upcoming" : "Completed"}
                </span>
              </div>
              <span className="event-card__type">{e.type}</span>
              <h3>{e.title}</h3>
              <p>{e.description}</p>
              <div className="event-card__meta">
                <span><FaRegCalendarAlt size={13} /> {e.date}</span>
                <span><FaMapMarkerAlt size={13} /> {e.location}</span>
                <span><FaUsers size={13} /> {e.participants}</span>
              </div>
              {e.exploreLink && (
                <a
                  href={e.exploreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="event-card__explore"
                >
                  Explore more <FaArrowRight size={12} />
                </a>
              )}
            </motion.article>
          );
        })}
      </div>

      <div className="events__footer-link">
        <Link to="/events" className="events__explore-all">
          Explore more events <FaArrowRight size={13} />
        </Link>
      </div>
    </section>
  );
}

function FossFridaysSection() {
  return (
    <section className="foss-fridays">
      <div className="foss-fridays__grid">
        <motion.div
          className="foss-fridays__copy"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">// weekly dose of open source</span>
          <h2>FOSS Fridays</h2>
          <p>
            FOSS Fridays is our weekly newsletter — every Friday, our members break
            down open-source projects, tools, and tech news for the community.
            Quick to read, easy to learn from, and made entirely by students,
            for students.
          </p>
          <div className="foss-fridays__meta">
            <span><FaRegCalendarAlt size={13} /> Every Friday</span>
            <span><FaUsers size={13} /> Written by club members</span>
          </div>
          <Link to="/fossfridays" className="about-brief__link">
            Explore FOSS Fridays <FaArrowRight size={13} />
          </Link>
        </motion.div>

        <motion.div
          className="foss-fridays__player"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Link
            to="/fossfridays"
            className="newsletter-stack"
            aria-label="Read the latest FOSS Fridays newsletter"
          >
            <span className="newsletter-stack__layer newsletter-stack__layer--back" />
            <span className="newsletter-stack__layer newsletter-stack__layer--mid" />

            <span className="newsletter-stack__front">
              <span className="newsletter-stack__topbar">
                <span className="newsletter-stack__dot" />
                <span className="newsletter-stack__dot" />
                <span className="newsletter-stack__dot" />
                <span className="newsletter-stack__badge">Issue 01</span>
              </span>

              <span className="newsletter-stack__body">
                <span className="newsletter-stack__icon">
                  <FaNewspaper size={22} />
                </span>
                <span className="newsletter-stack__title">
                  The Agentic AI Threat
                </span>
                <span className="newsletter-stack__line" />
                <span className="newsletter-stack__line" />
                <span className="newsletter-stack__line newsletter-stack__line--short" />

                <span className="newsletter-stack__tags">
                  <span className="newsletter-stack__tag">AI Security</span>
                  <span className="newsletter-stack__tag">Cybersecurity</span>
                </span>
              </span>

              <span className="newsletter-stack__footer">
                <span className="newsletter-stack__date">
                  <FaRegCalendarAlt size={11} /> 31st July
                </span>
                <span className="newsletter-stack__cta">
                  Read latest issue <FaArrowRight size={11} />
                </span>
              </span>
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

const team = [
  {
    name: "Bhavya Shah",
    position: "Advisory",
    photo: "/team/bhavya-shah.png",
    description: "Provides guidance and continuity for the club's leadership team.",
    socials: {
      linkedin: "https://www.linkedin.com/in/bhavya-shah-6679281b6/",
      github: "https://github.com/bhavyashah1403/",
    },
  },
  {
    name: "Sonal Aggarwal",
    position: "Chairperson",
    photo: "/team/sonal-aggarwal.png",
    description:
      "Sets the club's overall direction and represents FOSS MPSTME to the institute and industry partners.",
    socials: {
      linkedin: "https://www.linkedin.com/in/sonal-aggarwal-72bb6432b/",
    },
  },
  {
    name: "Prathamesh Mahadik",
    position: "Vice Chairperson",
    photo: "/team/prathamesh-mahadik.png",
    description: "Supports the Chairperson and drives cross-department coordination for major events.",
    socials: {
      linkedin: "https://www.linkedin.com/in/prathamesh-mahadik-01aa45372/",
      github: "https://github.com/PrathameshAMahadik",
    },
  },
  {
    name: "Preet Agarwal",
    position: "Vice Chairperson",
    photo: "/team/preet-agarwal.png",
    description: "Supports the Chairperson and drives cross-department coordination for major events.",
    socials: {
      linkedin: "https://www.linkedin.com/in/preet-agarwal-43320137a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      github: "https://github.com/PreetAgarwal01/",
    },
  },
  {
    name: "Jash Vakharia",
    position: "Secretary",
    photo: "/team/jash-vakharia.png",
    description: "Keeps meeting minutes, official records, and internal communication running smoothly.",
    socials: {
      linkedin: "https://linkedin.com/in/jashvakharia",
      github: "https://github.com/jashvakharia",
    },
  },
];

function initialsAvatar(name) {
  const initials = (name || "?")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'>
    <rect width='100%' height='100%' fill='#1b1b1b'/>
    <text x='50%' y='54%' dominant-baseline='middle' text-anchor='middle'
      font-family='Arial, sans-serif' font-size='96' fill='#4ecb74'>${initials}</text>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function handleImgError(e, name) {
  e.currentTarget.onerror = null;
  e.currentTarget.src = initialsAvatar(name);
}

function TeamSection() {
  return (
    <section className="team">
      <div className="team__inner">
        <div className="section-head">
          <span className="eyebrow">// the people behind it</span>
          <h2>Meet Our Team</h2>
        </div>

        <div className="team__grid">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              className="team-card-wrap"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 5) * 0.08 }}
            >
              <div className="team-card">
                <div className="team-card__front">
                  <span className="team-card__position">{m.position}</span>
                  <div className="team-card__photo-wrap">
                    <img
                      src={m.photo}
                      alt={m.name}
                      className="team-card__photo"
                      loading="lazy"
                      onError={(e) => handleImgError(e, m.name)}
                    />
                  </div>
                  <h3 className="team-card__name">{m.name}</h3>
                </div>

                <div className="team-card__back">
                  <span className="team-card__back-position">{m.position}</span>
                  <h3 className="team-card__back-name">{m.name}</h3>
                  {m.description && <p className="team-card__desc">{m.description}</p>}
                  <div className="team-card__socials">
                    {m.socials?.github && (
                      <a href={m.socials.github} target="_blank" rel="noreferrer" aria-label={`${m.name} on GitHub`}>
                        <FaGithub />
                      </a>
                    )}
                    {m.socials?.linkedin && (
                      <a href={m.socials.linkedin} target="_blank" rel="noreferrer" aria-label={`${m.name} on LinkedIn`}>
                        <FaLinkedin />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="team__footer-link">
          <Link to="/team" className="events__explore-all">
            See our entire team <FaArrowRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function LandingPage() {
  return (
    <div className="landing">
      <Navbar />
      <Hero />
      <AboutSection />
      <EventsSection />
      <FossFridaysSection />
      <TeamSection />
      <Footer />
    </div>
  );
}