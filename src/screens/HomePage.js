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

class HomePage extends React.Component {
  render() {
    return (
      <View style={getStyles('container', this.props.theme)}>
        <Text style={getStyles('text', this.props.theme)}>Hellow World!</Text>
      </View>
    );
  }
};

const mapStateToProps = ({context}) => ({ theme: context.theme });

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);