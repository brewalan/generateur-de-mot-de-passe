import React from 'react';
import { appTexte } from '../../utils/appTexte';
import { generatedPassword,mdpTexte,divPassword } from './displayPassword.module.scss'
 

class DisplayPassword extends React.Component {


    updateClipboard(newClip) {
        navigator.clipboard.writeText(newClip.txt).then(function() {
            /* le presse-papier est correctement paramétré */
        }, function() {
            /* l'écriture dans le presse-papier a échoué */
        });
    }

//navigator.clipboard.writeText({txt})
  render() {   
    return (
      <React.Fragment>
        <h2>{appTexte.motDePasse}</h2>
        <div className={generatedPassword}>
            <div className={mdpTexte}>
                {this.props.passwordValue.map((txt) => {
                        return (
                            <div key="generatedPassKey" className={divPassword} >
                                {txt}
                                <button key="genButtonKey" onClick={async () =>  await this.updateClipboard({txt})}>Copy</button>
                            </div>
                        );
                })}
          </div>
        </div>
        
        
      </React.Fragment>
    );
  }
}



export default DisplayPassword;