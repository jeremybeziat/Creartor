
export function tronquer(chaine, longueur, taille) {
  if (chaine.length > longueur && longueurEcran(taille)) {
    return chaine.substring(0, longueur);
  } else {
    return chaine;
  }
}

export function longueurEcran (longueur) {
  //  si l'écran est de 00000px donc tronqueur sera cette action
  if (window.screen.width <= longueur ) {
    return true;
  }
}