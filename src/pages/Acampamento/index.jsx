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
        <section className=" h-[280px] sm:h-[500px] flex items-center flex-col justify-center">
          <Image
            src="/img/acampamento-banner.jpg"
            width={500}
            height={500}
            className="w-full h-full"
            alt="Banner da pagina acampamento"
          />
        </section>

        <section className="flex justify-center items-center p-10">
          <div className="container flex justify-between items-center flex-col lg:flex-row mx-auto">
            <article className="max-w-md my-5 sm:my-0">
              <h1 className="font-bold text-lg sm:text-2xl">
                Sobre o Acampamento de Férias
              </h1>
              <p className="text-sm my-2">
                Acreditamos no potencial dos ambientes naturais como um lugar
                onde crianças podem experimentar todos os seus sentidos, se
                expressar de uma maneira natural e brincar livremente.
              </p>

              <p className="text-sm my-2">
                O acampamento de férias Rio vai promover para seu filho (a) uma
                experiência de acampamento americano onde em meio a um ambiente
                totalmente saudável e de contato direto com a natureza, ele
                tenha a chance de viver uma experiência diferente de todas as
                outras férias.
              </p>

              <p className="text-sm my-2">
                Longe dos eletrônicos e das distrações da cidade, seu filho vai
                passar seis dias inesquecíveis em meio a natureza com novos
                amigos e desenvolvendo a arte da comunicação
              </p>

              <p className="text-sm my-2">
                A monitoria acompanha os acampantes 24 horas, que ficam
                divididos em quatro faixas etárias: 5 a 7, 8 a 10, 11 a 13 e 14
                a 17 anos.
              </p>
            </article>

            <figure className="h-[300px] md:h-[500px] flex items-center flex-col ">
              <Image
                src="/img/acampamento-ferias.jpg"
                width={200}
                height={200}
                className="w-full h-full"
                alt="Imagem sobre o acampamento"
              />
            </figure>
          </div>
        </section>

        <section className="bg-gray-200 flex justify-center items-center p-10">
          <div className="container flex justify-between items-center flex-col lg:flex-row mx-auto">
            <article className="max-w-md my-5 sm:my-0">
              <h1 className="font-bold text-lg sm:text-2xl">
                Por que mandar meu filho para o acampamento?
              </h1>
              <p className="text-sm my-2">
                Acreditamos no potencial dos ambientes naturais como um lugar
                onde crianças podem experimentar todos os seus sentidos, se
                expressar de uma maneira natural e brincar livremente. Aqui seu
                filho vai brincar de pique- pega, bolinha de gude, pião,
                brincadeira de roda, queimada e outras atividades que você
                brincava quando era criança.
              </p>

              <p className="text-sm my-2">
                Resgatar essa cultura é um rico exercício, pois possibilita às
                crianças conhecer e vivenciar novas experiências, além de uma
                reflexão empática de como brincavam as infâncias dos pais e
                avós.
              </p>

              <p className="text-sm my-2">
                O acampamento de férias vai promover para seu filho (a) uma
                experiência de acampamento em um ambiente totalmente saudável e
                de contato direto com a natureza. É uma oportunidade para seu
                filho (a) melhorar a convivência entre outros amigos e também
                para ficar longe dos eletrônicos por uma semana
              </p>

              <p className="text-sm my-2">
                O acampamento vai ajudar seu filho (a) no crescimento e
                amadurecimento, desenvolvendo a independência, autodescoberta
                ética e habilidades sociais. Também vamos enfatizar conceitos de
                equipe e pensamento crítico tão necessários no mundo de hoje e
                de amanhã.
              </p>

              <p className="text-sm my-2">
                O acampamento permite que crianças e adolescentes se tornem
                independentes e autoconfiantes. Tudo isso, enquanto socializam e
                fazem novos amigos e até aprendem novas habilidades com o curso
                de teatro e com o curso de interpretação para tv e cinema.
              </p>
            </article>

            <figure className="h-[300px] md:h-[500px] flex items-center flex-col ">
              <Image
                src="/img/porque-mandar.jpg"
                width={200}
                height={200}
                className="w-full h-full"
                alt="Imagem do porque mandar seu filho para o acampamento"
              />
            </figure>
          </div>
        </section>

        <section className="flex justify-center items-center p-10">
          <div className="container flex justify-between items-center w-full flex-col lg:flex-row mx-auto">
            <article className="max-w-md flex flex-col mr-5 my-5 sm:my-0">
              <h1 className="font-bold text-lg sm:text-2xl">
                Seu filho está acampando pela primeira vez?
              </h1>
              <p className="text-sm my-2">
                Com as famílias novas, nosso diretor e equipe de coordenação
                estarão em contato desde o processo de fechamento da temporada
                até durante o dia a dia do acampamento. Isso vai trazer muito
                mais segurança para você.
              </p>

              <p className="text-sm my-2">
                Durante a temporada você terá o contato direto do diretor e dos
                coordenadores do acampamento. Eles vão te deixar super.
                Tranquila com a adaptação e a primeira noite do seu filho no
                acampamento
              </p>

              <p className="text-sm my-2">
                Se você quiser, pode vim até o acampamento com a sua família
                para conhecer a estrutura e equipe.
              </p>

              <p className="text-sm my-2">
                Pense em dar ao seu filho uma semana ou mais para estar imerso
                na codificação ou na criação de habilidades específicas em um
                esporte. Essas oportunidades existem no acampamento e é difícil
                encontrar essa atividade focada em outros lugares.
              </p>

              <p className="text-sm my-2">
                Além disso, crianças e adolescentes são capazes de realmente
                sair da sua zona de conforto para assumir alguns riscos com suas
                habilidades, sem o iminente medo do fracasso e consequentes
                repercussões.
              </p>

              <p className="text-sm my-3">
                Um acampamento pode auxiliar as crianças na parte mental e
                física. Tem crianças e adolescentes que adoram videogames e
                celulares? O acampamento vai ajudar seu filho (a) sair do sofá e
                da tela do celular
              </p>
            </article>
            <figure className="h-[300px] md:h-[500px] flex items-center flex-col ">
              <Image
                src="/img/primeira-vez.jpg"
                width={200}
                height={200}
                className="w-full h-full"
                alt="Imagem de filho acampando pela primeira vez"
              />
            </figure>
          </div>
        </section>

        <section className="flex flex-col justify-center items-center">
          <h1 className="bg-gray-200 w-full text-3xl font-bold mx-auto text-center py-5">
            PREÇOS E DATAS
          </h1>

          <article className="container my-3 ">
            <div className="container my-3 p-3">
              <h1 className="text-lg sm:text-2xl font-bold">
                Temporada de Férias
              </h1>
              <p>
                Um resumo das principais informações da temporada de férias no
                acampamento
              </p>
            </div>
            <div className="container my-3 p-3">
              <h1 className="text-lg sm:text-2xl font-bold">Data</h1>
              <p>
                Os pacotes são de 3, 7 ou 14 dias, com início aos domingo e
                retorno no sábado nos pacotes completos ou no final de semana
                nos pacotes de 3 dias.
              </p>
              <p>
                Crianças de 5 a 7 anos podem fazer o pacote de 3 dias para
                adaptação.
              </p>
            </div>

            <div className="container my-3 p-3">
              <h1 className="text-lg sm:text-2xl font-bold">Valores e Datas</h1>
              <p>Confira os pacotes para as temporadas de verão Janeiro 2023</p>
            </div>
          </article>

          <div className="container  p-4 flex justify-center items-center flex-col sm:flex-row">
            <article className=" border-2 border-black flex flex-col items-center p-3">
              <div className="border border-black h-2/5 m-3 flex flex-col items-center justify-center w-full">
                <h1 className="text-xl text-black font-bold">7 DIAS</h1>
              </div>

              <WhatsappButton>SOLICITAR PROPOSTA WHATSAPP</WhatsappButton>

              <ul className="text-black my-3">
                <li>Roupa de cama inclusa</li>
                <li className="text-red-500 font-bold">15 á 21 de Janeiro</li>
                <li className="text-red-500 font-bold">22 á 28 de Janeiro</li>
                <li className="font-bold">
                  *Desconto para irmãos e alunos de escolas parceiras
                </li>
              </ul>

              <div className="border font-bold border-green-500 text-green-700  p-3 rounded-md flex items-center justify-center text-black">
                Valor 999,00
              </div>
            </article>

            <article className="my-5 sm:my-0 sm:mx-5 border-2 border-black flex flex-col items-center p-3">
              <div className="border border-black h-2/5 m-3 flex flex-col items-center justify-center w-full">
                <h1 className="text-xl text-black font-bold">14 DIAS</h1>
              </div>

              <WhatsappButton>SOLICITAR PROPOSTA WHATSAPP</WhatsappButton>

              <ul className="text-black my-3">
                <li>Roupa de cama inclusa</li>
                <li className="text-red-500 font-bold">15 á 28 de Janeiro</li>
                <li className="text-white"> a</li>
                <li className="font-bold">
                  *Desconto para irmãos e alunos de escolas parceiras
                </li>
              </ul>

              <div className="border font-bold border-green-500 text-green-700  p-3 rounded-md flex items-center justify-center text-black">
                Valor 1.999,00
              </div>
            </article>

            <article className=" border-2 border-black flex flex-col items-center p-3">
              <div className="border border-black h-2/5 m-3 flex flex-col items-center justify-center w-full">
                <h1 className="text-xl text-black uppercase font-bold">
                  Final de Semana
                </h1>
              </div>

              <WhatsappButton>SOLICITAR PROPOSTA WHATSAPP</WhatsappButton>

              <ul className="text-black my-3">
                <li>Roupa de cama inclusa</li>
                <li className="text-red-500 font-bold">20,21,22 de Janeiro</li>
                <li className="text-red-500 font-bold">27,28,29 de Janeiro</li>
                <li className="font-bold">
                  *Desconto para irmãos e alunos de escolas parceiras
                </li>
              </ul>

              <div className="border font-bold border-green-500 text-green-700  p-3 rounded-md flex items-center justify-center text-black">
                Valor 450,00
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
