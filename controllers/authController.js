const mongoose = require('mongoose');
const User = mongoose.model('users');
const promisify = require('es6-promisify');
const randomstring = require('randomstring');
// const mailer = require('../handlers/mailer');
const passport = require('passport');

exports.validateRegister = (req, res, next) => {
    req.sanitizeBody('name');
    req.checkBody('name', 'Morate unijeti korisničko ime!').notEmpty();
    req.checkBody('email', 'Email koji ste unijeli nažalost nije ispravan!').isEmail();
    req.sanitizeBody('email').normalizeEmail({
        remove_dots: false,
        remove_extension: false,
        gmail_remove_subaddress: false
    });
    req.checkBody('password', 'Morate unijeti šifru!').notEmpty();
    req.checkBody('password-potvrda', 'Morate potvrditi šifru!').notEmpty();
    req.checkBody('password-potvrda', 'Nažalost, šifre se ne podudaraju!').equals(req.body.password);

    const errors = req.validationErrors();
    if (errors) {
        req.flash({ 'error': errors.map(err => err.msg) });

        return; // stop
    }
    next(); // no errors
}

exports.register = async (req, res) => {
    console.log(req.body);
    const userFind = await User.findOne({
        email: req.body.email
    });
    if (userFind) {
        if (userFind.hash == undefined) {
            req.flash({ 'error': 'Korisnik s navedenom email adresom već postoji!' });
            res.redirect('/login');
        }
    } else {

        // secret token
        const secretToken = randomstring.generate();
        const user = new User({
            email: req.body.email,
            ime: req.body.name,
            secretToken,
        });

        // const html = `
        //     Poštovani,
        //     <br>
        //     zahvaljujemo Vam se na registraciji. Da biste aktivirali korisnički račun potrebno je da pratite link ispod, 
        //     te unesete aktivacijski kod!
        //     <br>
        //     Aktivacijski kod: 
        //     <br>
        //     <strong>${secretToken}</strong>
        //     <br>
        //     <a href="http://${req.headers.host}/aktivacija"> Aktiviraj korisnički račun </a>
        //     <br>
        //     <br>
        //     Zelimo Vam ugodan dan!`

        // await mailer.sendEmail('admin@vina.sava.ba', user.email, 'Molimo Vas da verifikujete zahtjev za registraciju na vina.sava.ba', html);

        const register = promisify(User.register, User);
        await register(user, req.body.password);

        req.flash({ 'success': 'Uspješno ste se registrovali.' });
        res.redirect('/login');

    }
};

