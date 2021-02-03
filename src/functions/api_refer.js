import axios from 'axios'
export const GET_PROJECT = 'GET_PROJECT';

export default async function getProjects(category) {
 
  return await axios
    .get('https://whoami-moonseok.herokuapp.com/item/'+category);
   
}

