const code = `

`;

const propsData = [
  {
    property: "frontFace",
    type: "React.ReactNode",
    default: "—",
    description: "Content to display on the front side of the flipping card.",
  },
  {
    property: "backFace",
    type: "React.ReactNode",
    default: "—",
    description: "Content to display on the back side of the flipping card.",
  },
];

export const flippingCardRaw = {
  installation: `npm i @gsap/react`,
  usage: `
<FlippingCard frontFace={<FrontFace />} backFace={<BackFace />} />
  `,
  code: code,
  props: propsData,
};
