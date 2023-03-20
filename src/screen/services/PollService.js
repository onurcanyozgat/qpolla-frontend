import axios from 'axios';

import { API_BASE_URL, API_URL_POLL} from '../constant';
import authHeader from "./util/AuthHeader"

class PollService {

    static getCategories()
    {
       return axios.get(API_BASE_URL + API_URL_POLL, {headers: authHeader()});
    }
}

export default PollService;