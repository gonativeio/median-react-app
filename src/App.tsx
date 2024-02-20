import BackgroundLocation from 'containers/BackgroundLocation';
import Home from 'containers/Home';
import { useMemo } from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';

function App() {
  const Router = useMemo(
    () => (process.env.REACT_APP_DEVELOPMENT ? BrowserRouter : HashRouter),
    [],
  );

  return (
    <Router>
      <Routes>
        <Route path="/background-location" element={<BackgroundLocation />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
