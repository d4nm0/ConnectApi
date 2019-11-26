require('isomorphic-fetch');

let querystring = require('querystring');
let HttpProxyAgent = require('http-proxy-agent');
let data = { q:'Montargis,FR', APPID:'2c457ea00970309155f1bffab9b3878d', units:'metric'};

let url="http://api.openweathermap.org/data/2.5/weather?"+querystring.stringify(data);

fetch(url ,{ agent:new HttpProxyAgent('http://wwwcache.univ-orleans.fr:3128')})
        .then(x => x.json())
        .then(xx => {
            console.log(" Ville : ", xx.name);
            console.log(" Température : ", xx.main.temp, "°C");
        });
