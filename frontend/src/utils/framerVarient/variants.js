export const hero = {
  hidden: {
    opacity: 0,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    x: [0,
      -20,
      0],
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export const header = {
  hidden: {
    opacity: 0,
    filter: "blur(10px)"
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    x: [0,
      20,
      0],
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export const nav = {
  hidden: {
    opacity: 0,

  },
  visible: {
    opacity: 1,
    y: [-20,
      0],
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export const scroll = {
  hidden: {
    scaleX: 0.9,
    filter: "blur(10px)",
    opacity: 0
  },
  visible: {
    scaleX: 1,
    filter: "blur(0px)",
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};