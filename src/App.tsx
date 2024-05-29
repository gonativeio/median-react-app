import Main from 'containers/Main';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="home" />} />
        <Route path="*" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
