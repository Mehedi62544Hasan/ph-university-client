import { ReactNode } from "react";

type TRoute = {
  path: string;
  element: ReactNode;
};

type TItems = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TItems[];
};

export const routerGenerator = (items: TItems[]) => {
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
