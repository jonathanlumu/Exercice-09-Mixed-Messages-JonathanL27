//hello jonathan
function messageAleatoire() {
    const textes = [" Bonjour!", "Amusez-vous ici", "veuillez nous laisser un commentaire", "Prenez le temps d'appreciez notre site", "Bienvenu chez nous"];
    let numero = Math.floor(Math.random() * textes.length);
  
  return textes[numero]
  }
  console.log(messageAleatoire())