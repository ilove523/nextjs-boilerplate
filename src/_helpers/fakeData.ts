import { Dashboard, People } from "@material-ui/icons";

import { PageGroup } from "../components/Sidebar";

export const pageGroups: PageGroup[] = [
  {
    icon: People,
    groupName: "Index",
    pages: [
      { name: "首頁001", to: "/" },
      { name: "錯誤001", to: "/nothing" }
    ]
  },
  {
    icon: Dashboard,
    groupName: "About",
    pages: [
      { name: "關於001", to: "/about" },
      { name: "錯誤001", to: "/nothing" }
    ]
  }
];
