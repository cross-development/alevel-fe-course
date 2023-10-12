// Packages
import { FC, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
// Components
import layouts from './components/layouts';
// Configs
import routerConfig from './configs/router';
// Types
import { ReactPageEnhanced } from './types/app';

const App: FC = () => {
  const withLayout = useCallback((component: ReactPageEnhanced) => {
    const layoutType = component?.layout?.type;

    const getLayout = layoutType
      ? layouts[layoutType]
      : (Component: ReactPageEnhanced): JSX.Element => <Component />;

    return getLayout(component);
  }, []);

  return (
    <Routes>
      {routerConfig.routes.map(({ key, path, component }) => (
        <Route
          key={key}
          path={path}
          element={withLayout(component)}
        />
      ))}
    </Routes>
  );
};

App.displayName = 'App';

export default App;
