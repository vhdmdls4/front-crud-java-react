import React from "react";
import { Link, useRouteError } from "react-router-dom";

export default function NotFoundPage() {
  const error: any = useRouteError();
  console.error(error);
  return (
    <div>
      <div>Not Found Page 404</div>
      <Link to="/">Go to Home</Link>
    </div>
  );
}
