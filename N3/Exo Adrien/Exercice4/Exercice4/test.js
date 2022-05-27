// Create variables here
// =========================================

let episodeTitle = "Le jour où tout a commencé !";



// =========================================
// Créez une variable nommée  episodeTitle  qui contient une chaîne de caractères correspondant au titre de votre épisode (employez votre créativité !).

// 2. Créez une variable appelée  episodeDuration  qui contient un nombre correspondant à la durée de votre épisode en minutes.

// 3. Enfin, créez une variable booléenne nommée   hasBeenWatched  qui indique si l'utilisateur a déjà regardé l'épisode ou non.

// Vérifiez si le composant fonctionne correctement. N'hésitez pas à modifier vos valeurs pour vérifier que le composant réagit comme prévu. 

document.querySelector('#episode-info').innerText = `Épisode: ${episodeTitle}
Durée: ${episodeDuration} min
${hasBeenWatched ? 'Déjà regardé' : 'Pas encore regardé'}`