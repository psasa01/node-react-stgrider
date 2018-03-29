// prod.js - production keys here!!!

module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    googleCallback: process.env.GOOGLE_CALLBACK,
    FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID,
    FACEBOOK_APP_SECRET: process.env.FACEBOOK_APP_SECRET,
    FACEBOOK_APP_CALLBACK: process.env.FACEBOOK_APP_CALLBACK,
    mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY
}
