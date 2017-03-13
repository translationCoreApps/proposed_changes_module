
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
    let value = e.target.value;
    this.setState({newWord: value});
  }

  handleSaveInput(){
    let currentCheck = this.props.currentCheck;
    let value = this.state.newWord;
    currentCheck.proposedChanges = value;
    this.props.updateCurrentCheck(currentCheck);
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
    this.props.currentCheck[field] = changeEvent.target.checked;
    this.props.updateCurrentCheck(this.props.currentCheck, field);
  }

  render() {
    return (
      <View
        currentCheck={this.props.currentCheck}
        newWord={this.state.newWord}
        handleInputChange={this.handleInputChange.bind(this)}
        handleSaveInput={this.handleSaveInput.bind(this)}
        handleCheckBoxChange={this.handleCheckBoxChange.bind(this)}
      />
    );
  }
}

module.exports = {
  container: ProposedChanges,
  name: NAMESPACE
};
