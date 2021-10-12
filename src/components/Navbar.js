import "../estilos/Navbar.css"
import LoginUser from "./LoginUser"
import logo from "../img/Logo-Salut-IDI.jpg"

function Navbar(){

    return(
        <div >
            <img src={logo}/>
            <LoginUser />
        </div>
    );
}

export default Navbar