import React, { PureComponent } from 'react';

import { Button } from 'react-native-ui-lib';
import styles from './styles';

type Props = RNUI;

export default class Component extends PureComponent<Props> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static height: any = {
    xsmall: 55,
    small: 55,
    medium: 55,
    large: 55,
  };

  render() {
    const {
      enableShadow = true,
      size = 'large',
      link,
      underline = false,
      labelStyle = {},
      customStyle = {},
      borderRadius = 10,
    } = this.props;
    const label = {
      ...labelStyle,
      textDecorationLine: underline ? 'underline' : 'none',
    };
    return (
      <Button
        {...this.props}
        borderRadius={borderRadius}
        labelStyle={label}
        style={[
          enableShadow && !link && styles.enableShadow,
          enableShadow && !link && styles.enableShadow,
          !link && { height: Component.height[String(size).toLowerCase()] },
          customStyle,
        ]}
      />
    );
  }
}
