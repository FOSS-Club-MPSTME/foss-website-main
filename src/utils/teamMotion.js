export const mobileLayoutQuery = "(max-width: 560px)";
export const typeSpeedMs = 14;
export const hoverLeaveDelayMs = 120;
export const branchPulseDurationMs = 1500;
export const motionEase = [0.22, 1, 0.36, 1];

export const revealUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const staggerMembers = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.075,
      delayChildren: 0.1,
    },
  },
};

export const connectorViewport = { once: true, amount: 0.55 };
export const sectionHeaderViewport = { once: true, amount: 0.45 };
export const membersViewport = { once: true, amount: 0.18 };
export const supercoreViewport = { once: true, amount: 0.25 };

export const connectorArmMotion = {
  initial: { scaleX: 0 },
  whileInView: { scaleX: 1 },
  viewport: connectorViewport,
  transition: { duration: 0.55, ease: motionEase },
};

export const connectorNodeMotion = {
  initial: { scale: 0, opacity: 0 },
  whileInView: { scale: 1, opacity: 1 },
  viewport: connectorViewport,
  transition: { duration: 0.35, delay: 0.18, ease: motionEase },
};
