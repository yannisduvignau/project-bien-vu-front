import { Route, Routes } from "react-router-dom"; // Importation de BrowserRouter
import React, { lazy, Suspense } from "react";
import { IRoute } from "@interfaces/types";

// Chargement dynamique des composants
const Analyse = lazy(() => import("@views/Analyse"));
const Estimation = lazy(() => import("@views/Estimation"));
const Generation = lazy(() => import("@views/Generation"));
const Home = lazy(() => import("@views/Home"));
const NotFound = lazy(() => import("@views/NotFound"));

export const routes: IRoute[] = [
  { path: "/", element: <Home /> },
  { path: "/analyse", element: <Analyse /> },
  { path: "/estimation", element: <Estimation /> },
  { path: "/generation", element: <Generation /> },
  { path: "*", element: <NotFound /> },
];

// Fonction pour générer les routes
export const renderRoutes = (routes: IRoute[]) => {
  return (
      <Routes>
        {routes.map((route: IRoute, index: number) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Suspense fallback={<span className="loader">Chargement...</span>}>
                  {route.element}
                </Suspense>
              }
            />
          );
        })}
      </Routes>
  );
};
