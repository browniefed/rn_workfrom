var config = require('config.json');
var BASE_URL = 'http://api.workfrom.co/'
var request = require('superagent');


var API = {
    getPlace: function(slug) {
        return request.get(BASE_URL + 'places/' + slug).query({
            appid: config.appid
        });
    },
    getPostal: function(postal, rpp, page) {
        return request.get(BASE_URL + 'places/postal/' + postal).query({
            appid: config.appid,
            rpp: rpp || 5,
            page: page || 1
        });
    },
    getLL: function(lat, lng, radius) {
        return request.get(BASE_URL + 'places/postal/' + postal).query({
            appid: config.appid,
            raidus: radius || 5
        });
    }
}

module.exports = API;