import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Login from "../app/login/Login";

//there are 4 types of routers in react-router-dom that uses new data API's (still doesnt support react-native)
//createBrowserRouter, createHashRouter, createMemoryRouter, createStaticRouter
//createBrowserRouter is the most commonly used, it uses router history API to keep UI in sync with the URL
//createHashRouter is used for static sites
//createMemoryRouter is used for testing (it keeps the UI in memory, useful for testing and non-browser environments, doesn't read or write to the address bar )
//createStaticRouter is used for server-side rendering

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     // loader: ,
//     children: [
//       {
//         path: "login",
//         element: <Login />,
//         // loader: teamLoader,
//       },
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );
