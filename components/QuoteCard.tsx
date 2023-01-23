const QuoteCard = ({ jpQuote }: { jpQuote: string }) => {
  return (
    <section className="md:mb-[150px]">
      <div className="lg:flex lg:justify-center lg:items-center">
        <div className="px-4 lg:px-8 w-auto lg:w-[1130px]">
          <div className="pt-[52px] pb-8 md:py-[0px]">
            <div className="md:grid md:grid-cols-5 md:gap-8 border border-radius">
              <div className="py-[52px] md:py-[92px] px-8 md:col-span-3 md:flex md:flex-col md:justify-between">
                <div className="mb-2 header italic">{jpQuote}</div>
                <div>
                  <div className="border w-1/3 mb-4 mt-12" />
                  <a
                    href={"https://www.juanbri.dev"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold pb-2 hover:underline hover:text-third"
                  >
                    Juan Pablo Briceno
                  </a>
                  <p>Fundador de zentradev</p>
                </div>
              </div>
              <div className="py-[52px] text-second px-8 md:col-span-2 justify-between flex flex-col bg-gradient-to-r from-[#e8e7fb] to-[#fffffb]">
                <div className="header mb-6">
                  De acuerdo con los últimos datos del ONTSI del año 2021, el
                  83% de la población española accede todos los días a Internet,
                  y un 78,7% de ellos utilizan los buscadores para informarse
                  sobre productos y servicios antes de realizar una compra. Esto
                  refleja la importancia de tener una buena presencia y un alto
                  posicionamiento en línea para cualquier negocio que busca
                  aumentar sus ventas.
                </div>
                <div className="flex flex-col">
                  <a
                    href={
                      "https://www.ontsi.es/es/publicaciones/Tecnologia-Sociedad-en-Espana-2021"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline copy hover:text-third"
                  >
                    Observatorio Nacional de las Telecomunicaciones y de la
                    Sociedad de la Información (ONTSI)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteCard;
