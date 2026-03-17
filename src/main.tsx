import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import LandingPage from "./pages/LanndingPage.tsx";
import App from "./App.tsx";
import PrayerGroup from "./pages/PrayerGroup.tsx";
import NovenasSpirit from "./pages/NovenasSpirit.tsx";
import SaintsGalery from "./pages/SaintsGalery.tsx";
import { SaintsContextProvider } from "./contexts/SaintsContext.tsx";
import PrayersForFrance from "./pages/PrayersForFrance.tsx";
import QuotesAndTestaments from "./pages/QuotesAndTestaments.tsx";

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
        path: "saints-de-france",
        element: <SaintsGalery />,
      },
      {
        path: "prieres-pour-la-france/:id",
        element: <PrayersForFrance />,
      },
      {
        path: "citations-et-testaments/",
        element: <QuotesAndTestaments />,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");

if (rootElement === null) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <SaintsContextProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </SaintsContextProvider>,
);
