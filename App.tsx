import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from 'src/store';

import {MainNavigator} from 'src/processes/main-navigator/ui/main-navigator';
import {UIProvider} from 'src/app/providers/ui-provider/ui-provider';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <UIProvider>
          <MainNavigator />
        </UIProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
