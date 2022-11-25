import React from 'react';
import { selectNb,selectLbl } from "./paramNb.module.scss";
 

class ParamNb extends React.Component {

  /* connect le générateur de mot de passe sur le composant React */
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  /* Changement dans la génération du mot de passe */
  handleChange(event) {    
    let selected = event.target.value;
    this.props.onChange(selected);
  }

  /* display select number */
  render() {
    let arrValues = Array.from({length: this.props.max}, (_, i) => i + 1);
    return (
      <React.Fragment>
        <div>
            <select 
                className={selectNb}
                name={this.props.id} 
                id={this.props.id}
                value={this.props.selected}
                onChange={this.handleChange}>
                {arrValues.map(val => {
                    return <option key={this.props.id+val} value={val}>{val}</option>
                })}
            </select>
          <label 
            className={selectLbl}
            forhtml={this.props.id}>
            {this.props.textValue}
          </label>
        </div>
      </React.Fragment>
    );
  }
}

export default ParamNb;