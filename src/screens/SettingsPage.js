import React from 'react';
import { Text, View, Button, Picker, } from 'react-native';
import { connect } from 'react-redux';
import { globalStyles } from '../styles/globalStyles';
import { SetTheme } from '../redux/actions/setThemeAction';

const getStyles = (item, theme) => {
  return {
    ...globalStyles[item],
    ...globalStyles[theme],
  }
};

class MainPage extends React.Component {
  render() {
    return (
      <View style={getStyles('container', this.props.theme)}>
        <View style={globalStyles.container}>
          <Text style={getStyles('text', this.props.theme)}>Select your theme!</Text>
          <Picker
            selectedValue={this.props.theme}
            style={{ height: 50, width: 100 }}
            style={getStyles('picker', this.props.theme)}
            itemStyle={getStyles('pickerItem', this.props.theme)}
            onValueChange={(itemValue, itemIndex) => this.props.setTheme({ theme: itemValue })}>
            <Picker.Item label="Light" value="light" />
            <Picker.Item label="Dark" value="dark" />
          </Picker>
        </View>
        <View style={globalStyles.container}>
          <Button title="Logout" onPress={() => this.props.navigation.navigate('Login')}>
          </Button>
        </View>
      </View>
    );
  }
};

const mapStateToProps = ({context}) => ({ theme: context.theme });

const mapDispatchToProps = (dispatch) => ({
  setTheme: (theme) => dispatch(SetTheme(theme))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);