import axios from 'axios';

export const getAllJoueurs = () => {
  return new Promise ((resolve, reject) => {
    axios.get(`http://localhost/players.php`)
    .then((res) => {
      resolve(res);
    });
  });        
}

export const getJoueursFilter = (joueurs) => {
  return new Promise((resolve, reject) => {
    axios.get(`http://localhost/players.php?joueurs=` + joueurs)
    .then((res) => {
      resolve(res);
    });
  });
}