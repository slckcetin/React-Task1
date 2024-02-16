import getData from './app.js';


getData(1)
  .then(({ user, posts }) => console.log(user, posts))
  .catch((e) => console.log(e));





