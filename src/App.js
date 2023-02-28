import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Nav from './components/Nav';
import Quote from './components/Quote';
import Home from './components/Home';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route element={<Nav />}>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
