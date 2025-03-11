import { Route, Routes } from "react-router-dom"; // Importation de BrowserRouter
import { lazy, Suspense } from "react";
import { IRoute } from "@interfaces/types";
// import { postAnalyse } from "@src/api/ia/analyseService";
// import { postEstimation } from "@src/api/ia/estimationService";
// import { postGeneration } from "@src/api/ia/generationService";

// Chargement dynamique des composants
const Analyse = lazy(() => import("@views/Analyse"));
const Estimation = lazy(() => import("@views/Estimation"));
const Generation = lazy(() => import("@views/Generation"));
const Contact = lazy(() => import("@views/Contact"));
// const Traitements = lazy(() => import("@views/Traitements"));
const Home = lazy(() => import("@views/Home"));
const NotFound = lazy(() => import("@views/NotFound"));

export const routes: IRoute[] = [
  { path: "/", element: <Home /> },
  { path: "/analyse", element: <Analyse /> },
  { path: "/estimation", element: <Estimation /> },
  { path: "/generation", element: <Generation /> },
  { path: "/contact", element: <Contact />},
  // { path: "/analyse", element: <Traitements handleTraitement={postAnalyse} title="Analyser l'annonce" buttonTitle="Analyser" resultTitle="Résultat de l'analyse"/> },
  // { path: "/estimation", element: <Traitements handleTraitement={postEstimation} title="Estimation de l'annonce" buttonTitle="Estimer" resultTitle="Résultat de l'estimation"/> },
  // { path: "/generation", element: <Traitements handleTraitement={postGeneration} title="Génération d'une annonce" buttonTitle="Générer" resultTitle="Résultat de la génération"/> },
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
