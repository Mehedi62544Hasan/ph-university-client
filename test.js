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

// const adminRoutes = AdminPaths.reduce((pre, curr) => {
//   if (curr.path && curr.element) {
//     pre.push({
//       path: curr.path,
//       element: curr.element,
//     });
//   }

//   if (curr.children) {
//     curr.children.forEach((ele) => {
//       pre.push({
//         path: ele.path,
//         element: ele.element,
//       });
//     });
//   }

//   return pre;
// }, []);

const adminSaidBar = AdminPaths.reduce((pre, curr) => {
  if (curr.name && curr.path) {
    pre.push({
      key: curr.name,
      label: curr.path,
    });
  }

  if (curr.children) {
    pre.push({
      key: curr.name,
      label: curr.name,
      children: curr.children.map((ele) => ({
        key: ele.name,
        label: ele.path,
      })),
    });
  }

  return pre;
}, []);

console.log(adminSaidBar);

// const AdminSaidBar = AdminPaths.reduce((pre: TSaidBar[], cur) => {
//   if (cur.name && cur.path) {
//     pre.push({
//       key: cur.name,
//       label: <NavLink to={`/admin/${cur.path}`}>{cur.name}</NavLink>,
//     });
//   }

//   if (cur.children) {
//     pre.push({
//       key: cur.name,
//       label: cur.name,
//       children: cur.children.map((item) => ({
//         key: item.name,
//         label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
//       })),
//     });
//   }

//   return pre;
// }, []);
