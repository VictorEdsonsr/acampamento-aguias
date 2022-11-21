import Head from "next/head";
import Link from "next/link";
import { FaPhone, FaWhatsappSquare, FaEnvelope } from "react-icons/fa";
import { WhatsappButton } from "../../components/Buttons";

export default function Contato() {
  return (
    <>
      <Head>
        <title>Contato</title>
      </Head>
      <main>
        <section className="flex flex-col items-center justify-center">
          <div className="text-6xl md:text-9xl mt-10 font-bold text-orange-500 ">
            CONTATOS
          </div>
        </section>

        <section className="flex justify-center item-center h-[600px] my-12 sm:my-0">
          <div className="container mx-auto max-w-2xl flex flex-col justify-between items-center h-full sm:flex-row">
            <div className="flex flex-col items-center w-40">
              <FaPhone size={50} />
              <h1 className="my-6 font-semibold text-xl">Telefone</h1>
              <Link
                className="cursor-pointer underline hover:text-orange-500 text-md"
                href="tel:+552197093-7723"
              >
                +55 21 97093-7723
              </Link>
            </div>

            <div className="flex flex-col sm:mx-5 items-center w-40">
              <FaWhatsappSquare size={50} />
              <h1 className="my-6 font-semibold text-xl">WhatsApp</h1>
              <WhatsappButton>CONVERSAR NO WHATSAPP</WhatsappButton>
            </div>

            <div className="flex flex-col items-center w-40">
              <FaEnvelope size={50} />
              <h1 className="my-6 font-semibold text-xl">Email</h1>
              <Link
                className="cursor-pointer underline hover:text-orange-500 text-md"
                href="mailto:acampamentodeferiasrio@gmail.com"
              >
                acampamentodeferiasrio@gmail.com
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
