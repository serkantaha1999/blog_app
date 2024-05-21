const { environment } = require('@rails/webpacker');
const Dotenv = require('dotenv-webpack');

environment.plugins.append(
    'Dotenv',
    new Dotenv()
);

module.exports = environment;
