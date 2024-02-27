import { redirect } from "react-router";
import Input from "../../components/input";
import InputPassword from "../../components/password";
import "./styles.css";

const LoginPage = () => {
  const loginFunction = () => {
    console.log("OI");
    redirect("/post-page");
  };

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
            <Input type="text" placeholder="Username" />
            <InputPassword placeholder="Password" />
          </div>

          <div className="flex flex-row gap-2">
            <input type="checkbox" />
            <span>Remember me</span>
          </div>

          <button
            onClick={() => loginFunction()}
            className="w-full p-2.5 rounded-md border-0 text-white shadow-sm bg-blue-700 hover:brightness-90"
          >
            LOGIN
          </button>
        </div>
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
};

export default LoginPage;
