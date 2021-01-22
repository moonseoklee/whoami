import axios from 'axios'
export const GET_PROJECT = 'GET_PROJECT';

export default async function getProjects() {
 
  return await axios
    .get('http://127.0.0.1:8000/project/');
   
}

