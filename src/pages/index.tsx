import Link from "next/link";

function Home() {
  return (
    <>
      <div>
        <title>Gerenciamento taxi</title>
      </div>
      <div className="text-white">
        <Link href="/login">Tela de Login</Link>
      </div>
    </>
  );
}
export default Home;
