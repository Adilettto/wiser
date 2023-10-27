import { DashboardIcon, Logout } from "Assets/index";
import { LoadBoardICon } from "Assets/index";
import { MybidsIcon } from "Assets/index";
import { MyloadsIcon } from "Assets/index";
import { CapacitySearchIcon } from "Assets/index";
import { AddLoadIcon } from "Assets/index";
import { NotificationIcon } from "Assets/index";
import { SmsIcon } from "Assets/index";
import { UnitsIcon } from "Assets/index";
import { AccountingIcon } from "Assets/index";
import { SettingsIcon } from "Assets/index";

export const sidebar = [
  { icon: DashboardIcon, name: "Dashboard", link: "/dashboard" },
  { icon: LoadBoardICon, name: "Load Board", link: "/load" },
  { icon: MybidsIcon, name: "My Bids", link: "/mybids" },
  { icon: MyloadsIcon, name: "My Loads", link: "/myloads" },
  { icon: CapacitySearchIcon, name: "Capacity Search", link: "/capacity" },
  { icon: AddLoadIcon, name: "Add Load", link: "/addload" },
  { icon: NotificationIcon, name: "Notification", link: "/notification" },
  { icon: SmsIcon, name: "Chat", link: "/chat" },
  { icon: UnitsIcon, name: "Units", link: "/units" },
  { icon: AccountingIcon, name: "Accounting", link: "/accounting" },
  { icon: SettingsIcon, name: "Settings", link: "/settings" },
  { icon: Logout, name: "Logout", link: "/sign-in" },
];
