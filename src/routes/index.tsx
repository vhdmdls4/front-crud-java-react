import { Route, Routes } from "react-router-dom";

export default function RouterProviderApp() {
  return (
    <Routes>
      {/* <Route
        path="/"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/biblioteca"
        element={
          <PrivateRoute>
            <MediaLibraryProvider>
              <InProgress />
            </MediaLibraryProvider>
          </PrivateRoute>
        }
      /> */}
      <Route path="/" element={<div />} />
      <Route path="/signin" element={<div />} />
    </Routes>
  );
}
