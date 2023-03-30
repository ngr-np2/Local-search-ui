import './App.css'
import { RouterProvider } from 'react-router-dom'
import { AllRoutes } from './Routes'
import LoadingCircle from './components/loading/loadingCircle'

function App() {
  return (
    <>
      <LoadingCircle />
      <RouterProvider router={AllRoutes} />
    </>
  )
}

export default App
