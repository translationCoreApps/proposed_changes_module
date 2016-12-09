
const api = window.ModuleApi;
const React = api.React;
const RB = api.ReactBootstrap;
const {Glyphicon, FormControl, Row, Col} = RB;

const NAMESPACE = 'ProposedChanges';

class ProposedChanges extends React.Component {
  constructor() {
    super();
    this.state = {
      newWord: "",
      currentWord: "",
      spelling: false,
      wordChoice: false,
      punctuation: false,
      meaning: false,
      grammar: false,
      other: false,
    };
    this.updateCheckBoxesStatus = this.updateCheckBoxesStatus.bind(this);
  }

  componentWillMount() {
    this.updateCheckBoxesStatus();
    api.registerEventListener('goToNext', this.updateCheckBoxesStatus);
    api.registerEventListener('goToPrevious', this.updateCheckBoxesStatus);
    api.registerEventListener('goToCheck', this.updateCheckBoxesStatus);
  }

  componentWillUnmount() {
    api.removeEventListener('goToNext', this.updateCheckBoxesStatus);
    api.removeEventListener('goToPrevious', this.updateCheckBoxesStatus);
    api.removeEventListener('goToCheck', this.updateCheckBoxesStatus);
  }

  handleInputChange(e) {
    let currentCheck = this.props.getCurrentCheck();
    this.value = e.target.value;
    this.setState({newWord: this.value});
    api.getDataFromCheckStore(NAMESPACE)['newWord'] = this.value;
    currentCheck.proposedChanges = this.value;
  }

  updateCheckBoxesStatus(){
    let currentCheck = this.props.getCurrentCheck();
    if (currentCheck) {
      var savedState = {};
      savedState['spelling'] = currentCheck.spelling;
      savedState['wordChoice'] = currentCheck.wordChoice;
      savedState['punctuation'] = currentCheck.punctuation;
      savedState['meaning'] = currentCheck.meaning;
      savedState['grammar'] = currentCheck.grammar;
      savedState['other'] = currentCheck.other;
      this.setState(savedState);
    }
    this.getSavedProposedPhrase(currentCheck);
  }

  getSavedProposedPhrase(currentCheck){
    let newWord = currentCheck.proposedChanges;
    this.setState({newWord: newWord});
  }

  handleCheckBoxChange(field, changeEvent){
    var nextState = {};
    nextState[field] = changeEvent.target.checked;
    this.setState(nextState);
    // saving in checkstore using getCurrentCheck() sent by tool as a prop
    let currentCheck = this.props.getCurrentCheck();
    currentCheck[field] = changeEvent.target.checked;
  }

  render() {
    return (
      <div style={{color: "#FFFFFF", width:"100%", padding: "10px", marginTop: "2.5px", marginBottom: "2.5px", display: "inline-block", backgroundColor: "#333333"}}>
        <FormControl
            type="text"
            placeholder="Type your proposed phrase"
            value={this.state.newWord || ''}
            style={{marginBottom: "0px", marginTop: "0px", fontSize: "16px", borderRadius: "0px" }}
            onChange={this.handleInputChange.bind(this)}
        /><br />
        <label style={{color: "#FFFFFF"}}>This change addresses:</label>
        <Row>
          <Col sm={12} lg={4} style={{color: "#FFFFFF"}}>
            <label>
                <input type="checkbox" value="Spelling"
                      checked={this.state.spelling}
                      onChange={this.handleCheckBoxChange.bind(this, 'spelling')}
                /> Spelling
            </label><br />
            <label>
                <input type="checkbox" value="WordChoice"
                      checked={this.state.wordChoice}
                      onChange={this.handleCheckBoxChange.bind(this, 'wordChoice')}
                /> Word Choice
            </label><br />
          </Col>
          <Col sm={12} lg={4} style={{color: "#FFFFFF"}}>
          <label>
              <input type="checkbox" value="Punctuation"
                    checked={this.state.punctuation}
                    onChange={this.handleCheckBoxChange.bind(this, 'punctuation')}
              /> Punctuation
          </label><br />
          <label>
              <input type="checkbox" value="Meaning"
                    checked={this.state.meaning}
                    onChange={this.handleCheckBoxChange.bind(this, 'meaning')}
              /> Meaning
          </label><br />
          </Col>
          <Col sm={12} lg={4} style={{color: "#FFFFFF"}}>
          <label>
              <input type="checkbox" value="Grammar"
                    checked={this.state.grammar}
                    onChange={this.handleCheckBoxChange.bind(this, 'grammar')}
              /> Grammar
          </label><br />
          <label>
              <input type="checkbox" value="Other"
                    checked={this.state.other}
                    onChange={this.handleCheckBoxChange.bind(this, 'other')}
              /> Other
          </label><br />
          </Col>
        </Row>
      </div>
    );
  }
}

module.exports = {view: ProposedChanges, name: NAMESPACE};
