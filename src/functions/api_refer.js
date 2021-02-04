import axios from 'axios'
export const GET_PROJECT = 'GET_PROJECT';

export default async function getProjects(category) {
 
  return await axios
    //.get('https://whoami-moonseok.herokuapp.com/item/'+category);
    .get('http://127.0.0.1:8000/item/'+category);
   
}

