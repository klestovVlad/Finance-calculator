import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from 'src/store';

import {MainNavigator} from 'src/processes/main-navigator/ui/main-navigator';
import {UIProvider} from 'src/app/providers/ui-provider/ui-provider';
import {ToastProvider} from 'src/app/providers/toast-provider/toast-provider';
import 'react-native-get-random-values';

function App(): React.JSX.Element {
  // persistor.purge();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <UIProvider>
          <ToastProvider>
            <MainNavigator />
          </ToastProvider>
        </UIProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
