import { UserCircle } from "lucide-react";
export const resources = [
  {
    name: "user",
    list: "/user",
    create: "/user/create",
    edit: "/user/edit/:id",
    show: "/user/show/:id",
    icon: <UserCircle />,
    meta: {
      label: "ຜູ້ໃຊ້ລະບົບ",
      order: 1,
    },
  },
  {
    name: "profile",
    list: "/profile",
    create: "/profile/create",
    edit: "/profile/edit/:id",
    show: "/profile/show/:id",
    icon: <UserCircle />,
    meta: {
      label: "profile",
      order: 2,
    },
  },
  {
    name: "product",
    list: "/product",
    create: "/product/create",
    edit: "/product/edit/:id",
    show: "/product/show/:id",
    icon: <UserCircle />,
    canDelete: true,
    meta: {
      label: "product",
      order: 3,
    },
  },
];
