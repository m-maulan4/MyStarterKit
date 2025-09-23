import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import RouterNavMain from "@/routers/RouterNavMain.ts";
import RouterNavMainSecond from "@/routers/RouterNavMainSecond.ts";
import { ThemeProvider } from "@/components/theme-provider.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="theme-mode">
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            {RouterNavMain.map((r) => (
              <Route path={r.path} element={<r.component />} />
            ))}
            {RouterNavMainSecond.map((r) => {
              return r.items.map((rr) => (
                <Route
                  key={rr.path}
                  path={r.path + "/" + rr.path}
                  element={<rr.component />}
                />
              ));
            })}
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
