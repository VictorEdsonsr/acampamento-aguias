import Head from "next/head";
import Image from "next/image";
import { FaCamera, FaMapMarkedAlt } from "react-icons/fa";
import { ActionButton } from "../components/Buttons";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bem vindo a pagina principal</title>
      </Head>
      <main>
        <section className="bg-[url('/img/banner-home-1.jpg')] w-full h-[690px] relative flex flex-col items-center justify-center">
          <div className="container flex flex-col items-center justify-center">
            <article className="absolute z-10 m-auto text-white  text-center max-w-6xl">
              <h1 className="font-extrabold text-3xl sm:text-5xl my-3">
                Um acampamento de férias no Interior do Rio de Janeiro 90
                quilômetros do Aeroporto Santos Dumont
              </h1>

              <p className="font-bold text-lg sm:text-xl">
                Acampamento seguindo padrões e procedimentos da International
                Camping Fellowship
              </p>
            </article>
          </div>
          <div className="bg-gradient-to-t from-slate-900 to-transparent absolute top-0 right-0 left-0 bottom-0"></div>
        </section>

        <section className="my-10 flex items-center justify-center">
          <div className="container flex items-center justify-center flex flex-col sm:flex-row">
            <article className="text-center p-5 flex flex-col items-center justify-center max-w-md">
              <span>
                <FaCamera size={40} />
              </span>

              <h2 className="font-bold text-lg">
                No Inerior do Rio de Janeiro
              </h2>
              <p className="text-md">
                Sem necessidade de pegar estradas para quem está na capital.
                Seus ﬁlhos muito um passo da natureza.
              </p>
            </article>

            <article className="text-center p-5 flex flex-col items-center justify-center max-w-md">
              <span>
                <FaMapMarkedAlt size={40} />
              </span>

              <h3 className="font-bold text-lg">Acompanhamento Ao Vivo</h3>
              <p className="text-md">
                Através de um grupo privado no Facebook, você vai acompanhar
                fotos e vídeos durante todo o dia
              </p>
            </article>
          </div>
        </section>

        <section className="bg-gray-200 flex items-center justify-center">
          <div className="container flex flex-col sm:flex-row items-center justify-center">
            <figure className="p-5">
              <Image
                src="/img/banner-home-2.jpg"
                width={400}
                height={400}
                alt="Sitio Kixiki"
              />
            </figure>

            <article className="max-w-lg p-5 max-h-full">
              <h2 className="text-xl font-semibold">Sítio Kixiki!</h2>
              <p className="text-md my-3">
                O Sítio Kixiki, local do acampamento encontra-se no interior do
                Rio de Janeiro, na cidade de Rio bonito, uma das maiores áreas
                de proteção ambiental do nosso estado.
              </p>

              <p className="text-md my-3">
                Estamos a 90 quilômetros do Aeroporto Santos Dumont.
              </p>

              <p className="text-md my-3">
                Todo o projeto do acampamento foi seguindo normas e
                procedimentos da International Camping Fellowship .
              </p>

              <p className="text-md my-3">
                Somos um acampamento familiar, com os proprietários acompanhando
                e cuidando de cada detalhe.A equipe do acampamento é um
                diferencial, com formação própria e um foco em auxiliar as
                crianças no desenvolvimento da sua autonomia.
              </p>

              <p className="text-md my-3 mb-5">
                As crianças estão 24 horas acompanhadas com Adultos. Temos
                monitores, enfermeiros e uma equipe de seguranças para garantir
                a segurança de todos acampantes e de nossa equipe.
              </p>
              <ActionButton link="/Atividade">ATIVIDADES</ActionButton>
            </article>
          </div>
        </section>

        <section className=" flex items-center justify-center">
          <div className="container flex flex-col sm:flex-row items-center justify-center">
            <article className="max-w-lg p-5 max-h-full">
              <h2 className="text-xl font-semibold">LOCALIZAÇÃO</h2>
              <p className="text-md my-3">
                O acampamento está localizado no Polo de Ecoturismo do estado do
                Rio de Janeiro.
              </p>

              <p className="text-md my-3">
                Estamos a apenas 90 quilômetros do Aeroporto Santos Dumont.
              </p>

              <p className="text-md my-3">
                É pertinho e ﬁca fácil para você marcar uma visita e vir nos
                conhecer.
              </p>

              <p className="text-md my-3 mb-5">
                Dentro do Polo de Ecoturismo do Rio de JaneiroBase da PM a
                4kmBase do SAMU a 4km e Hospital a 5km
              </p>
              <ActionButton link="/Acampamento">O ACAMPAMENTO</ActionButton>
            </article>

            <figure className="p-5">
              <Image
                src="/img/banner-localization.jpg"
                width={400}
                height={400}
                alt="Sitio Kixiki"
              />
            </figure>
          </div>
        </section>
      </main>
    </>
  );
}
