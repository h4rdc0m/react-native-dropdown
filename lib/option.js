const React = require('react-native');

const {
  StyleSheet,
  Component,
  View,
  Text
} = React;

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
});

class Option extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { style, styleText } = this.props;

    return (
      <View style={[ styles.container, style , {backgroundColor: "#FFFFFF"}]}>
        <Text style={[ styleText, {color: "#A1A1A1", backgroundColor: "#FFFFFF"}]}>{this.props.children}</Text>
      </View>
    );
  }
}

Option.propTypes = {
  children: React.PropTypes.string.isRequired
};

module.exports = Option;
