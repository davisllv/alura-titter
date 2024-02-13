import { useState } from "react";

function App() {
  console.log("Oi");
  const [typeInput, setTypeInput] = useState("password");
  return (
    <div className="w-screen flex flex-row">
      <div
        id="login"
        className="w-2/5 p-10 flex flex-col gap-10 justify-center"
      >
        <div className="w-2/5">
          <h1>Welcome Back</h1>
          <p>Login to acess your account</p>
        </div>

        <div id="input-containers" className="w-full flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            onFocus={() => {
              setTypeInput("text");
            }}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <input
            type={typeInput}
            placeholder="password"
            onFocus={() => {
              setTypeInput("password");
            }}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="flex flex-row gap-2">
          <input type="checkbox" />
          <a href="">Remember me</a>
        </div>

        <button className="w-full p-2.5 rounded-md border-0 text-white shadow-sm bg-blue-700">
          LOGIN
        </button>
      </div>
      <div
        id="user-image"
        className="w-3/5 bg-login-pattern bg-cover bg-center"
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
