
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
  }

  componentWillMount() {
    if (this.props.val) {
      this.setState({newWord: this.props.val});
      api.getDataFromCheckStore(NAMESPACE)['newWord'] = this.props.val;
    }
  }

  handleChange(e) {
    this.value = e.target.value;
    this.setState({newWord: this.value});
    api.getDataFromCheckStore(NAMESPACE)['newWord'] = this.value;
    api.getDataFromCheckStore(NAMESPACE)['previousWord'] = this.props.selectedWord;
  }

  // these next two functions will be used through a ref
  getProposedChanges() {
    return api.getDataFromCheckStore(NAMESPACE, 'newWord');
  }

  setNewWord(newWord) {
    this.setState({newWord: newWord});
    api.getDataFromCheckStore(NAMESPACE)['newWord'] = newWord;
  }

  update(newCurrentWord) {
    var newWord = "";
    for (var i = 0; i < newCurrentWord.length; i++){
      var word = newCurrentWord[i];
      newWord += word;
      if (i < newCurrentWord.length - 1) {
        newWord += ', ';
      }
    }
    this.setState({currentWord: newWord});
  }

  handleChange(field, changeEvent){
    var nextState = {};
    nextState[field] = changeEvent.target.checked;
    this.setState(nextState);
    /* saving in checkstore using getCurrentCheck() sent by tool as a prop
    let currentCheck = this.props.getCurrentCheck();
    currentCheck[field] = changeEvent.target.checked;
    */
  }

  render() {
    var words = this.props.selectedWord;
    var wordArray = [];
    var wordKey = 0;
    if (words) {
      for (var i = 0; i < words.length; i++) {
        var word = words[i];
        wordArray.push(<span key={wordKey++}>{word}</span>);
        if (i < words.length - 1) {
          wordArray.push(<span key={wordKey++}>{', '}</span>);
        }
      }
    }/*
    var currentWordPhrase;
    if(this.state.currentWord == ""){
      currentWordPhrase = "Selected Word/Phrase";
    }else{
      currentWordPhrase = this.state.currentWord;
    }*/
    return (
      <div style={{color: "#FFFFFF", width:"100%", padding: "10px", marginTop: "2.5px", marginBottom: "2.5px", display: "inline-block", backgroundColor: "#333333"}}>
        <FormControl
            type="text"
            placeholder="Type your proposed phrase"
            value={this.state.newWord}
            style={{marginBottom: "0px", marginTop: "0px", fontSize: "16px", borderRadius: "0px" }}
            onChange={this.handleChange.bind(this)}
        /><br />
        <label style={{color: "#FFFFFF"}}>This change addresses:</label>
        <Row>
          <Col sm={12} lg={4} style={{color: "#FFFFFF"}}>
            <label>
                <input type="checkbox" value="Spelling"
                      checked={this.state.spelling}
                      onChange={this.handleChange.bind(this, 'spelling')}
                /> Spelling
            </label><br />
            <label>
                <input type="checkbox" value="WordChoice"
                      checked={this.state.wordChoice}
                      onChange={this.handleChange.bind(this, 'wordChoice')}
                /> Word Choice
            </label><br />
          </Col>
          <Col sm={12} lg={4} style={{color: "#FFFFFF"}}>
          <label>
              <input type="checkbox" value="Punctuation"
                    checked={this.state.punctuation}
                    onChange={this.handleChange.bind(this, 'punctuation')}
              /> Punctuation
          </label><br />
          <label>
              <input type="checkbox" value="Meaning"
                    checked={this.state.meaning}
                    onChange={this.handleChange.bind(this, 'meaning')}
              /> Meaning
          </label><br />
          </Col>
          <Col sm={12} lg={4} style={{color: "#FFFFFF"}}>
          <label>
              <input type="checkbox" value="Grammar"
                    checked={this.state.grammar}
                    onChange={this.handleChange.bind(this, 'grammar')}
              /> Grammar
          </label><br />
          <label>
              <input type="checkbox" value="Other"
                    checked={this.state.other}
                    onChange={this.handleChange.bind(this, 'other')}
              /> Other
          </label><br />
          </Col>
        </Row>
      </div>
    );
  }
}

module.exports = {view: ProposedChanges, name: NAMESPACE};
