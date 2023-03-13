import './App.css'
import { RouterProvider } from 'react-router-dom'
import { AllRoutes } from './Routes'
import Loading from './components/loading/loading'

function App() {
  return (
    <>
      <Loading />
      <RouterProvider router={AllRoutes} />
    </>
  )
}

export default App
