
const api = window.ModuleApi;
const React = api.React;
const RB = api.ReactBootstrap;
const {FormControl, Row, Col} = RB;
const style = require('./css/style');

const NAMESPACE = 'ProposedChanges';

class View extends React.Component {

  render() {
    let { spelling, meaning, punctuation, wordChoice, grammar, other } = this.props.currentCheck;
    return (
      <div style={style.content}>
        <label style={style.label}>
          Propose Changes
        </label>
        <textarea
            placeholder="Type your proposed phrase"
            value={this.props.newWord || ''}
            style={style.textBox}
            onChange={this.props.handleInputChange.bind(this)}
            onBlur={this.props.handleSaveInput.bind(this)}
        /><br />
        <label style={style.label2}>
          This change addresses:
        </label>
        <Row>
          <Col sm={12} md={6} lg={4} style={{color: "#FFFFFF"}}>
            <label style={{marginBottom: "10px"}}>
                <input type="checkbox"
                      checked={spelling}
                      onChange={this.props.handleCheckBoxChange.bind(this, 'spelling')}
                /> Spelling
            </label>
          </Col>
          <Col sm={12} md={6} lg={4} style={{color: "#FFFFFF"}}>
            <label style={{marginBottom: "10px"}}>
              <input type="checkbox"
                    checked={meaning}
                    onChange={this.props.handleCheckBoxChange.bind(this, 'meaning')}
              /> Meaning
            </label>
          </Col>
          <Col sm={12} md={6} lg={4} style={{color: "#FFFFFF"}}>
            <label style={{marginBottom: "10px"}}>
              <input type="checkbox"
                    checked={punctuation}
                    onChange={this.props.handleCheckBoxChange.bind(this, 'punctuation')}
              /> Punctuation
              </label>
          </Col>
          <Col sm={12} md={6} lg={4} style={{color: "#FFFFFF"}}>
            <label style={{marginBottom: "10px"}}>
              <input type="checkbox"
                    checked={wordChoice}
                    onChange={this.props.handleCheckBoxChange.bind(this, 'wordChoice')}
              /> Word Choice
            </label>
          </Col>
          <Col sm={12} md={6} lg={4} style={{color: "#FFFFFF"}}>
            <label style={{marginBottom: "10px"}}>
              <input type="checkbox"
                    checked={grammar}
                    onChange={this.props.handleCheckBoxChange.bind(this, 'grammar')}
              /> Grammar
            </label>
          </Col>
          <Col sm={12} md={6} lg={4} style={{color: "#FFFFFF"}}>
            <label style={{marginBottom: "10px"}}>
              <input type="checkbox"
                    checked={other}
                    onChange={this.props.handleCheckBoxChange.bind(this, 'other')}
              /> Other
            </label>
          </Col>
        </Row>
      </div>
    );
  }
}

module.exports = View;
