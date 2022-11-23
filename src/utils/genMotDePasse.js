//import ConjBank from "../features/ConjBank";
import { appTexte } from "./appTexte";

/* Generate some verbs when starting to key down */
class GenMotDePasse {

    paramChiffre = true;
    paramMinuscule = true;
    paramMajuscule = true;
    paramSpeciaux = true;
    paramExclusion = false;
    paramNbChar = 12;
    paramNbMdp = 1;    


    getRandomLettreMinuscule() {
        let lettre = "abcdefghijklmnopqrstuvwxyz";
        let index = Math.floor(Math.random()*26);
        return lettre[index];
    }

    getRandomLettreMajuscule() {
        let lettre = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let index = Math.floor(Math.random()*26);
        return lettre[index];
    }

    getRandomSpeciaux() {
        let lettre = "-_!@#$%^&*+/§(){}[]<>?.";
        let index = Math.floor(Math.random()*lettre.length);
        return lettre[index];
    }    

    
    getRandomChiffre() {
        return String(Math.floor(Math.random()*10));        
    }

    getRandomValue(nb) {
        return Math.floor(Math.random()*nb);
    }

    getPassword() {
        /* commence la génération du mot de passe */
        let mdp = "";
        while(mdp.length<this.paramNbChar) {
            let typeCharactere = this.getRandomValue(8);
            switch(typeCharactere) {
                case 0:
                case 1:
                    mdp+=(this.paramChiffre) ? this.getRandomChiffre() : "";
                    break;
                case 2:
                case 3:
                case 4:
                    mdp+=(this.paramMinuscule) ? this.getRandomLettreMinuscule() : "";
                    break;
                case 5:
                case 6:
                    mdp+=(this.paramMajuscule) ? this.getRandomLettreMajuscule() : "";
                    break;
                case 7:                 
                    mdp+=(this.paramSpeciaux) ? this.getRandomSpeciaux() : ""; 
                    break;
                default:
                    ;
            }
                       
        }
        return mdp;

    }


    /* main function to generate a password */
    generateMotDePasse() {
        /* vérifie les paramètres */
        if ((!this.paramChiffre) && (!this.paramMajuscule) && (!this.paramMinuscule) && (!this.paramSpeciaux)) {
            return [appTexte.erreurParametre];
        }
        if (this.paramNbMdp<1) {
            return [appTexte.erreurNombre];
        }
        if (this.paramNbMdp>50) {
            return [appTexte.erreurNombre];
        }

        /* génère le nombre de mot de passe demandé */
        let mdp = [];
        for(let index=0;index<this.paramNbMdp;index++) {
            mdp.push(this.getPassword());
        }
        return mdp;
    }
   
}

export default GenMotDePasse;