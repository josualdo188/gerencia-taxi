import Link from "next/link";
function Dashboard() {
  return (
    <div>
      <main className="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800">
        <div>
          <title>Painel</title>
        </div>
        <div className="flex items-start justify-between">
          <div className="relative hidden h-screen shadow-lg lg:block w-80">
            <div className="h-full bg-white dark:bg-gray-700">
              <div className="flex items-center justify-start pt-6 ml-8">
                <p className="text-xl font-bold dark:text-white">
                  Gerência Táxi
                </p>
              </div>
              <nav className="mt-6">
                <div>
                  <Link
                    className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800"
                    href="#"
                  >
                    <span className="text-left">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                      </svg>
                    </span>
                    <span className="mx-2 text-sm font-normal">Home</span>
                  </Link>
                  <Link
                    className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800"
                    href="#"
                  >
                    <span className="text-left">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                        />
                      </svg>
                    </span>
                    <span className="mx-2 text-sm font-normal">
                      Motoristas
                      <span className="w-4 h-2 p-1 ml-4 text-xs text-gray-400 bg-gray-200 rounded-lg">
                        0
                      </span>
                    </span>
                  </Link>
                  <Link
                    className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800"
                    href="#"
                  >
                    <span className="text-left">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                        />
                      </svg>
                    </span>
                    <span className="mx-4 text-sm font-normal">Veículos</span>
                  </Link>
                  <Link
                    className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800"
                    href="#"
                  >
                    <span className="text-left">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                        />
                      </svg>
                    </span>
                    <span className="mx-4 text-sm font-normal">Viagens</span>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
          <div className="flex flex-col w-full md:space-y-4">
            <header className="z-40 flex items-center justify-between w-full h-16 bg-gray-600">
              <div className="block ml-6 lg:hidden">
                <button className="flex items-center p-2 text-gray-500 bg-white rounded-full shadow text-md">
                  <svg
                    width="20"
                    height="20"
                    className="text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                  </svg>
                </button>
              </div>
              <div className="relative z-20 flex flex-col justify-end h-full px-3 md:w-full bg-gray-600">
                <div className="relative flex items-center justify-end w-full p-1 space-x-4">
                  <button className="flex items-center p-2 text-gray-400 bg-white rounded-full shadow hover:text-gray-700 text-md">
                    <svg
                      width="20"
                      height="20"
                      className="text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M912 1696q0-16-16-16-59 0-101.5-42.5t-42.5-101.5q0-16-16-16t-16 16q0 73 51.5 124.5t124.5 51.5q16 0 16-16zm816-288q0 52-38 90t-90 38h-448q0 106-75 181t-181 75-181-75-75-181h-448q-52 0-90-38t-38-90q50-42 91-88t85-119.5 74.5-158.5 50-206 19.5-260q0-152 117-282.5t307-158.5q-8-19-8-39 0-40 28-68t68-28 68 28 28 68q0 20-8 39 190 28 307 158.5t117 282.5q0 139 19.5 260t50 206 74.5 158.5 85 119.5 91 88z"></path>
                    </svg>
                  </button>
                  <span className="w-1 h-8 bg-gray-200 rounded-lg"></span>
                  <Link href="#" className="relative block">
                    <img
                      alt="profil"
                      src="/imageUser/perfil.jpg"
                      className="mx-auto object-cover rounded-full h-10 w-10 "
                    />
                  </Link>
                  <button className="flex items-center text-gray-500 dark:text-white text-md">
                    Josualdo s
                    <svg
                      width="20"
                      height="20"
                      className="ml-2 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </header>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Dashboard;
