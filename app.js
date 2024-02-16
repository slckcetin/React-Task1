import axios from "axios";

async function getData(index) {
  const { data: user } = await axios(
    "https://jsonplaceholder.typicode.com/users/" + index
  );
  const { data: posts } = await axios(
    "https://jsonplaceholder.typicode.com/posts?userId=" + index
  );
  return { user, posts };
}
export default getData ;
