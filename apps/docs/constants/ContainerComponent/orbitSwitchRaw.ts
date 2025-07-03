const code = "";

const propsData = [
  {
    property: "isDark",
    type: "boolean",
    default: "false",
    description: "Indicates whether the current theme is dark mode.",
  },
  {
    property: "onToggle",
    type: "() => void",
    default: "—",
    description: "Callback function called when the toggle button is clicked.",
  },
];

export const orbitSwitchRaw = {
  installation: `npm i @gsap/react`,
  usage: `
  `,
  code: code,
  props: propsData,
};
