import Home from 'containers/Home';
import NpmSpecificFunctions from 'containers/NpmSpecificFunctions';
import OneSignal from 'containers/OneSignal';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route
          path="npm-specific-functions/*"
          element={<NpmSpecificFunctions />}
        />
        <Route path="onesignal/*" element={<OneSignal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
