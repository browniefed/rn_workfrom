var Images = {
    getImage: function(name) {
        switch (name) {
            case 'logo':
                return require('image!logo');
            case 'logo-mobile':
                return require('image!logo-mobile');
        }
    }
}

module.exports = Images;