import React from 'react'
import Imagen_numero from "./imagen_numero.js"

function NumeroThumb({info, size}) {
    const parsedInfo = JSON.parse(info)
    const formatoPeli = (art, peli) =>{
        return <>{art === ""? art : art + " - "} <em>{peli}</em></>
    }
    return (
        <div className="numero-grilla">
            <Imagen_numero num={parsedInfo.numero} img={parsedInfo.id_google.img} hover={true} size={size} >
            <div className={"text-numero"+ " " + size}>
                <span style={{paddingBottom:"10"}}><b>{"Número " + parsedInfo.numero + " - " + parsedInfo.fecha}</b></span>
                <span>
                    {parsedInfo.articulos.map(elem =>
                        (<>{formatoPeli(elem.articulo, elem.pelicula)} <strong>{elem.autor}</strong> / </>)
                        ).slice(0,4).concat("[...]")}
                </span>
            </div>
            </Imagen_numero>
        </div>
    )
}

export default NumeroThumb;