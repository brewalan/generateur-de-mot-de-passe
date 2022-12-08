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
    let max = this.props.max - this.props.min + 1;
    let arrValues = Array.from({length: max}, (_, i) => i + this.props.min);
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
            for={this.props.id}
            htmlFor={this.props.id}>
            {this.props.textValue}
          </label>
        </div>
      </React.Fragment>
    );
  }
}

export default ParamNb;