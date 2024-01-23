import axios from 'axios';

const options = {
    method: 'POST',
    url: 'https://neutrinoapi-bad-word-filter.p.rapidapi.com/bad-word-filter',
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
        'X-RapidAPI-Host': 'neutrinoapi-bad-word-filter.p.rapidapi.com'
    }
}
const filterObscenities = async (message) => {
    try {
        const encodedParams = new URLSearchParams();
        encodedParams.set('content', message);
        encodedParams.set('censor-character', '*');
        options.data = encodedParams;
        const response = await axios.request(options);
        return response.data['censored-content'];
    } catch (error) {
        console.error('Error filtering obscenities:', error);
        alert('Error filtering obscenities. API error: ' + error.message);
        return message;
    }
};

export default filterObscenities;