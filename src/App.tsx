import Home from 'containers/Home';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/median-react-demo" element={<Home />} />
        <Route path="*" element={<Navigate to="/median-react-demo" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
