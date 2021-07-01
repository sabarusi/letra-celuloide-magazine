import React from 'react';
import Link from "next/link";

function Imagen_numero({children, num, img, hover, size}) {
    //const pathImg = "url(" + "/" + num + ".png)";
    const pathImg = "url(https://drive.google.com/uc?export=view&id="+ img + ")";
    const imagen =  {
        backgroundImage: pathImg
    };
    const mySize = ((size ?? "").length > 0) ? " " + size : "";
    const myClass = hover ? "imagen-numero" + mySize + " hover" : "imagen-numero" + mySize;
    //onClick={()=> router.push("/numero/" + num )}
    const content =  (<div className={myClass} style={imagen} >
                        {children}
                    </div>);
    return (hover === false)? <>{content} </>
                          : <Link href={`/numero/${encodeURIComponent(num)}`}><a>{content}</a></Link>
}
export default Imagen_numero;