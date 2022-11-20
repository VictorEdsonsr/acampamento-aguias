import Image from "next/image";
import Link from "next/link";
import { Navbar } from "../Navbar";
import { useState, useEffect } from "react";
import { WhatsappButton } from "../Buttons";

export const Layout = ({ children }) => {
  const [fixed, setFixed] = useState("");

  const nav = [
    { name: "ESTRUTURA", link: "/" },
    { name: "ATIVIDADE", link: "/Atividade" },
    { name: "O ACAMPAMENTO", link: "/Acampamento" },
    { name: "CONTATOS", link: "/Contato" },
  ];

  // on render, set listener
  useEffect(() => {
    window.addEventListener("scroll", isFixed);
    return () => {
      window.removeEventListener("scroll", isFixed);
    };
  }, []);

  const isFixed = () => {
    /* Method that will fix header after a specific scrollable */
    const scrollTop = window.scrollY;
    const fixedClass =
      scrollTop >= 1
        ? "fixed top-0 left-0 right-0 transition-all bg-white max-h-24 z-50 flex justify-between p-7 items-center"
        : "";
    setFixed(fixedClass);
  };

  return (
    <>
      <header
        className={
          fixed
            ? fixed
            : "flex justify-between p-7 w-full items-center max-h-24"
        }
      >
        <Link href="/">
          <Image
            className=" z-50 "
            src="/img/logo.svg"
            width={120}
            height={90}
            alt="Logo do site"
          />
        </Link>

        <Navbar />
      </header>

      <main>{children}</main>

      <footer className="bg-black flex flex-col items-center justify-center">
        <div className="container flex flex-col sm:flex-row items-center justify-between text-white p-3">
          <WhatsappButton>CONVERSAR NO WHATSAPP?</WhatsappButton>

          <article className="my-5 sm:my-0 text-center sm:text-left">
            Está com dúvidas? <br />
            Adoramos conversar <br />
            Agende uma conversa com nossos <br />
            coordenadores e diretores
          </article>

          <ul className="text-center sm:text-left">
            {nav.map((navLink, index) => (
              <li className="px-3 text-white hover:text-orange-500" key={index}>
                <Link href={navLink.link}>{navLink.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
};
