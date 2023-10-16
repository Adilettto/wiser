import { SearchIcon } from "Assets/index";
import { DashboardIcon } from "Assets/index";
import { LoadBoardICon } from "Assets/index";
import { MybidsIcon } from "Assets/index";
import { MyloadsIcon } from "Assets/index";
import { CapacitySearchIcon } from "Assets/index";
import { AddLoadIcon } from "Assets/index";
import { NotificationIcon } from "Assets/index";
import { GroupChatsIcon } from "Assets/index";
import { SmsIcon } from "Assets/index";
import { UnitsIcon } from "Assets/index";
import { AccountingIcon } from "Assets/index";
import { SettingsIcon } from "Assets/index";
import { HomeIcon } from "Assets/index";

export const sidebar = [
  { icon: DashboardIcon, name: "Dashboard", link: "/dashboard" },
  { icon: LoadBoardICon, name: "Load Board", link: "/load?page=1" },
  { icon: MybidsIcon, name: "My Bids", link: "/mybids" },
  { icon: MyloadsIcon, name: "My Loads", link: "/myloads" },
  { icon: CapacitySearchIcon, name: "Capacity Search", link: "/capacity" },
  { icon: AddLoadIcon, name: "Add Load", link: "/addload" },
  { icon: NotificationIcon, name: "Notification", link: "/notification" },
  { icon: GroupChatsIcon, name: "Group Chats", link: "/groupchats" },
  { icon: SmsIcon, name: "Sms", link: "/sms" },
  { icon: UnitsIcon, name: "Units", link: "/units" },
  { icon: AccountingIcon, name: "Accounting", link: "/accounting" },
  { icon: SettingsIcon, name: "Settings", link: "/settings" },
  { icon: HomeIcon, name: "Home", link: "/home" },
];
