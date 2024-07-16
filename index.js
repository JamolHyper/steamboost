const steamUser = require('steam-user');
const steamTotp = require('steam-totp');
const keep_alive = require('./keep_alive.js')

var games = [730, 570, 440, 2073850, 2357570];  // Enter here AppIDs of the needed games
var status = 1;  // 1 - online, 7 - invisible

// User 1
let user1 = new steamUser();
user1.logOn({
    "accountName": process.env.username1,
    "password": process.env.password1,
    "twoFactorCode": steamTotp.generateAuthCode(process.env.shared1)
});
user1.on('loggedOn', () => {
    if (user1.steamID != null) console.log(user1.steamID + ' - Successfully logged on');
    user1.setPersona(status);
    user1.gamesPlayed(games);
});

// User 2
let user2 = new steamUser();
user2.logOn({
    "accountName": process.env.username2,
    "password": process.env.password2,
    "twoFactorCode": steamTotp.generateAuthCode(process.env.shared2)
});
user2.on('loggedOn', () => {
    if (user2.steamID != null) console.log(user2.steamID + ' - Successfully logged on');
    user2.setPersona(status);
    user2.gamesPlayed(games);
});

// User 3
let user3 = new steamUser();
user3.logOn({
    "accountName": process.env.username3,
    "password": process.env.password3,
    "twoFactorCode": steamTotp.generateAuthCode(process.env.shared3)
});
user3.on('loggedOn', () => {
    if (user3.steamID != null) console.log(user3.steamID + ' - Successfully logged on');
    user3.setPersona(status);
    user3.gamesPlayed(games);
});

// User 4
let user4 = new steamUser();
user4.logOn({
    "accountName": process.env.username4,
    "password": process.env.password4,
    "twoFactorCode": steamTotp.generateAuthCode(process.env.shared4)
});
user4.on('loggedOn', () => {
    if (user4.steamID != null) console.log(user4.steamID + ' - Successfully logged on');
    user4.setPersona(status);
    user4.gamesPlayed(games);
});

// User 5
let user5 = new steamUser();
user5.logOn({
    "accountName": process.env.username5,
    "password": process.env.password5,
    "twoFactorCode": steamTotp.generateAuthCode(process.env.shared5)
});
user5.on('loggedOn', () => {
    if (user5.steamID != null) console.log(user5.steamID + ' - Successfully logged on');
    user5.setPersona(status);
    user5.gamesPlayed(games);
});

// User 6
let user6 = new steamUser();
user6.logOn({
    "accountName": process.env.username6,
    "password": process.env.password6,
    "twoFactorCode": steamTotp.generateAuthCode(process.env.shared6)
});
user6.on('loggedOn', () => {
    if (user6.steamID != null) console.log(user6.steamID + ' - Successfully logged on');
    user6.setPersona(status);
    user6.gamesPlayed(games);
});

// User 7
let user7 = new steamUser();
user7.logOn({
    "accountName": process.env.username7,
    "password": process.env.password7,
    "twoFactorCode": steamTotp.generateAuthCode(process.env.shared7)
});
user7.on('loggedOn', () => {
    if (user7.steamID != null) console.log(user7.steamID + ' - Successfully logged on');
    user7.setPersona(status);
    user7.gamesPlayed(games);
});

// User 8
let user8 = new steamUser();
user8.logOn({
    "accountName": process.env.username8,
    "password": process.env.password8,
    "twoFactorCode": steamTotp.generateAuthCode(process.env.shared8)
});
user8.on('loggedOn', () => {
    if (user8.steamID != null) console.log(user8.steamID + ' - Successfully logged on');
    user8.setPersona(status);
    user8.gamesPlayed(games);
});

// User 9
let user9 = new steamUser();
user9.logOn({
    "accountName": process.env.username9,
    "password": process.env.password9,
    "twoFactorCode": steamTotp.generateAuthCode(process.env.shared9)
});
user9.on('loggedOn', () => {
    if (user9.steamID != null) console.log(user9.steamID + ' - Successfully logged on');
    user9.setPersona(status);
    user9.gamesPlayed(games);
});

// User 10
let user10 = new steamUser();
user10.logOn({
    "accountName": process.env.username10,
    "password": process.env.password10,
    "twoFactorCode": steamTotp.generateAuthCode(process.env.shared10)
});
user10.on('loggedOn', () => {
    if (user10.steamID != null) console.log(user10.steamID + ' - Successfully logged on');
    user10.setPersona(status);
    user10.gamesPlayed(games);
});

// User 11
let user11 = new steamUser();
user11.logOn({
    "accountName": process.env.username11,
    "password": process.env.password11,
    "twoFactorCode": steamTotp.generateAuthCode(process.env.shared11)
});
user11.on('loggedOn', () => {
    if (user11.steamID != null) console.log(user11.steamID + ' - Successfully logged on');
    user11.setPersona(status);
    user11.gamesPlayed(games);
});

// User 12
let user12 = new steamUser();
user12.logOn({
    "accountName": process.env.username12,
    "password": process.env.password12,
    "twoFactorCode": steamTotp.generateAuthCode(process.env.shared12)
});
user12.on('loggedOn', () => {
    if (user12.steamID != null) console.log(user12.steamID + ' - Successfully logged on');
    user12.setPersona(status);
    user12.gamesPlayed(games);
});

// User 13
let user13 = new steamUser();
user13.logOn({
    "accountName": process.env.username13,
    "password": process.env.password13,
    "twoFactorCode": steamTotp.generateAuthCode(process.env.shared13)
});
user13.on('loggedOn', () => {
    if (user13.steamID != null) console.log(user13.steamID + ' - Successfully logged on');
    user13.setPersona(status);
    user13.gamesPlayed(games);
});

// User 14
let user14 = new steamUser();
user14.logOn({
    "accountName": process.env.username14,
    "password": process.env.password14,
    "twoFactorCode": steamTotp.generateAuthCode(process.env.shared14)
});
user14.on('loggedOn', () => {
    if (user14.steamID != null) console.log(user14.steamID + ' - Successfully logged on');
    user14.setPersona(status);
    user14.gamesPlayed(games);
});

// User 15
let user15 = new steamUser();
user15.logOn({
    "accountName": process.env.username15,
    "password": process.env.password15,
    "twoFactorCode": steamTotp.generateAuthCode(process.env.shared15)
});
user15.on('loggedOn', () => {
    if (user15.steamID != null) console.log(user15.steamID + ' - Successfully logged on');
    user15.setPersona(status);
    user15.gamesPlayed(games);
});

// User 16
let user16 = new steamUser();
user16.logOn({
    "accountName": process.env.username16,
    "password": process.env.password16,
    "twoFactorCode": steamTotp.generateAuthCode(process.env.shared16)
});
user16.on('loggedOn', () => {
    if (user16.steamID != null) console.log(user16.steamID + ' - Successfully logged on');
    user16.setPersona(status);
    user16.gamesPlayed(games);
});
