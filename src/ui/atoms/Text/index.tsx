import React from 'react';
import { Text } from 'react-native-ui-lib';

type Props = RNUI;

// NOTE do not add custom props or themes will fail.
export default (props: Props) => <Text {...props} />;
