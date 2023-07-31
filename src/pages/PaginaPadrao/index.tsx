import { Outlet } from "react-router-dom";
import Menu from "~/components/Menu"
import Rodape from "~/components/Rodape"

const PaginaPadrao = ()=> {
    return(
    <main>
        <Menu/>
            
            <Outlet/>
            
        <Rodape/>
    </main>
    )
}

export default PaginaPadrao;