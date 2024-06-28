import { useRouteError } from "react-router-dom";

export default function ErrorBoundary() {
  const error: any = useRouteError();
  console.error(error);

  // If you want to customize the component display name in React dev tools:
  // ErrorBoundary.displayName = "SampleErrorBoundary";

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.status + " " + error.statusText || error.message || error}</i>
        <button onClick={() => window.history.back()}>Go Back</button>
      </p>
    </div>
  );
}
