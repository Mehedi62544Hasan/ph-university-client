import { ReactNode } from "react";

export type TSaidBar = {
    key: string;
    label: ReactNode;
    children?: TSaidBar[];
  } | undefined;
  
export type TGeneratorItems = {
    name: string;
    path?: string;
    element?: ReactNode;
    children?: TGeneratorItems[];
  };

export type TRoute = {
    path: string;
    element: ReactNode;
  };