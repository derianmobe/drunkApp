import React from 'react';
import { View, Text, Button } from 'react-native-ui-lib';

type Props = {
  count: number;
  changeCount: (count: number) => void;
};

class Test extends React.PureComponent<Props, {}> {
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
