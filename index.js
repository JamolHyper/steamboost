const steamUser = require('steam-user');
const steamTotp = require('steam-totp');
const keep_alive = require('./keep_alive.js')

var games = [730, 570, 440, 2073850, 2357570];  // Enter here AppIDs of the needed games
var status = 1;  // 1 - online, 7 - invisible

const accounts = [
    { username: 'ElectricSaturn1', password: 'S)yTUUy3oit3', shared: '9RO4M8SScqWyla2XlLtA643gnkQ=' },
    { username: 'PopDude_AK47', password: 'YeIxgEoLt5^2', shared: 'UX7cPp811hkxNsRCXqW2yzk635I=' },
    { username: 'CW2ndle', password: 'sPzPy$bYoO16', shared: '8x0cAzuCE6m7kLgjR91Qd0fiqXM=' },
    { username: 'CW2Giggly', password: 'T)oautpIRA61', shared: 'yhQbbWeGU7b+PYg6zq8DkkYSPKs=' },
    { username: 'CS2Exes', password: 'yinrrIIP^T72', shared: 'RYrXnkHjRBHEGSa2MMpbb98n7bI=' },
    { username: 'JuzCS2', password: 'YgpIiEfVr)22', shared: 'VvEtwkJI0o3ADyvIY+YSjJEbQt8=' },
    { username: 'HyperEternal1', password: 'IGoYuE1)2pte', shared: 'QSebkut075RVmbnxs4PmMmZ6Wn4=' },
    { username: 'HyperPushy', password: 'u3RmYppRt7)P', shared: 'HVlGDG4o2HouR+cV/1DSmXDlXx4=' },
    { username: 'HyperBit5', password: '*eeoTAPpRu11', shared: 'iub9U+RBzWzd1OWBLhB427gn68k=' },
    { username: 'TulHyper', password: 'ooitrPI-A7O2', shared: '71/Kno+5MgtM5wgI80zBSS2fGC0=' },
    { username: 'Hyperisfi', password: '2apphIc&UYA2', shared: 'OpJ+I9nwXCjybYq6HMBNejHqzFQ=' },
    { username: 'Crypto_Hyper', password: 'pToALaEa2r4$', shared: 'ny/CA3qWHwvGWHNVyD6E7ZupjTU=' },
    { username: 'CS2Skier', password: 'XIOU^h5ztou2', shared: 'F99QsKGdpftNN9XmtmQQTbCRocY=' },
    { username: 'LovelyLovage', password: 'zYaop%3NtTP2', shared: 'uhTrrTrwyLz+oa5leEb6TlRREHM=' },
    { username: 'PreHyper', password: 'EUalPpuuE12&', shared: 'XSY1wcD6tDmi9hTKt+RmjO1uewk=' },
    { username: 'LipsxHyper', password: 'U-draaIl2PZ1', shared: 'YTMytJSb4Txu/CqkZi3fkbCcJgE=' }
];

accounts.forEach(account => {
    let user = new steamUser();
    user.logOn({
        "accountName": account.username,
        "password": account.password,
        "twoFactorCode": steamTotp.generateAuthCode(account.shared)
    });
    user.on('loggedOn', () => {
        if (user.steamID != null) console.log(user.steamID + ' - Successfully logged on');
        user.setPersona(status);
        user.gamesPlayed(games);
    });
});
