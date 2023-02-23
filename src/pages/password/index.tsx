import next from "next";
function Password() {
  return (
    <div className="h-screen w-screen  bg-slate-400 flex items-center justify-center">
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Recuparar conta</title>

      <div className="flex flex-col max-w-md px-4  bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 p-5">
        <div className="self-center mb-3 text-xl font-light text-gray-800 sm:text-1xl dark:text-white">
          Digite seu email para recuparar conta
        </div>
        <span className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
          Já tem conta ?
          <a
            href="login"
            className="ml-2 text-sm text-blue-500 underline hover:text-blue-700"
          >
            Entrar na conta
          </a>
        </span>
        <div className="p-6 mt-4">
          <form action="#">
            <div className="flex flex-col mb-2">
              <div className=" relative ">
                <label className="text-white"> Email</label>
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
            <div className=" relative ">
              <label className="text-white">Email</label>
              <input
                type="email"
                id="create-account-pseudo"
                className=" rounded-lg border-transparent flex-1 appearance-none border
                 border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2
                 "
                placeholder="Senha"
              />
            </div>
            <div className="flex w-full my-4">
              <button
                className="mt-4 py-2 px-4  bg-blue-600 hover:bg-blue-700 text-white w-full 
                text-center text-base font-semibold shadow-md rounded-lg"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Password;
