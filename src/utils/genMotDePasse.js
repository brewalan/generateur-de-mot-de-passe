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
        let lettre = (this.paramExclusion) ? "abcdefghijkmnopqrstuvwxyz" : "abcdefghijklmnopqrstuvwxyz";
        let index = Math.floor(Math.random()*lettre.length);
        return lettre[index];
    }

    getRandomLettreMajuscule() {
        let lettre = (this.paramExclusion) ? "ABCDEFGHIJKLMNPQRSTUVWXYZ" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let index = Math.floor(Math.random()*lettre.length);
        return lettre[index];
    }

    getRandomSpeciaux() {
        let lettre = (this.paramExclusion) ? "-*+%/(){}[]" : "-_!@#$%^&*+/§(){}[]<>?.";
        let index = Math.floor(Math.random()*lettre.length);
        return lettre[index];
    }    
    
    getRandomChiffre() {
        let lettre = (this.paramExclusion) ? "0123456789" : "23456789";
        let index = Math.floor(Math.random()*lettre.length);
        return lettre[index];
    }

    getRandomValue(nb) {
        return Math.floor(Math.random()*nb);
    }

    getPassword() {

        /* do until password quality is ok */
        let mdp = "";
        let passwordCheck = false;
        while(!passwordCheck) {
            /* commence la génération du mot de passe */
            let nbChiffre = 0;
            let nbMajuscule = 0;
            let nbMinuscule = 0;
            let nbSpeciaux = 0;
            mdp = "";
            while(mdp.length<this.paramNbChar) {
                let typeCharactere = this.getRandomValue(8);
                switch(typeCharactere) {
                    case 0:
                    case 1:
                        mdp+=(this.paramChiffre) ? this.getRandomChiffre() : "";
                        nbChiffre++;
                        break;
                    case 2:
                    case 3:
                    case 4:
                        mdp+=(this.paramMinuscule) ? this.getRandomLettreMinuscule() : "";
                        nbMinuscule++;
                        break;
                    case 5:
                    case 6:
                        mdp+=(this.paramMajuscule) ? this.getRandomLettreMajuscule() : "";
                        nbMajuscule++;
                        break;
                    case 7:                 
                        mdp+=(this.paramSpeciaux) ? this.getRandomSpeciaux() : ""; 
                        nbSpeciaux++;
                        break;
                    default:
                        ;
                }
                /* check quality */
                let paramRequest = 0;
                paramRequest += (this.paramChiffre) ? 1 : 0; 
                paramRequest += (this.paramMinuscule) ? 1 : 0; 
                paramRequest += (this.paramMajuscule) ? 1 : 0; 
                paramRequest += (this.paramSpeciaux) ? 1 : 0; 
                let paramUsed = 0;
                paramUsed += (nbChiffre>0) ? 1 : 0;
                paramUsed += (nbMinuscule>0) ? 1 : 0;
                paramUsed += (nbMajuscule>0) ? 1 : 0;
                paramUsed += (nbSpeciaux>0) ? 1 : 0;
                passwordCheck = (paramRequest===paramUsed);
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