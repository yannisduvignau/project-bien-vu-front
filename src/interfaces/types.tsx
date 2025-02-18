import { ReactNode } from "react";

// ROUTES
export interface IRoute {
    path: string;
    element: ReactNode; //ComponentType;
    guard?: React.ComponentType<{ children: ReactNode }>; //ComponentType<GuardProps>;
    layout?: React.ComponentType<{ children: ReactNode }>; //ComponentType<GuardProps>;
  }