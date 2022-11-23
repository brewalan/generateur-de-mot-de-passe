import React from 'react';
 

class ParamMdp extends React.Component {

  /* connect le générateur de mot de passe sur le composant React */
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  /* Changement dans la génération du mot de passe */
  handleChange() {    
    let check = !this.props.checked;
    this.props.onChange(check);
  }

  /* display nuage tag */
  render() {
    return (
      <React.Fragment>
        <div>
          <input type="checkbox" 
            id={this.props.id} 
            name={this.props.id} 
            checked={this.props.checked}
            onChange={this.handleChange} />
          <label forhtml={this.props.id}>
            {this.props.textValue}
          </label>
        </div>
      </React.Fragment>
    );
  }
}

export default ParamMdp;