import * as React from 'react';
import {AppRoutes} from 'shared/navigation/routes';

export const navigationRef = React.createRef<any>();

export function navigate(name: AppRoutes, params: any) {
  navigationRef.current?.navigate(name, params);
}
