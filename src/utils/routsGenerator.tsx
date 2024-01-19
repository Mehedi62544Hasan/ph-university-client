import { TGeneratorItems, TRoute } from "../types";

export const routerGenerator = (items: TGeneratorItems[]) => {
  const routes = items.reduce((pre: TRoute[], curr) => {
    if (curr.path && curr.element) {
      pre.push({
        path: curr.path,
        element: curr.element,
      });
    }

    if (curr.children) {
      curr.children.forEach((child) => {
        pre.push({
          path: child.path!,
          element: child.element,
        });
      });
    }

    return pre;
  }, []);

  return routes;
};
