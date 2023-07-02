import "./404Style.css"
import * as React from "react";
import { Navigate,Link  } from "react-router-dom";

const RedirectHome=()=>{
    <Navigate to="/home" />
    console.log("redirected")
}
const PageNotFound =()=>{
    
    return(
        <div id="errorPage">
        <h1>Erreur 404  </h1>
        <p class="zoom-area"><b>Désolé</b>, la page que vous recherchez est introuvable. Veuillez vérifier l'URL ou revenir à la page d'accueil. </p>
        <section className="error-container">
          <span className="four"><span class="screen-reader-text">4</span></span>
          <span className="zero"><span class="screen-reader-text">0</span></span>
          <span className="four"><span class="screen-reader-text">4</span></span>
        </section>
        <div class="link-container">
          <Link  to="/home" id="buttonErr" target="_blank" class="more-link" >Visitez la page d'accueil</Link>
        </div>
        </div>
    )
}
export default PageNotFound;