import BackgroundLocation from 'containers/BackgroundLocation';
import Home from 'containers/Home';
import OneSignal from 'containers/OneSignal';
import React, { useMemo, useState } from 'react';

const Main: React.FC = () => {
  const [section, setSection] = useState('');

  const sections: Record<string, React.ReactNode> = useMemo(
    () => ({
      'background-location': <BackgroundLocation />,
      onesignal: <OneSignal />,
    }),
    [],
  );

  return <>{sections[section] || <Home onChangeSection={setSection} />}</>;
};

export default Main;
