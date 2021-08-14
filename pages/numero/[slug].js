import React from "react";
import Head from 'next/head';
import fs from "fs";
import path from 'path';
import InfoNumero from '../../components/numero/infonumero';

const Numero = ({contents}) => {
    let parsedInfo = JSON.parse(contents);
    return <div>
           <Head>
            <title>Letra Celuloide - Número {parsedInfo.numero}</title>
            <meta name="description" content="Revista de cine y literatura" />
            <link rel="icon" href="/favlogo.ico" />
            <link rel="stylesheet" href="/styles/main.css" />
            <link rel="stylesheet" href="/styles/Numero.module.css" />
            <script src="/newsform.js" ></script>        
           </Head>
            <div>
            <InfoNumero contents={contents} />
            </div>
            </div>
}

export const getStaticPaths = async () => {
    const files = fs.readdirSync('numeros')
    const paths = files.map(filename => ({
        params:{
            slug:filename.replace('.json', '')
        }
    }));
    
    return {
        paths,
        fallback:false
    }
}
export const getStaticProps = async ({ params : {slug} }) => {
    const contents = fs.readFileSync(path.join('numeros', slug + '.json')).toString();
    return { props: {
                    contents
                 }
     };
}

export default Numero;
