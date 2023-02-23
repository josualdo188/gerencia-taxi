import Link from "next/link";

function users() {
  return (
    <div className="h-screen w-screen  bg-slate-400 flex items-center justify-center">
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Novo Usuário</title>

      <div className="flex flex-col max-w-md px-4  bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 p-5">
        <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
          Criar uma nova conta
        </div>
        <span className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
          Já tem conta ?
          <Link
            href="/login"
            className="ml-2 text-sm text-blue-500 underline hover:text-blue-700"
          >
            Entrar na conta
          </Link>
        </span>
        <div className="p-6 mt-4">
          <form action="#">
            <div className="flex flex-col mb-2">
              <div className=" relative ">
                <label form="name-with-label" className="text-white">
                  {" "}
                  Email
                </label>
                <input
                  type="email"
                  id="create-account-pseudo"
                  className=" rounded-lg border-transparent flex-1 appearance-none border
                 border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2
                 "
                  placeholder="Email"
                />
              </div>
            </div>

            <div className="flex gap-4 mb-2">
              <div className=" relative ">
                <label form="name-with-label" className="text-white">
                  {" "}
                  Nome
                </label>
                <input
                  type="text"
                  id="first-name"
                  className=" rounded-lg border-transparent flex-1 appearance-none border
                 border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2
                  focus:blue-600 "
                  placeholder="Nome"
                />
              </div>

              <div className=" relative ">
                <label form="name-with-label" className="text-white">
                  {" "}
                  Sobrenome
                </label>
                <input
                  type="text"
                  id="last-name"
                  className=" rounded-lg border-transparent flex-1 appearance-none border
                 border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2
                  focus:blue-600 "
                  placeholder="Sobrenome"
                />
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <div className=" relative ">
                <label form="name-with-label" className="text-white">
                  {" "}
                  Senha
                </label>
                <input
                  type="password"
                  id="create-account-email"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4
                 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2"
                  placeholder="Senha"
                />
              </div>

              <div className=" relative mt-3 ">
                <label form="name-with-label" className="text-white">
                  {" "}
                  Confirmar Senha
                </label>
                <input
                  type="password"
                  id="create-account-pseudo"
                  className=" rounded-lg border-transparent flex-1 appearance-none border
                 border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2
                 "
                  placeholder="Confirmar senha"
                />
              </div>
            </div>

            <div className="flex w-full my-4">
              <button
                className="mt-4 py-2 px-4  bg-blue-600 hover:bg-blue-700 text-white w-full 
                text-center text-base font-semibold shadow-md rounded-lg"
              >
                Salvar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default users;
