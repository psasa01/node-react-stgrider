var localtunnel = require('localtunnel');

localtunnel(5000, { 
    subdomain: 'sallemao'
}, function (err, tunnel) {
    console.log('LT running');
});