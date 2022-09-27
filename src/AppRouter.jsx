import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { CreatePage } from './pages/CreatePage'
import { HomePage } from './pages/HomePage'

export const AppRouter =() => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/create' element={<CreatePage/>}/>
                </Routes>
            </Router>
        </>
    )
}