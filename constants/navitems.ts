export interface navItem {
  name: string;
  type: string;
  children?: navItem[];
}

export const navItems: navItem[] = [
  {
    name: "src",
    type: "folder",
    children: [
      { name: "favicon.ico", type: "file" },
      { name: "globals.css", type: "file" },
      { name: "layout.tsx", type: "file" },
      { name: "page.tsx", type: "file" },
      {
        name: "components",
        type: "folder",
        children: [
          {
            name: "styles",
            type: "folder",
            children: [{ name: "app.tsx", type: "file" }],
          },
          { name: "layout.tsx", type: "file" },
        ],
      },
    ],
  },
  {
    name: "public",
    type: "folder",
    children: [
      { name: "favicon.ico", type: "file" },
      { name: "index.html", type: "file" },
      { name: "logo192.png", type: "file" },
      { name: "logo512.png", type: "file" },
      { name: "manifest.json", type: "file" },
      { name: "robots.txt", type: "file" },
    ],
  },
  {
    name: "package.json",
    type: "file",
  },
  {
    name: "README.md",
    type: "file",
  },
];
