import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import MainRoute from './views/MainRoute';
import { Player } from './components/Player';

import 'remixicon/fonts/remixicon.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={false}>
        <MainRoute />
        <Player />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
