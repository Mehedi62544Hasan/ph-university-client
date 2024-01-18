import { ReactNode } from "react";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import { NavLink } from "react-router-dom";
// import CreateFaculty from "../pages/admin/CreateFaculty";
// import CreateStudent from "../pages/admin/CreateStudent";

type TRoute = {
  path: string;
  element: ReactNode;
};

type TSaidBar = {
  key: string;
  label: ReactNode;
  children?: TSaidBar[];
};

const AdminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
    ],
  },
];

export const adminRoutes = AdminPaths.reduce((pre: TRoute[], curr) => {
  if (curr.path && curr.element) {
    pre.push({
      path: curr.path,
      element: curr.element,
    });
  }

  if (curr.children) {
    curr.children.forEach((child) => {
      pre.push({
        path: child.path,
        element: child.element,
      });
    });
  }

  return pre;
}, []);

export const AdminSaidBar = AdminPaths.reduce((pre: TSaidBar[], cur) => {
  if (cur.name && cur.path) {
    pre.push({
      key: cur.name,
      label: <NavLink to={`/admin/${cur.path}`}>{cur.name}</NavLink>,
    });
  }

  if (cur.children) {
    pre.push({
      key: cur.name,
      label: cur.name,
      children: cur.children.map((item) => ({
        key: item.name,
        label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
      })),
    });
  }

  return pre;
}, []);

// export const AdminPaths = [
//   {
//     path: "dashboard",
//     element: <AdminDashboard />,
//   },
//   {
//     path: "create-admin",
//     element: <CreateAdmin />,
//   },
//   {
//     path: "create-faculty",
//     element: <CreateFaculty />,
//   },
//   {
//     path: "create-student",
//     element: <CreateStudent />,
//   },
// ];
