import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./app/login/Login.tsx";
import GenericErrorPage from "./errors/GenericErrorPage.tsx";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import theme from "./theme/Theme.tsx";

//there are 4 types of routers in react-router-dom that uses new data API's (still doesnt support react-native)
//createBrowserRouter, createHashRouter, createMemoryRouter, createStaticRouter
//createBrowserRouter is the most commonly used, it uses router history API to keep UI in sync with the URL
//createHashRouter is used for static sites
//createMemoryRouter is used for testing (it keeps the UI in memory, useful for testing and non-browser environments, doesn't read or write to the address bar )
//createStaticRouter is used for server-side rendering

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <GenericErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <GenericErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
