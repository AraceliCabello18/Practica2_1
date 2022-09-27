import { AppRouter } from './AppRouter'
import { MainLayout } from './layouts/MainLayout'
import './sass/app.scss'

export const App = () => {
  return ( 
    <>
      <MainLayout contenido={<AppRouter/>}/>
      
    </>
  )
}