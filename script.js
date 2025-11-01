function mettreAJourHorloge() {
  const maintenant = new Date();

  let heures = maintenant.getHours();
  let minutes = maintenant.getMinutes();
  let secondes = maintenant.getSeconds();

  if (heures < 10) heures = "0" + heures;
  if (minutes < 10) minutes = "0" + minutes;
  if (secondes < 10) secondes = "0" + secondes;

  const horloge = document.getElementById("clock");
  horloge.textContent = `${heures}:${minutes}:${secondes}`;
}

setInterval(mettreAJourHorloge, 1000);

mettreAJourHorloge();
