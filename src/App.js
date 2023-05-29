import Counter from './pages/Count';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import TodoApp from './pages/TodoApp';
import Game from './pages/TicTacToe';
import Layout from './routes/Layout';
import NoPage from './routes/NoPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="counter" element={<Counter />} />
              <Route path="contact" element={<Welcome />} />
              <Route path="todoApp" element ={<TodoApp />} />
              <Route path="tictactoe" element ={<Game />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
  );
}

export default App;
