import React from 'react';
import { switchBox,slider,checkLbl } from './paramMdp.module.scss'
 

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

  /* display input checkbox */
  render() {
    return (
      <React.Fragment>
        <div>



          <label className={switchBox} 
            htmlFor={this.props.id}>
            <input type="checkbox" 
              id={this.props.id} 
              name={this.props.id} 
              checked={this.props.checked}
              onChange={this.handleChange} />  
            <span className={slider}></span>                      
          </label>
          <span className={checkLbl}>
            <p>{this.props.textValue}</p>
          </span>
        </div>
      </React.Fragment>
    );
  }
}

export default ParamMdp;