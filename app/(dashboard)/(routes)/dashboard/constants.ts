import {
  BriefcaseBusiness,
  DollarSign,
  HomeIcon,
  MapPinnedIcon,
  MinusCircle,
  PersonStanding,
} from "lucide-react";

export const tools = [
  {
    label: "Internal Category",
    icon: MapPinnedIcon,
    href: "/quiz",
    color: "text-red-500",
    bgColor: "bg-red-500/20",
  },
  {
    label: "Trademark",
    icon: BriefcaseBusiness,
    href: "/summarize",
    color: "text-green-500",
    bgColor: "bg-green-500/20",
  },
  {
    label: "Tax Residency",
    icon: HomeIcon,
    href: "/explain",
    color: "text-sky-500",
    bgColor: "bg-sky-500/20",
  },
  {
    label: "Fringe Benefit Tax",
    icon: PersonStanding,
    href: "/write",
    color: "text-orange-500",
    bgColor: "bg-orange-500/20",
  },
  {
    label: "International Tax",
    icon: DollarSign,
    href: "/write",
    color: "text-purple-500",
    bgColor: "bg-purple-500/20",
  },
  {
    label: "General Deductions",
    icon: MinusCircle,
    href: "/write",
    color: "text-pink-500",
    bgColor: "bg-pink-500/20",
  },
];
