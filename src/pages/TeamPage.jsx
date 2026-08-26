import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { FaChevronDown, FaGithub, FaLinkedin } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { supercore, departments } from "../data/teamMembers";
import "./TeamPage.css";

const terminalCommand = "foss@mpstme:~/community$ ./meet-the-team";

const departmentCopy = {
  "Technical Department": "Building the systems and sessions behind the community.",
  "Public Relations Department": "Opening conversations with speakers, sponsors, and collaborators.",
  "Marketing Department": "Shaping campaigns that bring the community into focus.",
  "Research and Development Department": "Exploring ideas before they become club projects.",
  "Operations Department": "Keeping every moving part calm, clear, and on time.",
  "Digital Creatives Department": "Designing the visual language people remember.",
  "Social Media and Content Writing Department": "Writing the public record of what the club ships.",
};

const revealUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staggerMembers = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.075,
      delayChildren: 0.1,
    },
  },
};

function initialsAvatar(name) {
  const initials = (name || "?")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");

  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='500' height='620'>
    <rect width='100%' height='100%' fill='#141414'/>
    <path d='M0 500 L500 390 L500 620 L0 620 Z' fill='#0f2316'/>
    <text x='50%' y='49%' dominant-baseline='middle' text-anchor='middle'
      font-family='Arial, sans-serif' font-size='128' fill='#4ecb74'>${initials}</text>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function handleImgError(event, name) {
  event.currentTarget.onerror = null;
  event.currentTarget.src = initialsAvatar(name);
}

function getBranchTitle(title) {
  return title.replace(" Department", "").replace("Digital ", "").replace("Social Media and ", "");
}

function getPhotoClassName(name) {
  return `member-card__photo--${name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}`;
}

function getDepartmentMemberRows(members) {
  const indexedMembers = members.map((member, index) => ({ member, index }));
  const heads = indexedMembers.filter(({ member }) => member.position === "Head");
  const subHeads = indexedMembers.filter(({ member }) => member.position === "Sub Head");
  const otherRoles = indexedMembers.filter(
    ({ member }) => member.position !== "Head" && member.position !== "Sub Head",
  );

  return [
    { id: "heads", members: heads },
    { id: "sub-heads", members: subHeads },
    { id: "other-roles", members: otherRoles },
  ].filter((row) => row.members.length > 0);
}

function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => (
    typeof window === "undefined" ? false : window.matchMedia(query).matches
  ));

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const updateMatch = () => setMatches(mediaQuery.matches);

    updateMatch();
    mediaQuery.addEventListener("change", updateMatch);
    return () => mediaQuery.removeEventListener("change", updateMatch);
  }, [query]);

  return matches;
}

function CustomCursor() {
  const cursorRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion || !window.matchMedia("(pointer: fine)").matches) {
      return undefined;
    }

    const cursor = cursorRef.current;
    const moveCursor = (event) => {
      if (!cursor) return;
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  return (
    <div
      ref={cursorRef}
      className="team-cursor"
      aria-hidden="true"
    >
      <span>+</span>
    </div>
  );
}

function TeamHero({ totalDepartments }) {
  return (
    <section className="team-hero" aria-labelledby="team-title">
      <div className="team-hero__inner">
        <div className="team-terminal" style={{ "--prompt-characters": terminalCommand.length }}>
          <span className="team-terminal__text">{terminalCommand}</span>
        </div>

        <motion.div
          className="team-hero__copy"
          initial="hidden"
          animate="visible"
          variants={revealUp}
          transition={{ duration: 0.65, delay: 1.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 id="team-title">
            <span>THE PEOPLE</span>
            <span>BEHIND THE SOURCE.</span>
          </h1>
          <p>
            Students who maintain the systems, stories, events, and momentum behind
            FOSS MPSTME.
          </p>
          <div className="team-hero__stats" aria-label="Team statistics">
            <span>50+ contributors</span>
            <span>{totalDepartments} departments</span>
            <span>one community</span>
          </div>
        </motion.div>

        <motion.div
          className="team-hero__rule"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 1.9, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </section>
  );
}

function SocialLinks({ member }) {
  return (
    <div className="member-card__links" aria-label={`${member.name} profiles`}>
      {member.socials?.github && (
        <a href={member.socials.github} target="_blank" rel="noreferrer" aria-label={`${member.name} on GitHub`}>
          <FaGithub />
        </a>
      )}
      {member.socials?.linkedin && (
        <a href={member.socials.linkedin} target="_blank" rel="noreferrer" aria-label={`${member.name} on LinkedIn`}>
          <FaLinkedin />
        </a>
      )}
    </div>
  );
}

function TypedDescription({ id, text, active, onMouseEnter, onMouseLeave }) {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    if (!active || !text) {
      setTypedText("");
      return undefined;
    }

    let index = 0;
    setTypedText("");

    const interval = window.setInterval(() => {
      index += 1;
      setTypedText(text.slice(0, index));

      if (index >= text.length) {
        window.clearInterval(interval);
      }
    }, 14);

    return () => window.clearInterval(interval);
  }, [active, text]);

  return (
    <p
      id={id}
      className={`member-card__desc${active ? " is-visible" : ""}`}
      aria-hidden={!active}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <span>{typedText}</span>
    </p>
  );
}

function MemberCard({
  member,
  index,
  isMobileLayout,
  activeMobileDescriptionId,
  setActiveMobileDescriptionId,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const hoverTimeout = useRef(null);
  const descriptionId = `${member.id}-description`;
  const isMobileDescriptionOpen = isMobileLayout && activeMobileDescriptionId === member.id;
  const isDescriptionActive = isMobileLayout ? isMobileDescriptionOpen : isHovered;
  const portrait = (
    <img
      src={member.photo}
      alt={member.name}
      className={`member-card__photo ${getPhotoClassName(member.name)}`}
      loading="lazy"
      onError={(event) => handleImgError(event, member.name)}
    />
  );

  const showDescription = () => {
    if (isMobileLayout) return;

    if (hoverTimeout.current) {
      window.clearTimeout(hoverTimeout.current);
      hoverTimeout.current = null;
    }
    setIsHovered(true);
  };

  const hideDescription = () => {
    if (isMobileLayout) return;

    if (hoverTimeout.current) {
      window.clearTimeout(hoverTimeout.current);
    }
    hoverTimeout.current = window.setTimeout(() => {
      setIsHovered(false);
      hoverTimeout.current = null;
    }, 120);
  };

  const toggleMobileDescription = () => {
    if (!isMobileLayout) return;

    setActiveMobileDescriptionId((activeId) => (
      activeId === member.id ? null : member.id
    ));
  };

  useEffect(() => {
    return () => {
      if (hoverTimeout.current) {
        window.clearTimeout(hoverTimeout.current);
      }
    };
  }, []);

  return (
    <motion.article
      className={`member-card${isMobileDescriptionOpen ? " is-mobile-desc-open" : ""}`}
      variants={revealUp}
      whileHover={{ scale: 1.035 }}
      transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={showDescription}
      onMouseLeave={hideDescription}
      onFocus={showDescription}
      onBlur={hideDescription}
    >
      <span className="member-card__index">{String(index + 1).padStart(2, "0")}</span>
      <div className="member-card__portrait-shell">
        <div className="member-card__measure member-card__measure--top" aria-hidden="true">
          <span />
          <b>REF {String(index + 1).padStart(2, "0")}</b>
          <span />
        </div>
        <div className="member-card__image-frame">
          <span className="member-card__corner member-card__corner--tl" aria-hidden="true" />
          <span className="member-card__corner member-card__corner--tr" aria-hidden="true" />
          <span className="member-card__corner member-card__corner--bl" aria-hidden="true" />
          <span className="member-card__corner member-card__corner--br" aria-hidden="true" />
          {portrait}
        </div>
        <div className="member-card__measure member-card__measure--side" aria-hidden="true">
          <span />
          <b>PORTRAIT</b>
          <span />
        </div>
      </div>
      <div className="member-card__body">
        <div>
          <h3>{member.name}</h3>
          <div className="member-card__role-row">
            <p className="member-card__position">{member.position}</p>
            <button
              type="button"
              className="member-card__role-toggle"
              aria-expanded={isMobileDescriptionOpen}
              aria-controls={descriptionId}
              aria-label={`${isMobileDescriptionOpen ? "Hide" : "Show"} ${member.position} description for ${member.name}`}
              onClick={toggleMobileDescription}
            >
              <FaChevronDown aria-hidden="true" />
            </button>
          </div>
        </div>
        <span className="member-card__line" />
        <SocialLinks member={member} />
        <TypedDescription
          id={descriptionId}
          text={member.description}
          active={isDescriptionActive}
          onMouseEnter={showDescription}
          onMouseLeave={hideDescription}
        />
      </div>
    </motion.article>
  );
}

function SupercoreSection({
  members,
  isMobileLayout,
  activeMobileDescriptionId,
  setActiveMobileDescriptionId,
}) {
  const primaryLeadership = members.slice(0, 2);
  const supportingLeadership = members.slice(2);

  return (
    <section className="supercore-section" aria-labelledby="supercore-title">
      <div className="supercore-section__head">
        <span>01 / MAINTAINERS</span>
        <h2 id="supercore-title">Supercore</h2>
      </div>

      <motion.div
        className="supercore-map"
        initial={isMobileLayout ? false : "hidden"}
        animate={isMobileLayout ? "visible" : undefined}
        whileInView={isMobileLayout ? undefined : "visible"}
        viewport={{ once: true, amount: 0.25 }}
        variants={isMobileLayout ? undefined : staggerMembers}
      >
        <span className="supercore-map__spine" aria-hidden="true" />
        <div className="supercore-tier supercore-tier--primary">
          {primaryLeadership.map((member, index) => (
            <div className="supercore-slot supercore-slot--primary" key={member.id}>
              <MemberCard
                member={member}
                index={index}
                isMobileLayout={isMobileLayout}
                activeMobileDescriptionId={activeMobileDescriptionId}
                setActiveMobileDescriptionId={setActiveMobileDescriptionId}
              />
            </div>
          ))}
        </div>
        <div className="supercore-tier supercore-tier--supporting">
          {supportingLeadership.map((member, index) => (
            <div className="supercore-slot supercore-slot--supporting" key={member.id}>
              <MemberCard
                member={member}
                index={index + primaryLeadership.length}
                isMobileLayout={isMobileLayout}
                activeMobileDescriptionId={activeMobileDescriptionId}
                setActiveMobileDescriptionId={setActiveMobileDescriptionId}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function DepartmentSection({
  department,
  index,
  isMobileLayout,
  activeMobileDescriptionId,
  setActiveMobileDescriptionId,
}) {
  const branchTitle = getBranchTitle(department.title);
  const sectionNumber = String(index + 2).padStart(2, "0");
  const memberRows = getDepartmentMemberRows(department.members);

  return (
    <section className="department-section" aria-labelledby={`department-${index}`}>
      <div className="department-section__rail" aria-hidden="true">
        <motion.span
          className="department-section__arm"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.span
          className="department-section__node"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{ duration: 0.35, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      <div className="department-section__content">
        <motion.header
          className="department-head"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.45 }}
          variants={revealUp}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="department-head__number" aria-hidden="true">{sectionNumber}</span>
          <div>
            <p>{sectionNumber} / BRANCH</p>
            <h2 id={`department-${index}`}>{branchTitle}</h2>
            <span>{departmentCopy[department.title]}</span>
          </div>
        </motion.header>

        <motion.div
          className="department-members"
          initial={isMobileLayout ? false : "hidden"}
          animate={isMobileLayout ? "visible" : undefined}
          whileInView={isMobileLayout ? undefined : "visible"}
          viewport={{ once: true, amount: 0.18 }}
          variants={isMobileLayout ? undefined : staggerMembers}
        >
          {memberRows.map((row) => (
            <motion.div
              className={`department-members__row department-members__row--count-${row.members.length}`}
              key={row.id}
              style={{ "--department-row-count": row.members.length }}
              variants={isMobileLayout ? undefined : staggerMembers}
            >
              {row.members.map(({ member, index: memberIndex }) => (
                <MemberCard
                  key={member.id}
                  member={member}
                  index={memberIndex}
                  isMobileLayout={isMobileLayout}
                  activeMobileDescriptionId={activeMobileDescriptionId}
                  setActiveMobileDescriptionId={setActiveMobileDescriptionId}
                />
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function BranchTimeline({
  departments: teamDepartments,
  pulse,
  isMobileLayout,
  activeMobileDescriptionId,
  setActiveMobileDescriptionId,
}) {
  const branchRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: branchRef,
    offset: ["start 70%", "end 70%"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={branchRef} className={`branch-timeline${pulse ? " is-pulsing" : ""}`}>
      <motion.span className="branch-timeline__line" style={{ scaleY }} aria-hidden="true" />
      {teamDepartments.map((department, index) => (
        <DepartmentSection
          key={department.title}
          department={department}
          index={index}
          isMobileLayout={isMobileLayout}
          activeMobileDescriptionId={activeMobileDescriptionId}
          setActiveMobileDescriptionId={setActiveMobileDescriptionId}
        />
      ))}
    </div>
  );
}

export default function TeamPage() {
  const [branchPulse, setBranchPulse] = useState(false);
  const [activeMobileDescriptionId, setActiveMobileDescriptionId] = useState(null);
  const pulseTimeout = useRef(null);
  const isMobileLayout = useMediaQuery("(max-width: 560px)");

  useEffect(() => {
    let keys = "";

    const handleKeyDown = (event) => {
      const target = event.target;
      const isTyping =
        target instanceof HTMLElement &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable);

      if (isTyping || event.metaKey || event.ctrlKey || event.altKey) return;

      keys = `${keys}${event.key.toLowerCase()}`.slice(-4);
      if (keys === "foss") {
        setBranchPulse(true);
        if (pulseTimeout.current) {
          window.clearTimeout(pulseTimeout.current);
        }
        pulseTimeout.current = window.setTimeout(() => setBranchPulse(false), 1500);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (pulseTimeout.current) {
        window.clearTimeout(pulseTimeout.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isMobileLayout) {
      setActiveMobileDescriptionId(null);
    }
  }, [isMobileLayout]);

  return (
    <div className="landing team-page">
      <Navbar />
      <main className="team-page__main">
        <CustomCursor />
        <TeamHero totalDepartments={departments.length} />
        <SupercoreSection
          members={supercore.members}
          isMobileLayout={isMobileLayout}
          activeMobileDescriptionId={activeMobileDescriptionId}
          setActiveMobileDescriptionId={setActiveMobileDescriptionId}
        />
        <BranchTimeline
          departments={departments}
          pulse={branchPulse}
          isMobileLayout={isMobileLayout}
          activeMobileDescriptionId={activeMobileDescriptionId}
          setActiveMobileDescriptionId={setActiveMobileDescriptionId}
        />
      </main>
      <Footer />
    </div>
  );
}
