import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      className="w-full h-full items-center flex justify-center flex-col gap-10 bg-zinc-400 font-fira-sans"
      id="error-page"
    >
      <div>
        <span className="text-10xl">4</span>
        <span>{"</>"}</span>
        <span>4</span>
      </div>

      <code>
        <span>Error404</span>
        <span className="text-white">{`( ) {`}</span>
        <br />
        <span className="ml-10">
          message <b>= </b>
        </span>
        <span>{"Page not found"}</span>
        <br />
        <span className="text-white">{`}`}</span>
      </code>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default NotFound;
