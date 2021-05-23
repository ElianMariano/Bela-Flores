let baseUrl = '';
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development'){
    baseUrl = 'http://localhost:3333'
} else {
    baseUrl = 'https://belaflores.herokuapp.com'
}

export default baseUrl;