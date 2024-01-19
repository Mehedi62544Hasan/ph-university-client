import { Layout, Menu } from "antd";
import { saidBarItemsGenerator } from "../../utils/saidBarItemsGenerator";
import { AdminPaths } from "../../routes/admin.routes";

const { Sider } = Layout;

const ROLE = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};

const SaidBar = () => {
  const role = ROLE.ADMIN;
  let saidBarItem;

  switch (role) {
    case ROLE.ADMIN:
      saidBarItem = saidBarItemsGenerator(AdminPaths, "admin");
      break;
    case ROLE.FACULTY:
      saidBarItem = saidBarItemsGenerator(AdminPaths, "faculty");
      break;
    case ROLE.STUDENT:
      saidBarItem = saidBarItemsGenerator(AdminPaths, "student");
      break;

    default:
      break;
  }

  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div
        style={{
          color: "white",
          textAlign: "center",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
        }}
      >
        <h1 style={{ font: "30px" }}>Ph Uni</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={saidBarItem}
      />
    </Sider>
  );
};

export default SaidBar;
