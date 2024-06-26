import { IconName } from "../src/components/Icons";

export interface Item {
  label: string;
  icon: IconName;
  route: string;
  menu?: Item[];
  as?: string;
  external?: boolean;
}

interface SidebarTabs {
  HOME: Item;
  TOKEN: Record<string, Item>;
}

const calcBatchMint = (amount: string): string => {
  switch (amount) {
    case "2":
      return String(parseInt(amount) * 150000);
    case "3":
      return String(parseInt(amount) * 140000);
    case "4":
      return String(parseInt(amount) * 130000);
    case "5":
    case "6":
    case "7":
      return String(parseInt(amount) * 120000);
    case "8":
    case "9":
    case "10":
      return String(parseInt(amount) * 110000);
    default:
      return String(parseInt(amount) * 100000);
  }
};

const MAX_GAS = {
  SNIP20: {
    INIT_MSG: "180000",
    MINT: "180000",
    BURN: "160000",
    SET_MINTERS: "150000",
    CHANGE_ADMIN: "140000",
    SET_CONTRACT_STATUS: "130000",
  },
};

const CONTRACT_CODE_ID = { SNIP20: 877 };

const SIDEBAR_TABS: SidebarTabs = {
  HOME: {
    label: "Home",
    icon: "home-duo",
    route: "/",
  },
  TOKEN: {
    create: {
      label: "Create",
      icon: "industry-duo",
      route: "/create",
    },
    manage: {
      label: "Manage",
      icon: "tasks-alt-duo",
      route: "/manage",
      menu: [
        {
          label: "Mint",
          icon: "hand-holding-usd",
          route: "/manage/mint",
          as: undefined,
        },
        {
          label: "Burn",
          icon: "fire-duo",
          route: "/manage/burn",
          as: undefined,
        },
        {
          label: "Minters",
          icon: "users-duo",
          route: "/manage/minters",
          as: undefined,
        },
        {
          label: "Admin",
          icon: "user-crown-duo",
          route: "/manage/admin",
          as: undefined,
        },
      ],
    },
  },
};

const CHAIN_EXPLORER = `https://www.mintscan.io/secret/`;

const DATE_FORMAT = "yyyy MMMM d, h:mm aa";
const DETAILED_DATE_FORMAT = "yyyy MMMM d, iiii, h:mm aa";

const HEAD_TITLE_TEXT =
  "Token Garden | Create, manage and explore tokens on the Secret Network.";

export {
  MAX_GAS,
  CONTRACT_CODE_ID,
  SIDEBAR_TABS,
  CHAIN_EXPLORER,
  DATE_FORMAT,
  HEAD_TITLE_TEXT,
  DETAILED_DATE_FORMAT,
};
