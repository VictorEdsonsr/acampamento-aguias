import Head from "next/head";
import Image from "next/image";
import { WhatsappButton } from "../../components/Buttons";

export default function Acampamento() {
  return (
    <>
      <Head>
        <title>O acampamento</title>
      </Head>
      <main>
        <section className="border-2 border-black h-[500px] flex items-center flex-col justify-center">
          <h1 className="text-xl sm:text-5xl">foto pagina O ACAMPAMENTO 01</h1>
        </section>

        <section className="flex justify-center items-center p-10">
          <div className="container flex justify-between items-center flex-col sm:flex-row mx-auto">
            <article className="max-w-md my-5 sm:my-0">
              <h1 className="font-bold text-2xl">
                O QUE É O ACAMPAMENTO DE FÉRIAS
              </h1>
              <p className="text-lg">
                TEXTO DO ALEXES TEXTO DO ALEXESTEXTO DO ALEXES TEXTO DO ALEXES
                TEXTO DO ALEXES TEXTO DO ALEXES TEXTO DO ALEXES TEXTO DO
                ALEXESTEXTO DO ALEXES TEXTO DO ALEXES TEXTO DO ALEXES TEXTO DO
                ALEXES TEXTO DO ALEXES TEXTO DO ALEXESTEXTO DO ALEXES TEXTO DO
                ALEXES TEXTO DO ALEXES TEXTO DO ALEXES TEXTO DO ALEXES TEXTO DO
                ALEXESTEXTO DO ALEXES TEXTO DO ALEXES TEXTO DO ALEXES TEXTO DO
                ALEXES TEXTO DO
              </p>
            </article>

            <figure className="border-2 border-black h-[300px] max-w-md flex flex-col items-center justify-center">
              <h1 className="text-2xl">
                PAGINA O ACAMPAMENTO FOTO O QUE É O ACAMPAMENTO DE FÉRIAS
              </h1>
            </figure>
          </div>
        </section>

        <section className="bg-gray-200 flex justify-center items-center p-10">
          <div className="container flex justify-between items-center flex-col sm:flex-row mx-auto">
            <article className="max-w-md my-5 sm:my-0">
              <h1 className="font-bold text-2xl">PORQUE MANDAR SEU FILHO</h1>
              <p className="text-lg">
                TEXTO DO ALEXES TEXTO DO ALEXESTEXTO DO ALEXES TEXTO DO ALEXES
                TEXTO DO ALEXES TEXTO DO ALEXES TEXTO DO ALEXES TEXTO DO
                ALEXESTEXTO DO ALEXES TEXTO DO ALEXES TEXTO DO ALEXES TEXTO DO
                ALEXES TEXTO DO ALEXES TEXTO DO ALEXESTEXTO DO ALEXES TEXTO DO
                ALEXES TEXTO DO ALEXES TEXTO DO ALEXES TEXTO DO ALEXES TEXTO DO
                ALEXESTEXTO DO ALEXES TEXTO DO ALEXES TEXTO DO ALEXES TEXTO DO
                ALEXES TEXTO DO
              </p>
            </article>

            <figure className="border-2 border-black h-[300px] max-w-md flex flex-col items-center justify-center">
              <h1 className="text-2xl">
                PAGINA O ACAMPAMENTO FOTO PORQUE MANDAR SEU FILHO
              </h1>
            </figure>
          </div>
        </section>

        <section className="flex justify-center items-center p-10">
          <div className="container flex justify-between items-center flex-col sm:flex-row mx-auto">
            <article className="max-w-md my-5 sm:my-0">
              <h1 className="font-bold text-2xl">
                1ª VEZ DO SEU FILHO NO ACAMPAMENTO?
              </h1>
              <p className="text-lg">
                TEXTO DO ALEXES TEXTO DO ALEXESTEXTO DO ALEXES TEXTO DO ALEXES
                TEXTO DO ALEXES TEXTO DO ALEXES TEXTO DO ALEXES TEXTO DO
                ALEXESTEXTO DO ALEXES TEXTO DO ALEXES TEXTO DO ALEXES TEXTO DO
                ALEXES TEXTO DO ALEXES TEXTO DO ALEXESTEXTO DO ALEXES TEXTO DO
                ALEXES TEXTO DO ALEXES TEXTO DO ALEXES TEXTO DO ALEXES TEXTO DO
                ALEXESTEXTO DO ALEXES TEXTO DO ALEXES TEXTO DO ALEXES TEXTO DO
                ALEXES TEXTO DO
              </p>
            </article>

            <figure className="border-2 border-black h-[300px] max-w-md flex flex-col items-center justify-center">
              <h1 className="text-2xl">
                PAGINA O ACAMPAMENTO FOTO 1ª VEZ DO SEU FILHO NO ACAMPAMENTO?
              </h1>
            </figure>
          </div>
        </section>

        <section className="flex flex-col justify-center items-center">
          <h1 className="bg-gray-200 w-full text-3xl font-bold mx-auto text-center py-5">
            PREÇOS E DATAS
          </h1>

          <div className="container  p-4 flex justify-center items-center flex-col sm:flex-row">
            <article className="border-2 border-black flex flex-col items-center p-3">
              <div className="border border-black h-2/5 m-3 flex flex-col items-center justify-center w-full">
                <h1 className="text-xl text-black font-bold">4 DIAS</h1>
              </div>

              <WhatsappButton>SOLICITAR PROPOSTA WHATSAPP</WhatsappButton>

              <ul className="text-black my-3">
                <li>ROUPA DE CAMA INCLUSA</li>
                <li>00 A 00 DEZEMBRO</li>
                <li>00 A 00 DEZEMBRO</li>
                <li>00 A 00 DEZEMBRO</li>
              </ul>

              <div className="border border-black p-3 rounded-md flex items-center justify-center text-black">
                R$599,00
              </div>
            </article>

            <article className="border-2 my-5 sm:my-0 sm:mx-5 border-black flex flex-col items-center p-3">
              <div className="border border-black h-2/5 m-3 flex flex-col items-center justify-center w-full">
                <h1 className="text-xl text-black font-bold">7 DIAS</h1>
              </div>

              <WhatsappButton>SOLICITAR PROPOSTA WHATSAPP</WhatsappButton>

              <ul className="text-black my-3">
                <li>ROUPA DE CAMA INCLUSA</li>
                <li>00 A 00 DEZEMBRO</li>
                <li>00 A 00 DEZEMBRO</li>
                <li>00 A 00 DEZEMBRO</li>
              </ul>

              <div className="border border-black p-3 rounded-md flex items-center justify-center text-black">
                R$599,00
              </div>
            </article>

            <article className="border-2 border-black flex flex-col items-center p-3">
              <div className="border border-black h-2/5 m-3 flex flex-col items-center justify-center w-full">
                <h1 className="text-xl text-black font-bold">14 DIAS</h1>
              </div>

              <WhatsappButton>SOLICITAR PROPOSTA WHATSAPP</WhatsappButton>

              <ul className="text-black my-3">
                <li>ROUPA DE CAMA INCLUSA</li>
                <li>00 A 00 DEZEMBRO</li>
                <li>00 A 00 DEZEMBRO</li>
                <li>00 A 00 DEZEMBRO</li>
              </ul>

              <div className="border border-black p-3 rounded-md flex items-center justify-center text-black">
                R$599,00
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
