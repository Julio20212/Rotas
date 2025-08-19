export default function Navbar() {
    return(

        <>
        <nav className="p-5 bg-black flex justify-end items-center">
      <ul className="flex justify-center items-center text-2xl gap-4 text-white ">
        <li><a href="/home">Home</a></li>
        <li><a href="/sobre">Sobre</a></li>
        <li><a href="/contatos">Contatos</a></li>
        <li><a href="/">Forte Abraço</a></li>
      </ul>
    </nav>

        </>
    )
}