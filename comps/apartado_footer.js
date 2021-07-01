import React from "react";
const Apartado = ({contents}) => {
    const titulo = contents.titulo === null
    return (<div id={contents.id} className="apartados" >
                 <h1>{contents.titulo}</h1>
                 {!titulo ? <div className="separador-footer bajotitulo"></div>: null}
                 {contents.elementos}        
            </div>);
}

export default Apartado;