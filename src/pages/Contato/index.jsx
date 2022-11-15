import Head from "next/head";
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
          <div className="text-6xl md:text-9xl font-bold text-orange-200 relative">
            CONTATO
            <div className="text-2xl md:text-5xl font-bold text-orange-500 left-[60px] md:left-32 bottom-0 absolute">
              ACAMPAMENTO
            </div>
          </div>
        </section>

        <section className="flex justify-center item-center h-[600px] my-20 sm:my-0">
          <div className="container mx-auto max-w-2xl flex flex-col justify-between items-center h-full sm:flex-row">
            <div className="flex flex-col items-center">
              <FaPhone size={50} />
              <h1 className="my-6 font-semibold text-xl">Telefone</h1>
              <a
                className="cursor-pointer underline hover:text-orange-500 text-md"
                href="tel:5555555555"
              >
                555555555555
              </a>
            </div>

            <div className="flex flex-col items-center">
              <FaWhatsappSquare size={50} />
              <h1 className="my-6 font-semibold text-xl">WhatsApp</h1>
              <WhatsappButton>CONVERSAR NO WHATSAPP</WhatsappButton>
            </div>

            <div className="flex flex-col items-center">
              <FaEnvelope size={50} />
              <h1 className="my-6 font-semibold text-xl">Email</h1>
              <a
                className="cursor-pointer underline hover:text-orange-500 text-md"
                href="mailto:asd@gmail.com"
              >
                acampamento@gmail.com
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
