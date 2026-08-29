import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  hoverLeaveDelayMs,
  motionEase,
  revealUp,
  typeSpeedMs,
} from "../utils/teamMotion";
import "../pages/TeamPage.css";

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

function getPhotoClassName(name) {
  return `member-card__photo--${name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}`;
}

function getRefLabel(index) {
  return `REF ${String(index + 1).padStart(2, "0")}`;
}

function SocialLinks({ member }) {
  const links = [
    { id: "github", href: member.socials?.github, label: "GitHub", Icon: FaGithub },
    { id: "linkedin", href: member.socials?.linkedin, label: "LinkedIn", Icon: FaLinkedin },
  ].filter(({ href }) => href);

  return (
    <div className="member-card__links" aria-label={`${member.name} profiles`}>
      {links.map(({ id, href, label, Icon }) => (
        <a
          key={id}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={`${member.name} on ${label}`}
          onClick={(event) => event.stopPropagation()}
        >
          <Icon />
        </a>
      ))}
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
    }, typeSpeedMs);

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

export default function TeamMemberCard({
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
  const refLabel = getRefLabel(index);

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
    }, hoverLeaveDelayMs);
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
      whileHover={isMobileLayout ? undefined : { scale: 1.035 }}
      transition={{ duration: 0.48, ease: motionEase }}
      onMouseEnter={showDescription}
      onMouseLeave={hideDescription}
      onFocus={showDescription}
      onBlur={hideDescription}
      onClick={toggleMobileDescription}
    >
      <span className="member-card__index">{String(index + 1).padStart(2, "0")}</span>
      <div className="member-card__portrait-shell">
        <div className="member-card__measure member-card__measure--top" aria-hidden="true">
          <span />
          <b>{refLabel}</b>
          <span />
        </div>
        <div className="member-card__image-frame">
          <span className="member-card__corner member-card__corner--tl" aria-hidden="true" />
          <span className="member-card__corner member-card__corner--tr" aria-hidden="true" />
          <span className="member-card__corner member-card__corner--bl" aria-hidden="true" />
          <span className="member-card__corner member-card__corner--br" aria-hidden="true" />
          <img
            src={member.photo}
            alt={member.name}
            className={`member-card__photo ${getPhotoClassName(member.name)}`}
            loading="lazy"
            onError={(event) => handleImgError(event, member.name)}
          />
        </div>
        <div className="member-card__measure member-card__measure--side" aria-hidden="true">
          <span />
          <b>PORTRAIT</b>
          <span />
        </div>
        <div className="member-card__measure-bottom" aria-hidden="true">
          <span />
          <b>{refLabel}</b>
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
              onClick={(event) => {
                event.stopPropagation();
                toggleMobileDescription();
              }}
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
