import Home from './components/Home';
import NotFound from './components/NotFound';
import { Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App