const allowedCors = [
    'https://practicum.yandex.ru',
    'http://practicum.yandex.ru',
    'localhost:3000'
]

function cors(req, res, next) {
    const { origin } = req.headers;
    res.header('Access-Control-Allow-Origin', 'localhost:3000');
    next(); 
}

module.exports=cors;