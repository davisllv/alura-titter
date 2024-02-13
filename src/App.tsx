import { useState } from "react";

function App() {
  const [isClosed, setIsClosed] = useState(true);
  return (
    <div className="w-screen flex flex-row font-fira-sans overflow-hidden">
      <div
        id="login"
        className="w-2/5 flex flex-col justify-center items-center"
      >
        <div className="px-14 shadow-2xl gap-4 flex justify-center flex-col h-55% w-3/4">
          <div className="w-4/5 flex flex-col gap-4">
            <h1 className="text-5xl">Welcome Back</h1>
            <p className="text-slate-400">Login to acess your account</p>
          </div>

          <div id="input-containers" className="w-full flex flex-col gap-4">
            <input
              type="text"
              placeholder="Username"
              className="block rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <div className="w-full relative">
              <input
                type={isClosed ? "password" : "text"}
                placeholder="Password"
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <button>
                <img
                  src={`eye-${isClosed ? "closed" : "open"}.png`}
                  className="h-5 hover:cursor-pointer absolute top-2 right-2"
                  alt=""
                  onClick={() => {
                    setIsClosed(!isClosed);
                  }}
                />
              </button>
            </div>
          </div>

          <div className="flex flex-row gap-2">
            <input type="checkbox" />
            <span>Remember me</span>
          </div>

          <button className="w-full p-2.5 rounded-md border-0 text-white shadow-sm bg-blue-700 hover:brightness-90">
            LOGIN
          </button>
        </div>
      </div>
      <div
        id="user-image"
        className="w-3/5 bg-login-pattern bg-cover bg-center hover:scale-105"
      >
        <img
          src="login-user-image.jpg"
          className="h-screen w-screen"
          alt="Login example Image"
        />
      </div>
    </div>
  );
}

export default App;
