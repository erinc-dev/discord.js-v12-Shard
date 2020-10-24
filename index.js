const Discord = require('discord.js')
const client = new Discord.Client();
var prefix = ayarlar.prefix;

client.on('ready', () => {
    console.log(`Botunuz ${client.user.tag} Aktif Edildi!`)
})

client.login(ayarlar.token);