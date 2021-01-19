import axios from 'axios'
// interface Airline{
//     id?: number;
//   name: string;
//   country: string;
//   logo: string;
//   slogan: string;
//   head_quaters: string;
//   website: string;
//   established: string;
// }

export default {
     getAirline : async () => {
        return axios.get("https://api.instantwebtools.net/v1/airlines")
    }
}