import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Movie from './routes/Movie';
import Movies from './routes/Movies';

function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Movies></Movies>} />
        <Route path='/Movie' element={<Movie></Movie>} />
      </Routes>
    </BrowserRouter>
  </>);
}

export default App;
