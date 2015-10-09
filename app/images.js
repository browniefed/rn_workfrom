var Images = {
    getImage: function(name) {
        switch (name) {
            case 'logo':
                return require('image!logo');
            case 'logomobile':
                return require('image!logomobile');
        }
    }
}

module.exports = Images;