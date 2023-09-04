import {BrowserRouter,Navigate,Route, Routes} from 'react-router-dom'
import App from '../App'
function BaseRouter(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}>

                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default BaseRouter