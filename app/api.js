var config = require('./config.json');
var BASE_URL = 'http://api.workfrom.co/'
var request = require('superagent');

var signup_url = 'https://workfrom.co/join'

var API = {
    getPlace: function(slug) {
        return request.get(BASE_URL + 'places/' + slug).query({
            appid: config.appid
        });
    },
    getPostal: function(postal, rpp, page) {
        return request.get(BASE_URL + 'places/postal/' + postal).accept('json').query({
            appid: config.appid,
            rpp: rpp || 5,
            page: page || 1
        });
    },
    getLL: function(ll, radius) {
        return request.get(BASE_URL + 'places/ll/' + ll).query({
            appid: config.appid,
            radius: radius || 5
        });
    },
    signup: function(email,cb) {
      request.post(signup_url).type('form')
      .set('Referer','https://workfrom.co/join')
      .set('Origin', 'https://workfrom.co')
      .set('User-Agent','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send({
        user_login: email
      }).send({
        user_email: email
      }).send({
        codeofconduct: 'yes'
      }).send({
        action: 'register'
      }).send({
        'wp-submit': ''
      }).send({
        'direct_upgarde': '',
      }).send({
        'redirect_to': 'https://preview.workfrom.co/login?checkemail=registered'
      }).send({
        'instance': ''
      }).end(cb);
    }
}

module.exports = API;