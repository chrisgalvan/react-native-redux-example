import React from 'react';
import { Text, View, Button, Picker, } from 'react-native';
import { connect } from 'react-redux';
import { globalStyles } from './MainPage.styles';
import { SetTheme } from '../redux/actions/setThemeAction';

const getStyles = (item, theme) => {
  return {
    ...globalStyles[item],
    ...globalStyles[theme],
  }
}

class MainPage extends React.Component {
  render() {
    console.log(this.props);
    return (
      <View style={getStyles('container', this.props.theme)}>
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
    );
  }
}

const mapStateToProps = ({context}) => (console.log({context}) || { theme: context.theme });

const mapDispatchToProps = (dispatch) => ({
  setTheme: (theme) => dispatch(SetTheme(theme))
})

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);