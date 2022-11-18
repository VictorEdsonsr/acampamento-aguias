import Head from "next/head";
import Image from "next/image";
import firstBanner from "../../../public/img/banner-atividade.jpg";

import circuitoOne from "../../../public/img/circuito-1.jpg";
import circuitoTwo from "../../../public/img/circuito-2.jpg";
import circuitoThree from "../../../public/img/circuito-3.jpg";
import circuitoFour from "../../../public/img/circuito-4.jpg";

import gincanaOne from "../../../public/img/gincana-1.jpg";
import gincanaTwo from "../../../public/img/gincana-2.jpg";
import gincanaThree from "../../../public/img/gincana-3.jpg";
import gincanaFour from "../../../public/img/gincana-4.jpg";

import atividadeOne from "../../../public/img/atividades-1.jpg";
import atividadeTwo from "../../../public/img/atividades-2.jpg";
import atividadeThree from "../../../public/img/atividades-3.jpg";
import atividadeFour from "../../../public/img/atividades-4.jpg";

import oficinaOne from "../../../public/img/oficina-1.jpg";
import oficinaTwo from "../../../public/img/oficina-2.jpg";
import oficinaThree from "../../../public/img/oficina-3.jpeg";
import oficinaFour from "../../../public/img/oficina-4.jpg";

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
          <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center ">
            <article className="p-3 text-center sm:text-left">
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
                  src={circuitoOne}
                  className="w-full md:w-2/4 p-3 h-[280px]"
                  alt="Imagem de tiroleza"
                />

                <Image
                  src={circuitoTwo}
                  className="w-full md:w-2/4 p-3 h-[280px]"
                  alt="Imagem de escalada"
                />
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center">
                <Image
                  src={circuitoThree}
                  className="w-full md:w-2/4 p-3 h-[280px]"
                  alt="Imagem de Trilha na mata"
                />

                <Image
                  src={circuitoFour}
                  className="w-full md:w-2/4 p-3 h-[280px]"
                  alt="Imagem Acampando"
                />
              </div>
            </figure>
          </div>
        </section>

        <section className="bg-slate-700 text-white mt-5 flex justify-center items-center">
          <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center ">
            <article className="p-3 text-center sm:text-left">
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
              <div className="flex flex-col md:flex-row w-full items-center justify-center">
                <Image
                  src={gincanaOne}
                  className="w-full md:w-2/4 p-3 h-[280px]"
                  alt="Imagem de Toboágua"
                />

                <Image
                  src={gincanaTwo}
                  className="w-full md:w-2/4 p-3 h-[280px]"
                  alt="Imagem de Cabo de Guerra"
                />
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center">
                <Image
                  src={gincanaThree}
                  className="w-full md:w-2/4 p-3 h-[280px]"
                  alt="Imagem de Guerra de Bexigas D’água"
                />

                <Image
                  src={gincanaFour}
                  className="w-full md:w-2/4 p-3 h-[280px]"
                  alt="Imagem de Corrida de 3 Pernas"
                />
              </div>
            </figure>
          </div>
        </section>

        <section className="mt-5 flex justify-center items-center">
          <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center ">
            <article className="p-3 text-center sm:text-left">
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
                  src={atividadeOne}
                  className="p-3 w-full md:w-2/4 h-[280px]"
                  alt="Imagem de Natação"
                />
                <Image
                  src={atividadeTwo}
                  className="p-3 w-full md:w-2/4 h-[280px]"
                  alt="Imagem de Volei"
                />
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center">
                <Image
                  src={atividadeThree}
                  className="p-3 w-full md:w-2/4 h-[280px]"
                  alt="Imagem de PigPong"
                />
                <Image
                  src={atividadeFour}
                  className="p-3 w-full md:w-2/4 h-[280px]"
                  alt="Imagem de Futebol"
                />
              </div>
            </figure>
          </div>
        </section>

        <section className=" bg-gray-200 mt-5 flex justify-center items-center">
          <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center ">
            <article className="p-3 text-center sm:text-left">
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
                  src={oficinaOne}
                  className="p-3 w-full md:w-2/4 h-[280px]"
                  alt="Imagem de teatro"
                />
                <Image
                  src={oficinaTwo}
                  className="p-3 w-full md:w-2/4 h-[280px]"
                  alt="Imagem de circo"
                />
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center">
                <Image
                  src={oficinaThree}
                  className="p-3 w-full md:w-2/4 h-[280px]"
                  alt="Imagem de cinema"
                />
                <Image
                  src={oficinaFour}
                  className="p-3 w-full md:w-2/4 h-[280px]"
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
