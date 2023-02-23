import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  function handlechangeEmail(event: any) {
    setEmail(event.target.value);
  }

  function handlechangePassword(event: any) {
    setPassword(event.target.value);
  }

  async function authenticate(email: string, password: string) {
    try {
      await axios.post("/api/login", {
        email,
        password,
      });

      router.push("/painel");
    } catch (error: any) {
      setError(error.response.data.error);
    }
  }
  function submit(event: any) {
    event.preventDefault();
    authenticate(email, password);
  }

  return (
    <div className="h-screen w-screen  bg-slate-400 flex items-center justify-center">
      <title>Login</title>

      <div className="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10 p-5">
        <h1
          className="font-medium text-2xl tracking-wide underline decoration-1 underline-offset-8
              text-center mb-6 decoration-blue-300 text-white"
        >
          Login
        </h1>

        <form onSubmit={submit}>
          <div className="mb-7">
            <label className="text-white"> Email</label>
            <input
              onChange={handlechangeEmail}
              type="email"
              className=" rounded-lg border-transparent flex-1 appearance-none border
                  border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base
                    focus:outline-none focus:ring-2 focus:blue-100 focus:border-transparent"
              name="email"
              placeholder="Digite seu email"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="text-white">
              {" "}
              Senha
            </label>
            <input
              onChange={handlechangePassword}
              type="password"
              className=" rounded-lg border-transparent flex-1 appearance-none border
                   border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base
                    focus:outline-none focus:ring-2 focus:blue-100 focus:border-transparent"
              name="Password"
              placeholder="Digite sua senha"
            />
          </div>

          <button
            type="submit"
            className="mt-4 py-2 px-4  bg-blue-600 hover:bg-blue-700 text-white w-full 
                    text-center text-base font-semibold shadow-md rounded-lg"
          >
            Entrar
          </button>
        </form>

        <div>{error}</div>

        <div className="flex gap-28  justify-center pt-3">
          <Link
            href="/password"
            className="text-sm hover:underline cursor-pointer text-blue-200  "
          >
            {" "}
            Esqueci a senha
          </Link>
          <Link
            href="/user"
            className="text-sm text-blue-200 hover:underline cursor-pointer"
          >
            {" "}
            Criar Usuário
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Login;
