import Button from "../../components/Button/Button"
import "./landing.modules.css"


const Landing = () => {
    return (
        <div className="container-landing">
            <div className="land">
            <h1>
                Bienvenido a la aplicación pokemon, aquí puedes elegir tus pokemons favoritos, haz clic en
				el de botón abajo para comenzar a coleccionarlos.
            </h1>
                <br/>
            </div>
            <Button
                className="home-btn"
                path={"/home"}
                text="Home"
            />
            <img src = "../../../images/LandingPage/pokemons-together.png" className="imagen" />
            <p className="info-text">
				Puedes escoger entre{" "}
				<a href="https://pokeapi.co/api/v2/pokemon" target="_blank" className="link-api">
					1302 pokemons
				</a>
		    </p>
        </div>
    )
}

export default Landing