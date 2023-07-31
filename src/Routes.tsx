import {RecoilRoot} from 'recoil'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Inicio from './pages/Inicio'
import PaginaPadrao from './pages/PaginaPadrao'
import Sobre from './pages/Sobre'
import Habilidades from './pages/Habilidades'
function Router() {

  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<PaginaPadrao/>}>
              <Route path="/" element={<Inicio/>}/>
              <Route path="sobre" element={<Sobre/>}/>
              <Route path="habilidades" element={<Habilidades/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default Router
