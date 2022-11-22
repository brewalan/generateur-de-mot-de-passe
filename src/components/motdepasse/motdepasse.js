import React from 'react';
//import './NuageVerbeReact.css'
//import { conjText } from '../../features/ConjIcon';

 

class MotDePasse extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onVerbeChange(e.target.value);
  }

  /* display nuage tag */
  render() {
   /* const listVerbeNuage = this.props.nuageValue.map((element) => {
      const btnClass = 'btn-nuage '+element.taille;
      return (
        <span key={element.verbe}>
          <button         
            className={btnClass} 
            value={element.verbe}
            onClick={this.handleClick}>
              {element.verbe}
          </button>{element.separateur}
        </span>   
      )}
    );*/

    return (
      <React.Fragment>
        <div className="text-center pb-2">
          <p>Mot de passe</p>
        </div>
      </React.Fragment>
    );
  }
}



export default MotDePasse;