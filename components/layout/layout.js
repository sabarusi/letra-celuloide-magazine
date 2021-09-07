import React from "react";
import NavHeader from "./navHeader.js";
import Footer from "./footer.js";

const Layout = ({children}) =>{
return <body>
            <NavHeader />
                <main>
                    {children}
                </main>
            <Footer />
     </body>
}

export default Layout;