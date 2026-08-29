import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TeamMemberCard from "../components/TeamMemberCard";
import { supercore, departments } from "../data/teamMembers";
import useTeamCardInteraction from "../hooks/useTeamCardInteraction";
import {
  branchPulseDurationMs,
  connectorArmMotion,
  connectorNodeMotion,
  membersViewport,
  motionEase,
  revealUp,
  sectionHeaderViewport,
  staggerMembers,
  supercoreViewport,
} from "../utils/teamMotion";
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

function getBranchTitle(title) {
  return title.replace(" Department", "").replace("Digital ", "").replace("Social Media and ", "");
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

function SectionRail({ className = "" }) {
  const railClassName = ["department-section__rail", className].filter(Boolean).join(" ");

  return (
    <div className={railClassName} aria-hidden="true">
      <motion.span className="department-section__arm" {...connectorArmMotion} />
      <motion.span className="department-section__node" {...connectorNodeMotion} />
    </div>
  );
}

function TeamHero({ totalDepartments, onIntroComplete }) {
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
          transition={{ duration: 0.65, delay: 1.45, ease: motionEase }}
          onAnimationComplete={onIntroComplete}
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
          transition={{ duration: 0.7, delay: 1.9, ease: motionEase }}
        />
      </div>
    </section>
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
  const memberCardState = {
    isMobileLayout,
    activeMobileDescriptionId,
    setActiveMobileDescriptionId,
  };

  return (
    <section className="supercore-section" aria-labelledby="supercore-title">
      <SectionRail className="supercore-section__rail" />
      <div className="supercore-section__content">
        <div className="supercore-section__head">
          <span>01 / MAINTAINERS</span>
          <h2 id="supercore-title">Supercore</h2>
        </div>

        <motion.div
          className="supercore-map"
          initial={isMobileLayout ? false : "hidden"}
          animate={isMobileLayout ? "visible" : undefined}
          whileInView={isMobileLayout ? undefined : "visible"}
          viewport={supercoreViewport}
          variants={isMobileLayout ? undefined : staggerMembers}
        >
          <span className="supercore-map__spine" aria-hidden="true" />
          <div className="supercore-tier supercore-tier--primary">
            {primaryLeadership.map((member, index) => (
              <div className="supercore-slot supercore-slot--primary" key={member.id}>
                <TeamMemberCard
                  member={member}
                  index={index}
                  {...memberCardState}
                />
              </div>
            ))}
          </div>
          <div className="supercore-tier supercore-tier--supporting">
            {supportingLeadership.map((member, index) => (
              <div className="supercore-slot supercore-slot--supporting" key={member.id}>
                <TeamMemberCard
                  member={member}
                  index={index + primaryLeadership.length}
                  {...memberCardState}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
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
  const memberCardState = {
    isMobileLayout,
    activeMobileDescriptionId,
    setActiveMobileDescriptionId,
  };

  return (
    <section className="department-section" aria-labelledby={`department-${index}`}>
      <SectionRail />

      <div className="department-section__content">
        <motion.header
          className="department-head"
          initial="hidden"
          whileInView="visible"
          viewport={sectionHeaderViewport}
          variants={revealUp}
          transition={{ duration: 0.55, ease: motionEase }}
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
          viewport={membersViewport}
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
                <TeamMemberCard
                  key={member.id}
                  member={member}
                  index={memberIndex}
                  {...memberCardState}
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
  supercoreMembers,
}) {
  const branchRef = useRef(null);
  const sectionState = {
    isMobileLayout,
    activeMobileDescriptionId,
    setActiveMobileDescriptionId,
  };
  const { scrollYProgress } = useScroll({
    target: branchRef,
    offset: ["start 70%", "end 70%"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={branchRef} className={`branch-timeline${pulse ? " is-pulsing" : ""}`}>
      <motion.span className="branch-timeline__line" style={{ scaleY }} aria-hidden="true" />
      {supercoreMembers && (
        <SupercoreSection
          members={supercoreMembers}
          {...sectionState}
        />
      )}
      {teamDepartments.map((department, index) => (
        <DepartmentSection
          key={department.title}
          department={department}
          index={index}
          {...sectionState}
        />
      ))}
    </div>
  );
}

export default function TeamPage() {
  const [introComplete, setIntroComplete] = useState(false);
  const [branchPulse, setBranchPulse] = useState(false);
  const pulseTimeout = useRef(null);
  const teamCardInteraction = useTeamCardInteraction();
  const { isMobileLayout } = teamCardInteraction;

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
        pulseTimeout.current = window.setTimeout(
          () => setBranchPulse(false),
          branchPulseDurationMs,
        );
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

  return (
    <div className="landing team-page">
      <Navbar />
      <main className="team-page__main">
        <TeamHero
          totalDepartments={departments.length}
          onIntroComplete={() => setIntroComplete(true)}
        />
        {introComplete && (
          <motion.div
            className="team-page__revealed-content"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: motionEase }}
          >
            {!isMobileLayout && (
              <SupercoreSection
                members={supercore.members}
                {...teamCardInteraction}
              />
            )}
            <BranchTimeline
              departments={departments}
              pulse={branchPulse}
              {...teamCardInteraction}
              supercoreMembers={isMobileLayout ? supercore.members : undefined}
            />
          </motion.div>
        )}
      </main>
      {introComplete && <Footer />}
    </div>
  );
}
