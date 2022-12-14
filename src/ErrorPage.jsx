import { useRouteError, Link } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.log(error.status + " " + error.statusText);

  return (
    <div className="flex h-screen	w-screen flex-col items-center justify-center">
      <h1 className="text-3xl font-semibold">Oops!</h1>

      <br />

      <p>
        Sorry, we can't find that page. Go back to the
        <Link
          to="/"
          className="link-underline link-underline-black p-1 font-semibold text-violet-600 hover:text-violet-900"
        >
          home page.
        </Link>
      </p>
    </div>
  );
}

export default ErrorPage;
