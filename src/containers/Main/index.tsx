import BackgroundLocation from 'containers/BackgroundLocation';
import Home from 'containers/Home';
import React, { useMemo, useState } from 'react';

const Main: React.FC = () => {
  const [section, setSection] = useState('');

  const sections: Record<string, React.ReactNode> = useMemo(
    () => ({
      'background-location': <BackgroundLocation />,
    }),
    [],
  );

  return <>{sections[section] || <Home onChangeSection={setSection} />}</>;
};

export default Main;
