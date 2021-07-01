import Head from 'next/head'
import path from 'path';
import fs from "fs";
import NumeroThumb from "../comps/numero_thumb.js"

export default function Home({contents}) {
  return (
    <div>
    <Head>
        <title>Letra Celuloide</title>
        <meta name="description" content="Revista de cine y literatura" />
        <link rel="icon" href="/favlogo.ico" />
        <link rel="stylesheet" href="/styles/main.css" />
        <script src="/newsform.js" ></script>
      </Head>
      <div className="grilla-contenido">
        { contents.map(elem => <NumeroThumb info={elem} />) }
      </div>
    </div>
        )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync('numeros')
  const files_innum = files.map(f => f.replace('.json',''));
  
  // Busca el último número con max. Defino cantidad de números a mostrar en Home
  const max_num = Math.max(...files_innum);
  const cantidad_numeros_home = 6;
  // Creo array con los ultimos N numeros asignados
  const arr_index = Array.from({length: cantidad_numeros_home}, (_, i) => max_num - i);
  // Leo la data JSON y la paso en un array al Index
  const contents = arr_index.map(filename => (fs.readFileSync(path.join('numeros', filename + ".json")).toString()));
  
  return { props: {
                  contents
               }
   };
}
