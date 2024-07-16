const steamUser = require('steam-user');
const steamTotp = require('steam-totp');
const keep_alive = require('./keep_alive.js')

var usernames = [
    process.env.username1, process.env.username2, process.env.username3, process.env.username4,
    process.env.username5, process.env.username6, process.env.username7, process.env.username8,
    process.env.username9, process.env.username10, process.env.username11, process.env.username12,
    process.env.username13, process.env.username14, process.env.username15, process.env.username16
];

var passwords = [
    process.env.password1, process.env.password2, process.env.password3, process.env.password4,
    process.env.password5, process.env.password6, process.env.password7, process.env.password8,
    process.env.password9, process.env.password10, process.env.password11, process.env.password12,
    process.env.password13, process.env.password14, process.env.password15, process.env.password16
];

var shared_secrets = [
    process.env.shared1, process.env.shared2, process.env.shared3, process.env.shared4,
    process.env.shared5, process.env.shared6, process.env.shared7, process.env.shared8,
    process.env.shared9, process.env.shared10, process.env.shared11, process.env.shared12,
    process.env.shared13, process.env.shared14, process.env.shared15, process.env.shared16
];

var games = [730, 570, 440, 2073850, 2357570];  // Enter here AppIDs of the needed games
var status = 1;  // 1 - online, 7 - invisible

for (let i = 0; i < usernames.length; i++) {
    let user = new steamUser();
    user.logOn({
        "accountName": usernames[i],
        "password": passwords[i],
        "twoFactorCode": steamTotp.generateAuthCode(shared_secrets[i])
    });
    user.on('loggedOn', () => {
        if (user.steamID != null) console.log(user.steamID + ' - Successfully logged on');
        user.setPersona(status);               
        user.gamesPlayed(games);
    });
}
