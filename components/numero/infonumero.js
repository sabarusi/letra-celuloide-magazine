import React , {useState} from "react";
import Modal from "react-modal";
import Imagen_numero from "./imagen_numero.js";

Modal.setAppElement('#__next');

const InfoNumero = ({contents}) =>{
 //hooks
  const [valueModal, setValueModal] = useState(false);
  const handleModal = () =>{setValueModal(!valueModal)}
  const [loading, setLoading] = useState(null)
  const handleLoading = () =>{setLoading(!loading)}
 //parse data
  let parsedInfo = JSON.parse(contents);
 const formatoPeli = (art, peli,esp) =>{
                const nombre_art = (art === ""? art : '"'+ art + '"' + " - ")
                return <div>{nombre_art}<em>{peli || esp}</em></div>
  }
  //function to open download.
  const descargaPDF = () =>{
   return window.open(parsedInfo.dropbox_pdf + "?dl=1", '_blank');
  }
  const indices = parsedInfo.articulos.map(item => (
                  <div className="container-articulo">
                    <div className="container-texto pagina">{item.pagina}</div>
                    <div className="container-texto articulo">{formatoPeli(item.articulo,item.pelicula, item.especial)}<b>{item.autor}</b></div>
                  </div>
                ));

    return <>
            <div className="container-general">
              <div className="container-izquierda">
                <p>NÚMERO {parsedInfo.numero}</p>
                <div className="container-contenido">
                  <Imagen_numero num={parsedInfo.numero} hover={false} />
                  <div className="container-botones">
                      <button type="button" className="boton" onClick={descargaPDF}>Descargar</button>
                      <button type="button" className="boton" id="boton-modal" onClick={handleModal}>Ver online</button>
                  </div>
                </div>
              </div>
              <div className="container-derecha">
                <p>ARTÍCULOS</p>
                <div className="container-indice">
                {indices}
                </div>
              </div>
            </div>
            <Modal isOpen={valueModal} onRequestClose={() => {handleModal(); handleLoading();}}
             className="Modal " overlayClassName="OverlayModal">
              { !loading ? <div><p>Cargando...</p></div> : null} 
            <iframe style= { {display:loading ? "block" : "none"}} 
                            src={parsedInfo.dropbox_pdf + "?raw=1"}
                            width="640"
                            height="590"
                            onLoad={() => handleLoading()}></iframe>
            </Modal>
          </>
}

export default InfoNumero;