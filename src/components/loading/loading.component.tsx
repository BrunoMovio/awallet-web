import * as React from 'react';

import { ActivityIndicator } from '../activity-indicator';

import { LoadingCenteredStyled } from './loading.component.style';

export const LoadingCentered = () => (
  <LoadingCenteredStyled>
    <ActivityIndicator type="spinner" />
  </LoadingCenteredStyled>
);
