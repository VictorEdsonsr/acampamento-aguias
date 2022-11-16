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
              <h2 className="font-medium lowercase text-xl sm:text-3xl mb-2">
                Vai ser inesquecível
              </h2>

              <ul className="text-left ml-10 list-disc">
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

        <section className="bg-slate-700 text-white mt-5 flex justify-center items-center">
          <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center ">
            <article className="p-3 text-center">
              <h1 className="font-bold  text-xl sm:text-3xl">
                GINCANAS EM EQUIPE
              </h1>
              <h2 className="font-medium lowercase text-xl sm:text-3xl mb-2">
                TRABALHO EM EQUIPE COM OS NOVOS AMIGOS
              </h2>

              <ul className="text-left ml-10 list-disc">
                <li className="text-lg">Toboágua</li>
                <li className="text-lg">Piscina na Lama</li>
                <li className="text-lg">Cabo de Guerra</li>
                <li className="text-lg">Queimada</li>
                <li className="text-lg">Caça ao Tesouro</li>
                <li className="text-lg">Corrida de 3 Pernas</li>
                <li className="text-lg">Guerra de Bexigas D’água</li>
              </ul>
            </article>

            <figure className="flex items-center flex-col justify-center">
              <div className="flex flex-col md:flex-row  items-center justify-center">
                <Image
                  src="/img/gincana-1.jpg"
                  className="p-3"
                  width={250}
                  height={250}
                  alt="Imagem de Toboágua"
                />
                <Image
                  src="/img/gincana-2.jpg"
                  className="p-3"
                  width={250}
                  height={250}
                  alt="Imagem de Piscina na Lama"
                />
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center">
                <Image
                  src="/img/gincana-3.jpg"
                  className="p-3"
                  width={250}
                  height={250}
                  alt="Imagem de Cabo de Guerra"
                />
                <Image
                  src="/img/gincana-4.jpg"
                  className="p-3"
                  width={250}
                  height={250}
                  alt="Imagem Queimada"
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
              <h2 className="font-medium lowercase text-xl sm:text-3xl mb-2">
                É DE PRATICAR OUTROS ESPORTES
              </h2>

              <ul className="text-left ml-10 list-disc">
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
                  src="/img/atividades-1.jpg"
                  className="p-3"
                  width={250}
                  height={250}
                  alt="Imagem de tiroleza"
                />
                <Image
                  src="/img/atividades-2.jpg"
                  className="p-3"
                  width={250}
                  height={250}
                  alt="Imagem de escalada"
                />
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center">
                <Image
                  src="/img/atividades-3.jpg"
                  className="p-3"
                  width={250}
                  height={250}
                  alt="Imagem de Trilha na mata"
                />
                <Image
                  src="/img/atividades-4.jpg"
                  className="p-3"
                  width={250}
                  height={250}
                  alt="Imagem Acampando"
                />
              </div>
            </figure>
          </div>
        </section>

        <section className=" bg-gray-200 mt-5 flex justify-center items-center">
          <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center ">
            <article className="p-3 text-center">
              <h1 className="font-bold  text-xl sm:text-3xl">
                OFICINAS PROFISSIONAIS
              </h1>
              <h2 className="font-medium lowercase text-xl sm:text-3xl mb-2">
                BORA DESPERTAR TALENTOS?
              </h2>

              <ul className="text-left ml-10 list-disc">
                <li className="text-lg">Teatro</li>
                <li className="text-lg">Circo</li>
                <li className="text-lg">Cinema</li>
                <li className="text-lg">Pintura</li>
                <li className="text-lg">Conﬁtaria</li>
              </ul>
            </article>

            <figure className="flex items-center flex-col justify-center">
              <div className="flex flex-col md:flex-row  items-center justify-center">
                <Image
                  src="/img/oficina-1.jpg"
                  className="p-3"
                  width={250}
                  height={250}
                  alt="Imagem de teatro"
                />
                <Image
                  src="/img/oficina-2.jpeg"
                  className="p-3"
                  width={250}
                  height={250}
                  alt="Imagem de circo"
                />
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center">
                <Image
                  src="/img/oficina-3.jpeg"
                  className="p-3"
                  width={250}
                  height={250}
                  alt="Imagem de cinema"
                />
                <Image
                  src="/img/oficina-4.jpg"
                  className="p-3"
                  width={250}
                  height={250}
                  alt="Imagem de culinaria"
                />
              </div>
            </figure>
          </div>
        </section>
      </main>
    </>
  );
}
