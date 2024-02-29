import AppResumedEvent from 'containers/AppResumedEvent';
import Haptics from 'containers/Haptics';
import Home from 'containers/Home';
import NpmSpecificFunctions from 'containers/NpmSpecificFunctions';
import OneSignal from 'containers/OneSignal';
import ShareIntoApp from 'containers/ShareIntoApp';
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
        <Route path="app-resumed-event/*" element={<AppResumedEvent />} />

        <Route path="haptics/*" element={<Haptics />} />
        <Route path="onesignal/*" element={<OneSignal />} />
        <Route path="share-into-app/*" element={<ShareIntoApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
