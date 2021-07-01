import React from "react";
import Head from 'next/head';
import path from 'path';
import fs from "fs";
import NumeroThumb from "../../comps/numero_thumb.js";
import router from "next/router";
const max_num_archivo = 8;

function Archivo({contents, slug, cant_paginas}) {
  return (
        <div>
          <Head>
          <title>Letra Celuloide - Archivo</title>
          <meta name="description" content="Revista de cine y literatura" />
          <link rel="icon" href="/favlogo.ico" />
          <link rel="stylesheet" href="/styles/main.css" />
          <link rel="stylesheet" href="/styles/Archivo.module.css" />
          <script src="/newsform.js" ></script>
          </Head>
        <div className="contenedor-archivo">
          <h1>ARCHIVO</h1>
          <div className="grilla-contenido archivo">
            { contents.map(elem => <NumeroThumb info={elem} hover={true} size="medium" />) }
          </div>
          <p> PÁGINA {slug} de {cant_paginas}</p>
          <div className="paginas_router">
          {[...Array(cant_paginas).keys()].map(e=>(e + 1 == slug? <p style={{color:"gray", cursor:"default"}}>{(e + 1)}</p> : <p style={{cursor:"pointer"}} 
                                                                  onClick={()=> router.push(String(e + 1))
                                                                              }>{(e + 1)}</p>))}
          </div>
        </div>
        </div>
  )
}
function getNumberPages(length, max){
  const coeficiente = length / max;
  const cantidad = Math.round(coeficiente) < coeficiente ? Math.round(coeficiente) +1 : coeficiente;
  return cantidad;
}
export const getStaticPaths = async () => {
    const files = fs.readdirSync('numeros');
    const cant_paginas = getNumberPages(files.length , max_num_archivo);
    const paths = [...Array(cant_paginas).keys()].map(e => ({params:{slug:String(e + 1)}}));
    return {
      paths,
      fallback:false
  }
}

export const getStaticProps = async ( { params: {slug} } ) => {
  const files = fs.readdirSync('numeros')
  const files_innum = files.map(f => parseInt(f.replace('.json',''))).sort((a,b)=>a-b);
  //sort no es una solución demasiado escalable, pero dado que aún no se reeditaron todos los números
  //es quizás la manera más conveniente de trabajar por ahora siendo pocos datos
  const coeficiente = max_num_archivo *( slug - 1); //Coeficiente para después calcular los números segun la página
  const arr_archivo = files_innum.slice(coeficiente, coeficiente + max_num_archivo)
  const contents = arr_archivo.map(filename => (fs.readFileSync(path.join('numeros', filename + ".json")).toString()));
  const cant_paginas = getNumberPages(files.length , max_num_archivo);
  return { props: {
                  contents,
                  slug,
                  cant_paginas
               }
   };
}

export default Archivo;