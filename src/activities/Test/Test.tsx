import { Button, Text, View } from '@ui';

import React from 'react';

type Props = {
  count: number;
  changeCount: (count: number) => void;
};

class Test extends React.PureComponent<Props, {}> {
  static navigationOptions = () => {
    return {
      title: 'algo',
      headerTitleStyle: { color: 'red' },
    };
  };

  incrementCount = () => {
    const { changeCount } = this.props;
    let { count } = this.props;
    count++;
    changeCount(count);
  };

  decrementCount = () => {
    const { changeCount } = this.props;
    let { count } = this.props;
    count--;
    changeCount(count);
  };

  public render() {
    const { count } = this.props;
    return (
      <View flex center>
        <Button label="Increment" onPress={this.incrementCount} />
        <Text>{count}</Text>
        <Button label="Decrement" onPress={this.decrementCount} />
      </View>
    );
  }
}

export default Test;
