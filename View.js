
const api = window.ModuleApi;
const React = api.React;
const RB = api.ReactBootstrap;
const {FormControl, Row, Col} = RB;

const NAMESPACE = 'ProposedChanges';

class View extends React.Component {

  render() {
    return (
      <div style={{color: "#FFFFFF", width:"280px", padding: "10px",
      marginTop: "2.5px", marginBottom: "2.5px", display: "inline-block",
      backgroundColor: "#333333", height: "345px"}}>
        <label style={{color: "#FFFFFF", marginBottom: "5px"}}>
          Propose Changes
        </label>
        <textarea
            placeholder="Type your proposed phrase"
            value={this.props.newWord || ''}
            style={{color: "#000", width: "100%", height: "100px", marginBottom: "10px", marginTop: "0px", fontSize: "16px", borderRadius: "0px" }}
            onChange={this.props.handleInputChange.bind(this)}
        /><br />
        <label style={{color: "#FFFFFF", marginBottom: "25px"}}>
          This change addresses:
        </label>
        <Row>
          <Col sm={12} md={6} lg={6} style={{color: "#FFFFFF"}}>
            <label style={{marginBottom: "20px"}}>
                <input type="checkbox" value="Spelling"
                      checked={this.props.spelling}
                      onChange={this.props.handleCheckBoxChange.bind(this, 'spelling')}
                /> Spelling
            </label>
          </Col>
          <Col sm={12} md={6} lg={6} style={{color: "#FFFFFF"}}>
            <label style={{marginBottom: "20px"}}>
              <input type="checkbox" value="Meaning"
                    checked={this.props.meaning}
                    onChange={this.props.handleCheckBoxChange.bind(this, 'meaning')}
              /> Meaning
            </label>
          </Col>
          <Col sm={12} md={6} lg={6} style={{color: "#FFFFFF"}}>
            <label style={{marginBottom: "20px"}}>
              <input type="checkbox" value="Punctuation"
                    checked={this.props.punctuation}
                    onChange={this.props.handleCheckBoxChange.bind(this, 'punctuation')}
              /> Punctuation
              </label>
          </Col>
          <Col sm={12} md={6} lg={6} style={{color: "#FFFFFF"}}>
            <label style={{marginBottom: "20px"}}>
              <input type="checkbox" value="WordChoice"
                    checked={this.props.wordChoice}
                    onChange={this.props.handleCheckBoxChange.bind(this, 'wordChoice')}
              /> Word Choice
            </label>
          </Col>
          <Col sm={12} md={6} lg={6} style={{color: "#FFFFFF"}}>
            <label style={{marginBottom: "20px"}}>
              <input type="checkbox" value="Grammar"
                    checked={this.props.grammar}
                    onChange={this.props.handleCheckBoxChange.bind(this, 'grammar')}
              /> Grammar
            </label>
          </Col>
          <Col sm={12} md={6} lg={6} style={{color: "#FFFFFF"}}>
            <label style={{marginBottom: "20px"}}>
              <input type="checkbox" value="Other"
                    checked={this.props.other}
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
