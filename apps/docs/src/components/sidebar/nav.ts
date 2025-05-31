export type NavItem =
  | {title: string; header: true; route?: never}
  | {title: string; route: string; header?: never};

export const nav: NavItem[] = [
  {title: "Components", header: true},
  {title: "Testing", route: "test-face"},
  {title: "Split Text", route: "split-text"},
  {title: "Unfolding Text", route: "unfolding-text"},
];
