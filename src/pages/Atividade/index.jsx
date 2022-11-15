import Head from "next/head";
import Image from "next/image";
import firstBanner from "../../../public/img/banner-atividade.jpg";

export default function Atividade() {
  return (
    <>
      <Head>
        <title>Atividades</title>
      </Head>
      <main>
        <section className="w-full h-[300px]">
          <Image
            src={firstBanner}
            alt="Foto de criancas brincando"
            className="w-full h-full"
          />
        </section>

        <section className=" flex justify-center items-center ">
          <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center ">
            <article className="p-3 text-center">
              <h1 className="font-bold text-xl sm:text-3xl">
                CIRCUITO DE AVENTURAS
              </h1>
              <h2 className="font-medium text-xl sm:text-3xl mb-2">
                Vai ser inesquecível
              </h2>

              <ul className="text-left">
                <li className="text-lg">Tiroleza</li>
                <li className="text-lg">Teia de Escalada</li>
                <li className="text-lg">Trilha na Mata</li>
                <li className="text-lg">Arte de Acampar</li>
                <li className="text-lg">Rapel</li>
              </ul>
            </article>

            <figure className="flex items-center flex-col justify-center">
              <div className="flex flex-col md:flex-row  items-center justify-center">
                <Image
                  src="/img/circuito-1.jpg"
                  className="p-3"
                  width={250}
                  height={250}
                  alt="Imagem de tiroleza"
                />
                <Image
                  src="/img/circuito-2.jpg"
                  className="p-3"
                  width={250}
                  height={250}
                  alt="Imagem de escalada"
                />
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center">
                <Image
                  src="/img/circuito-3.jpg"
                  className="p-3"
                  width={250}
                  height={250}
                  alt="Imagem de Trilha na mata"
                />
                <Image
                  src="/img/circuito-4.jpg"
                  className="p-3"
                  width={250}
                  height={250}
                  alt="Imagem Acampando"
                />
              </div>
            </figure>
          </div>
        </section>

        <section className="mt-5 flex justify-center items-center">
          <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center ">
            <article className="p-3 text-center">
              <h1 className="font-bold  text-xl sm:text-3xl">
                ATIVIDADES ESPORTIVAS
              </h1>
              <h2 className="font-medium text-xl sm:text-3xl mb-2">
                É DE PRATICAR OUTROS ESPORTES
              </h2>

              <ul className="text-left">
                <li className="text-lg">Natação</li>
                <li className="text-lg">Volei</li>
                <li className="text-lg">Futvolei</li>
                <li className="text-lg">Futebol</li>
                <li className="text-lg">PigPong</li>
              </ul>
            </article>

            <figure className="flex items-center flex-col justify-center">
              <div className="flex flex-col md:flex-row  items-center justify-center">
                <Image
                  src="/img/gincana-1.jpg"
                  className="p-3"
                  width={250}
                  height={250}
                  alt="Imagem de tiroleza"
                />
                <Image
                  src="/img/gincana-2.jpg"
                  className="p-3"
                  width={250}
                  height={250}
                  alt="Imagem de escalada"
                />
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center">
                <Image
                  src="/img/gincana-3.jpg"
                  className="p-3"
                  width={250}
                  height={250}
                  alt="Imagem de Trilha na mata"
                />
                <Image
                  src="/img/gincana-4.jpg"
                  className="p-3"
                  width={250}
                  height={250}
                  alt="Imagem Acampando"
                />
              </div>
            </figure>
          </div>
        </section>
      </main>
    </>
  );
}
