const AdminPaths = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    element: "AdminDashboard",
  },
  {
    name: "User Management",

    children: [
      {
        name: "Create Admin",
        path: "/admin/create-admin",
        element: "CreateAdmin",
      },
      {
        name: "Create Faculty",
        path: "/admin/create-faculty",
        element: "CreateAdmin",
      },
      {
        name: "Create Student",
        path: "/admin/create-student",
        element: "CreateAdmin",
      },
    ],
  },
];

// const newArray = AdminPaths.reduce((pre, curr) => {
//   if (curr.path && curr.element) {
//     pre.push({
//       path: curr.path,
//       element: curr.element,
//     });
//   }

//   if (curr.children) {
//     curr.children.forEach((child) => {
//       pre.push({
//         path: child.path,
//         element: child.element,
//       });
//     });
//   }

//   return pre;
// }, []);

const layoutRoutes = AdminPaths.reduce((pre, cur) => {
  if (cur.name && cur.path) {
    pre.push({
      key: cur.name,
      label: cur.path,
    });
  }

  if (cur.children) {
    pre.push({
      key: cur.name,
      label: cur.name,
      children: cur.children.map((item) => ({
        key: item.name,
        label: item.path,
      })),
    });
  }

  return pre;
}, []);

console.log(layoutRoutes);
