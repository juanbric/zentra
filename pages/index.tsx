import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Zentra | Agencia de Desarrollo Web | Aumenta tus conversiones
        </title>
        <meta
          name="description"
          content="Si buscas vender más, convertir mejor, y posicionarte más rápido,
            desarrolla tu presencia web con Zentra para conseguir resultados"
        />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className="main">
        <h1 className="title">Zentra</h1>

        <p className="description text-center">Agencia de Desarrollo Web</p>

        <div className="grid-perfect">
          <p className="card-next">
            La agencia de desarrollo web que crea páginas corporativas y tiendas
            online rápidas, bonitas, usables y que te hacen vender como ninguna.
          </p>

          <p className="card-next">
            Si buscas vender más, convertir mejor, y posicionarte más rápido,
            desarrolla tu presencia web con Zentra para conseguir resultados.
          </p>
        </div>
      </main>

      <footer className="footer">Llámanos +31620717899</footer>
    </div>
  )
}
