
const api = window.ModuleApi;
const React = api.React;
const RB = api.ReactBootstrap;
const {Glyphicon, FormControl, Row, Col} = RB;
const View = require('./View.js');

const NAMESPACE = 'ProposedChanges';

class ProposedChanges extends React.Component {
  constructor() {
    super();
    this.state = {
      newWord: ""
    }
  }

  componentWillReceiveProps(nextProps){
   this.setState({
     newWord: nextProps.currentCheck.proposedChanges,
     spelling:nextProps.currentCheck.spelling,
     wordChoice:nextProps.currentCheck.wordChoice,
     punctuation:nextProps.currentCheck.punctuation,
     meaning:nextProps.currentCheck.meaning,
     grammar:nextProps.currentCheck.grammar,
     other:nextProps.currentCheck.other
   });
 }
  handleInputChange(e) {
    let currentCheck = this.props.currentCheck;
    let value = e.target.value;
    this.setState({newWord: value});
    this.props.proposedChangesStore['newWord'] = value;
    currentCheck.proposedChanges = value;
  }

  updateCheckBoxesStatus(){
    let currentCheck = this.props.currentCheck;
    if (currentCheck) {
      var savedState = {};
      savedState['spelling'] = currentCheck.spelling;
      savedState['wordChoice'] = currentCheck.wordChoice;
      savedState['punctuation'] = currentCheck.punctuation;
      savedState['meaning'] = currentCheck.meaning;
      savedState['grammar'] = currentCheck.grammar;
      savedState['other'] = currentCheck.other;
    }
  }

  handleCheckBoxChange(field, changeEvent){
    var nextState = {};
    nextState[field] = changeEvent.target.checked;
    this.setState(nextState);
    // saving in checkstore using currentCheck sent by tool as a prop
    let currentCheck = this.props.currentCheck;
    currentCheck[field] = changeEvent.target.checked;
  }

  render() {
    return (
      <View
        newWord={this.state.newWord}
        handleInputChange={this.handleInputChange.bind(this)}
        handleCheckBoxChange={this.handleCheckBoxChange.bind(this)}
        spelling={this.state.spelling}
        wordChoice={this.state.wordChoice}
        punctuation={this.state.punctuation}
        meaning={this.state.meaning}
        grammar={this.state.grammar}
        other={this.state.other}
      />
    );
  }
}

module.exports = {
  container: ProposedChanges,
  name: NAMESPACE
};