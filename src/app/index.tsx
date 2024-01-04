import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IndexPage from './page';
import Provider from './provider';

const App = () => {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<IndexPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
