import React from 'react';
import { Text, View, Button, } from 'react-native';
import { globalStyles } from '../styles/globalStyles';


class LoginPage extends React.Component {
  render() {
    return (
      <View style={globalStyles.container}>
        <Button title="Login" onPress={() => this.props.navigation.navigate('App')}>
          <Text>Login</Text>
        </Button>
      </View>
    );
  }
};

export default LoginPage;