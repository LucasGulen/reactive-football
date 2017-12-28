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

export const getJoueursFavoris = (joueur = 1) => {
  return new Promise((resolve, reject) => {
    axios.get(`http://localhost/players.php?favoris=` + joueur)
    .then((res) => {
      resolve(res);
    });
  });
}

export const getStatsPos = () => {
  return new Promise((resolve, reject) => {
    axios.get(`http://localhost/players.php?statistiques_pos`)
    .then((res) => {
      resolve(res);
    });
  });
}

export const getStatsAll = () => {
  return new Promise((resolve, reject) => {
    axios.get(`http://localhost/players.php?statistiques_all`)
    .then((res) => {
      resolve(res);
    });
  });
}

export const getStatsClub = () => {
  return new Promise((resolve, reject) => {
    axios.get(`http://localhost/players.php?statistiques_club`)
    .then((res) => {
      resolve(res);
    });
  });
}

export const getNbUsers = () => {
  return new Promise((resolve, reject) => {
    axios.get(`http://localhost/players.php?nbUsers`)
    .then((res) => {
      resolve(res);
    });
  });
}

export const getUser = (login, password) => {
  return new Promise((resolve, reject) => {
    let params = new URLSearchParams();
    params.append("login",login);
    params.append("password",password);
    axios.post(`http://localhost/players.php`,params)
    .then((res) => {
      resolve(res);
    });
  });
}

export const insertUser = (login, email, password) => {
  return new Promise((resolve, reject) => {
    let params = new URLSearchParams();
    params.append("login", login);
    params.append("email", email);
    params.append("password", password);    
    axios.post(`http://localhost/players.php`, params)
    .then((res) => {
      resolve(res.data);
    });
  });
}

export const updateJoueursFavoris = (user, attaquant, milieu, defenseur, gardien) => {
  return new Promise((resolve, reject) => {
    let params = new URLSearchParams();
    params.append("id_utilisateur", user);
    params.append("id_attaquant", attaquant == undefined ? 0 : attaquant);
    params.append("id_milieu", milieu == undefined ? 0 : milieu);
    params.append("id_defenseur", defenseur == undefined ? 0 : defenseur);
    params.append("id_gardien", gardien == undefined ? 0 : gardien);
    axios.post(`http://localhost/players.php`, params)
    .then((res) => {
      resolve(res.data);
    });
  });
}