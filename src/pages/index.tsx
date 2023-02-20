import Link from "next/link";

export default function Home() {
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
