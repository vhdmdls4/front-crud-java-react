import { useRouteError } from "react-router-dom";

export default function GenericErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
        <button onClick={() => window.history.back()}>Go Back</button>
      </p>
    </div>
  );
}
