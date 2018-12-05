const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});




const adminprefix = "*";
const devs = ['490688243864567834'];
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;

    if (message.content.startsWith(adminprefix + 'sets')) {
        client.user.setGame(argresult, "https://www.twitch.tv/idk");
        message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
    }

});


client.on('message', function (message) {
    let args = message.content.split(" ").slice(1).join(" ");
    if (message.content.startsWith(adminprefix + "setWatch")) {
        if (message.author.id !== '490688243864567834') return;
        message.channel.send("**- :white_check_mark: Done!,**");
    }
});
client.on('message', function (message) {
    let args = message.content.split(" ").slice(1).join(" ");
    if (message.content.startsWith(adminprefix + "setListen")) {
        if (message.author.id !== '490688243864567834') return;
        client.user.setActivity(args, { type: 'LISTENING' });
        message.channel.send("**- :white_check_mark: Done!,**");
    }
});

client.login(process.env.BOT_TOKEN);
