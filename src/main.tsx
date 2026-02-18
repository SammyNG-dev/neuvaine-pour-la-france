import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import LandingPage from "./pages/LanndingPage.tsx";
import App from "./App.tsx";
import PrayerGroup from "./pages/PrayerGroup.tsx";
import NovenasSpirit from "./pages/NovenasSpirit.tsx";
import SaintsGalery from "./pages/SaintsGalery.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/page",
    element: <App />,
    children: [
      {
        path: "esprit-des-neuvaines",
        element: <NovenasSpirit />,
      },
      {
        path: "groupe-de-priere",
        element: <PrayerGroup />,
      },
      {
        path: "saints-patrons-de-france",
        element: <SaintsGalery />,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");

if (rootElement === null) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
