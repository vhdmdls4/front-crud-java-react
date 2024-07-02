import {
  Link,
  Outlet,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import GenericErrorPage from "@/errors/GenericErrorPage";
import Home from "@/app/home/Home";
import Login from "@/app/login/Login";
import Copyright from "@/app/login/Copyright";

//there are 4 types of routers in react-router-dom that uses new data API's (still doesnt support react-native)
//createBrowserRouter, createHashRouter, createMemoryRouter, createStaticRouter
//createBrowserRouter is the most commonly used, it uses router history API to keep UI in sync with the URL
//createHashRouter is used for static sites
//createMemoryRouter is used for testing (it keeps the UI in memory, useful for testing and non-browser environments, doesn't read or write to the address bar )
//createStaticRouter is used for server-side rendering

export const router = createBrowserRouter(
  createRoutesFromElements(
    //father route can be used to define a layout for the app
    <>
      <Route>
        <Route
          path="/login"
          // loader={({ params }: any) => {
          //   console.log(params["lang"]);
          //   //should return value
          //   return null;
          // }}
          // action={() => {
          //   return null;
          // }}
          // <Route path="/project/task?/:taskId" />

          element={<Login CopyrightComponent={Copyright} />}
          errorElement={<GenericErrorPage />}
        />
      </Route>
      <Route>
        <Route
          path="/"
          element={<Home />}
          errorElement={<GenericErrorPage />}
          // handle={{
          //   crumb: () => <Link to="/login">Messages</Link>,
          // }}
        />
      </Route>
    </>
  )
);
//example of nested routes
// children: [
//   {
//     path: "/contacts",
//     element: <Login />,
//     errorElement: <GenericErrorPage />,
//     children: [
//       {
//         path: "/:id",
//         element: <Login />,
//         errorElement: <GenericErrorPage />,
//       },
//     ],
//   },
// ],
// basename is used when the app is not served from the root of the domain, it is the base URL for all locations, links will be relative to this URL
//  basename: "/app",
// hydrationData is used to pass data to the app when it is server-side rendered
// unstable_dataStrategy is used to determine how to handle data fetching,
// window use a different window than the global window object

// alternative way to create a router
/*

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    </BrowserRouter>
  );

function App() {
  return (
    <BrowserRouter basename="/app">
      <Routes>
        <Route path="/" />
        </Routes>
        </BrowserRouter>
      );
    }


// is possible to use the BrowserRouter component to wrap the app and use the Routes component to define the routes
const routerHere = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={<Home />}
      path="home/:homeItemId"
      loader={async ({ params }) => {
        return fetch(
          `/fake/api/teams/${params.homeItemId}.json`
        );
      }}
      action={async ({ request }) => {
        return updateFakeTeam(await request.formData());
      }}
      errorElement={<ErrorBoundary />}
    />
  )
);

*/
