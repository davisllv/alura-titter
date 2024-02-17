import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      className="w-full h-full items-center flex justify-center flex-col gap-10 bg-gray-800	 font-fira-sans"
      id="error-page"
    >
      <div className="text-8xl">
        <span className="text-amber-700	">4</span>
        <span className="text-slate-300">{"</>"}</span>
        <span className="text-amber-700	">4</span>
      </div>

      <code>
        <p className=" italic">
          <b className="text-purple-500">console</b>
          <b className="text-slate-300">.</b>
          <b className="text-lime-500">error</b>
          <b className="text-red-500">{`(`}</b>
          <b className="text-yellow-200 text-sm">
            {`"Sorry, an unexpected error has occurred."`}
          </b>
          <b className="text-red-500">{`)`}</b>
        </p>
        <br />
        <span className="text-blue-400">Error404</span>
        <span className="text-slate-300">{`( ) {`}</span>
        <br />
        <span className="ml-10 text-red-500">
          message <b className="text-slate-300">= </b>
        </span>

        <span className="text-lime-700">
          <b className="text-slate-300">"</b>
          {"Page not found"}
          <b className="text-slate-300">"</b>
        </span>
        <br />
        <span className="text-slate-300">{`}`}</span>
      </code>
      {/* <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p> */}
    </div>
  );
};

export default NotFound;
