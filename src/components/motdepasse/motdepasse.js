import React from 'react';
import GenMotDePasse from '../../utils/genMotDePasse';
import ParamMdp from './paramMdp';
import ParamNb from './paramNb';
import DisplayPassword from './displayPassword';
import { appTexte } from '../../utils/appTexte';
 

const MAX_CHAR = 250;
const MAX_PASSWORD = 50;

class MotDePasse extends React.Component {

  mdp = new GenMotDePasse();

  /* connect le générateur de mot de passe sur le composant React */
  constructor(props) {
    super(props);
    this.state = {
      paramChiffre: this.mdp.paramChiffre,
      paramMinuscule: this.mdp.paramMinuscule,
      paramMajuscule: this.mdp.paramMajuscule,
      paramSpeciaux: this.mdp.paramSpeciaux,
      paramExclusion: this.mdp.paramExclusion,
      paramNbChar: this.mdp.paramNbChar,
      paramNbMotDePasse: this.mdp.paramNbMotDePasse,
      motDePasse: this.mdp.generateMotDePasse()
    };    
    this.handleClick = this.handleClick.bind(this);
    this.handleChiffreChange = this.handleChiffreChange.bind(this);
    this.handleMinusculeChange = this.handleMinusculeChange.bind(this);
    this.handleMajusculeChange = this.handleMajusculeChange.bind(this);
    this.handleSpeciauxChange = this.handleSpeciauxChange.bind(this);
    this.handleExclusionChange = this.handleExclusionChange.bind(this);
    this.handleNbChange = this.handleNbChange.bind(this);
    this.handleLengthChange = this.handleLengthChange.bind(this);
  }

  /* Changement dans la génération du mot de passe */
  handleChiffreChange(check) {
    this.setState({paramChiffre: check});
    this.mdp.paramChiffre=check;
    this.setState({motDePasse: this.mdp.generateMotDePasse()});
  }
  handleMinusculeChange(check) {
    this.setState({paramMinuscule: check});
    this.mdp.paramMinuscule=check;
    this.setState({motDePasse: this.mdp.generateMotDePasse()});
  }
  handleMajusculeChange(check) {
    this.setState({paramMajuscule: check});
    this.mdp.paramMajuscule=check;
    this.setState({motDePasse: this.mdp.generateMotDePasse()});
  }
  handleSpeciauxChange(check) {
    this.setState({paramSpeciaux: check});
    this.mdp.paramSpeciaux=check;
    this.setState({motDePasse: this.mdp.generateMotDePasse()});
  }
  handleExclusionChange(check) {
    this.setState({paramExclusion: check});
    this.mdp.paramExclusion=check;
    this.setState({motDePasse: this.mdp.generateMotDePasse()});
  }
  handleNbChange(nb) {
    this.setState({paramNbMotDePasse: nb});
    this.mdp.paramNbMdp=nb;
    this.setState({motDePasse: this.mdp.generateMotDePasse()});
  }
  handleLengthChange(nb) {
    this.setState({paramNbChar: nb});
    this.mdp.paramNbChar=nb;
    this.setState({motDePasse: this.mdp.generateMotDePasse()});
  }

  /* click sur la génération de mot de passe */
  handleClick() {
    this.mdp.paramChiffre=this.state.paramChiffre;
    this.mdp.paramMajuscule=this.state.paramMajuscule;
    this.mdp.paramMinuscule=this.state.paramMinuscule;
    this.mdp.paramSpeciaux=this.state.paramSpeciaux;
    this.mdp.paramExclusion=this.state.paramExclusion;
    this.setState({motDePasse: this.mdp.generateMotDePasse()});
  }

  render() {   
    return (
      <React.Fragment>
        <div className="text-center pb-2">

          <ParamMdp 
            id="btnChiffre" 
            onChange={this.handleChiffreChange}
            textValue={appTexte.btnChiffre}
            checked={this.state.paramChiffre}
          />

          <ParamMdp 
            id="btnMinuscule" 
            onChange={this.handleMinusculeChange}
            textValue={appTexte.btnMinuscule}
            checked={this.state.paramMinuscule}
          />

          <ParamMdp 
            id="btnMajuscule" 
            onChange={this.handleMajusculeChange}
            textValue={appTexte.btnMajuscule}
            checked={this.state.paramMajuscule}
          />

          <ParamMdp 
            id="btnSpeciaux" 
            onChange={this.handleSpeciauxChange}
            textValue={appTexte.btnSpeciaux}
            checked={this.state.paramSpeciaux}
          />

          <ParamMdp 
            id="btnExclusion" 
            onChange={this.handleExclusionChange}
            textValue={appTexte.btnExclusion}
            checked={this.state.paramExclusion}
          />

          <ParamNb
            id="btnNbChar" 
            onChange={this.handleLengthChange}
            max={MAX_CHAR}
            textValue={appTexte.btnNbChar}
            selected={this.state.paramNbChar}
          />
          <ParamNb
            id="btnNbMdp" 
            onChange={this.handleNbChange}
            max={MAX_PASSWORD}
            textValue={appTexte.btnNbMotDePasse}
            selected={this.state.paramNbMotDePasse}
          />

          <button onClick={this.handleClick}>
            {appTexte.btnGenMotDePasse}
          </button>

          <DisplayPassword 
            passwordValue={this.state.motDePasse} />

        </div>
      </React.Fragment>
    );
  }
}



export default MotDePasse;