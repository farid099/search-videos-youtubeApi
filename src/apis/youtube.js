import axios from 'axios';

const KEY = "AIzaSyDqQ4Bd0Qwka5V7omiufeAG408_x8HVFCc";

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
      },
})