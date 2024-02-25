import { NavLink } from "react-router-dom";
import { TGeneratorItems, TSaidBar } from "../types";

export const saidBarItemsGenerator = (
  items: TGeneratorItems[],
  role: string
) => {
  const SaidBar = items.reduce((pre: TSaidBar[], cur) => {
    if (cur.name && cur.path) {
      pre.push({
        key: cur.name,
        label: <NavLink to={`/${role}/${cur.path}`}>{cur.name}</NavLink>,
      });
    }

    if (cur.children) {
      pre.push({
        key: cur.name,
        label: cur.name,
        children: cur.children.map((item) => {
        if(item.name){
          return{
            key: item.name,
            label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
          }
        }
      }),
      });
    }

    return pre;
  }, []);
  return SaidBar;
};
