import React from "react";
import Apartado from "./apartado_footer.js"

const Footer = () => {
    const apartadoInit = (id,titulo,elementos) =>{
        return {
                id,
                titulo,
                elementos
                }
            }
    const nws = apartadoInit("newsletter",
                            "Newsletter",
                            <>
                            <p>Suscribite a nuestro Newsletter para recibir los últimos 
                                números de Letraceluloide en tu correo.</p>
                            <button type="button" id="news-button" >Suscribite</button>
                            </>)

    const escr = apartadoInit("contacto",
                                "Escribí",
                                <>
                                <div>
                                    <img src={"/img/escribi.png"}></img>
                                    <p>Si te interesa publicar en Letraceluloide, envianos un correo a letraceluloide.referato@gmail.com</p>
                                </div>
                                </>
                                )
    const abt = apartadoInit(  "about",
                                null,
                                <>
                                <p>Director General: Víctor Conenna.</p>
                                <p>Editor en jefe: Franco Denápole.</p>
                                <p>Corrector: Ignacio Girala.</p>
                                <p>Diseño web: Ignacio Casaburi</p>
                                <p>Desde Noviembre de 2007.</p>
                                <p>Publicación bimestral de acceso libre y gratuito.</p>
                                <p>ISSN Nº 1851-4855</p>
                                </>                                )
    const lic = apartadoInit( "licencia",
                                "Revista Letraceluloide",
                                <>
                                <p>(CC) Ésta obra está bajo la licencia Creative Commons. 
                                    <b> Atribución - No comercial - Compartir Igual 
                                        (by-nc-sa)</b>
                                </p>
                                <div className="separador-footer"></div>
                                <p>https://www.letraceluloide.com.ar</p>
                                </>
                                                                  )
    return <div style={{display:"flex"}}>
            <footer id="footer">
                <Apartado contents={lic} />          
                <Apartado contents={escr} />
                <Apartado contents={abt} />
                <Apartado contents={nws} />
            </footer>
            </div> 
}
export default Footer;