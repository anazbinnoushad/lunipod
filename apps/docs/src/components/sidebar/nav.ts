export type NavItem =
  | {title: string; header: true; route?: never}
  | {title: string; route: string; header?: never};

export const nav: NavItem[] = [
  {title: "Components", header: true},
  {title: "Split Text", route: "split-text"},
];
