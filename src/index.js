import hash from 'string-hash';

const hashNick = (nick) => hash(nick) % 16 + 1

module.exports = hashNick
