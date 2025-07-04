export type NavItem =
  | {title: string; header: true; route?: never}
  | {title: string; route: string; header?: never; badge?: string};

export const nav: NavItem[] = [
  {title: "Components", header: true},
  // {title: "Testing", route: "test-face"},
  {title: "Split Text", route: "split-text"},
  {title: "Unfolding Text", route: "unfolding-text", badge: "New"},
  {title: "Magnetic Text", route: "magnetic-text"},
  {title: "Text Velocity Loop", route: "text-velocity-loop"},
  {title: "Staggered Paragraph", route: "staggered-paragraph", badge: "New"},
  {title: "Draggable Letters", route: "draggable-letters", badge: "New"},
  {title: "Count Up Loading", route: "count-up-loading"},
  {title: "Flipping Card", route: "flipping-card", badge: "New"},
  {title: "Liquid Glass Button", route: "liquidglass-button", badge: "New"},
  {title: "Orbit Switch", route: "orbit-switch"},
];
