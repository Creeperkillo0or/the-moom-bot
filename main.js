const Discord = require('discord.js');
const request = require('request');
const client = new Discord.Client();
const prefix = '-'
const HelpEmbend = new Discord.MessageEmbed()
	.setColor('#9910ff')
	.setTitle('Avalible Commands')
	
	.setAuthor('Moon Bot')
	.setDescription('All Commands from The Official Moons\nAll Commands must start with the Prefix "-"')
	.addFields(
		{ name: '\u200B', value: '\u200B' },
        { name: '-gay', value: '**Responds with No u**', inline: true },   
        { name: '-mum', value: '**Mum :)**', inline: true }, 
        { name: '-Kill@User', value: '**Kills the @User with a Random Weapon**', inline: true }, 
        { name: '-whogay', value: '**Random Person and %gay**', inline: true }, 
        { name: '-coffeeplz', value: '**Here to annoy Sean**', inline: true }, 
        { name: '-stik', value: '**Sends Stik**', inline: true }, 
        { name: '-babyman', value: '**Sends Babyman**', inline: true },    
        { name: '-ping', value: '**Sends Uptime and Ping of the bot**', inline: true },
              //Commands:\n -gay\n-mum\n-kill@User\n-whogay\n-coffeeplt\n-stik\n-babyman
	)
	.setTimestamp()
    .setFooter('Commands');
   
var randomItem = Math.floor(Math.random()* 4);
client.on('guildMemberAdd', member => {
    member.send("Welcome to The Offial Moon Server!");
    let role = message.guild.roles.find(r => r.name === "Visitor");
member.roles.add(role)
    console.log('New member joined and gave role Visior')
 });
client.once('ready', () =>{
    console.log('Bot online or whatever');
});
client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    const taggedUser = message.mentions.users.first();
    if (command === 'babyman'){
        message.channel.send('https://www.youtube.com/watch?v=2uPo2HIqBJ4')
        console.log('BABY MAN')
    }
    if(command === 'purge' || command ==='begone')
        {
            if (message.member.roles.cache.some(r => r.name === "DevMoon/Head Admin") || message.member.roles.cache.some(r => r.name === "MOON GOD")) 
            {
                const amount = parseInt(args[0]);
                if (isNaN(amount)) {
                    return message.reply('that doesn\'t seem to be a valid number.');
                } else if (amount <= 0 || amount >= 101) {
                    return message.reply('you need to input a number between 1 and 100.');
                }
                message.channel.bulkDelete(amount, true).catch(err => {
                    console.error(err);
                    message.channel.send('there was an error trying to purge messages in this channel!');
                });
                console.log(`${message.author.username} purged ${amount} messages`)
            }
            else
            {
                console.log(`${message.author.username} tried to purge messages`)
                    message.channel.send('You dont have the Permission to do that!')
            }
        }
        if(command === 'repeat')
        {
            var text = message.content.replace('-repeat', '');
                message.channel.send(text)
                console.log(`bot reapeated ${text} from ${message.author.username}`)
        }
        if(command === 'birb')
                {
                    message.channel.send('https://cdn.discordapp.com/attachments/703812246161326091/773854400946503700/video0.mp4')
                    console.log('Birb send')
                }
                if(command === 'vibe')
                {
                    message.channel.send('https://cdn.discordapp.com/attachments/732624639943245935/768531753446670357/VID-1603299747543.mp4')
                    console.log('vibe send')
                }
                if (command === 'update')
                {
                    function BTC() {
            
                        return new Promise((resolve) => {
                    
                            // send a request to blockchain
                            request('https://blockchain.info/de/ticker', (error, response, body) => {
                    
                                // parse the json answer and get the current bitcoin value
                                const data = JSON.parse(body);
                                value = (parseInt(data.USD.buy, 10) + parseInt(data.USD.sell, 10)) / 2;
                                resolve(value);
                            });
                        });
                    }
                    
                    BTC().then(val => message.channel.send(`Current BTC Value: ${val}$`));
                    
                    console.log('BTC Updated')
                }
if (command === 'gay'){
    message.channel.send('No u')
    console.log('No u Send')
}
if (command === 'stik'){
    message.channel.send('https://cdn.discordapp.com/attachments/760898427608498257/800726085763465236/unknown.png')
    console.log('Stik Send')
}
if (command === 'mum'){
    message.channel.send('Shes a nice person :)')
    .then((message)=> {
        setTimeout(function(){
            message.edit('JK LMAAOOOOO :rofl:')
        }, 5000)
      });  
    console.log('mum Send')
}
if (command === 'whogay') {
     names = ["Joe", "Billy", "Autumn", "Ady", "Ellie", "Eddie"];
     var randomItem = Math.floor(Math.random()*names.length);
    var randomPercent = Math.floor(Math.random()* 100);
    message.channel.send(names[randomItem] +' is '+randomPercent+'% gay')
    console.log(names[randomItem] +' gay')
}   

if (command === 'kill'&&taggedUser) {
    weapons = ["Belt", "Gun", "Chainsaw", "Blade", "Sword", "Bomb","Axe"];
     var randomWepon = Math.floor(Math.random()*weapons.length);
    const taggedUser = message.mentions.users.first();
    if(taggedUser == message.author)
            {
                message.channel.send("No :heart:")
            }
            else
            {
    message.channel.send(`Im getting the ${weapons[randomWepon]} ${taggedUser}`);
            }
        }
        if(command ==='hug'&&taggedUser)
        {
            
            const taggedUser = message.mentions.users.first();
            if(taggedUser == message.author)
            {
                message.channel.send("You cant hug yourself, sorry")
            }
            else
            {
                message.channel.send(`${message.author.username} has hugged ${taggedUser.username}`)
            }
        }
        if(command ==='kiss'&&taggedUser)
        {
            const taggedUser = message.mentions.users.first();
            if(taggedUser == message.author)
            {
                message.channel.send("You cant Kiss yourself, sorry")
            }
            else
            {
            message.channel.send(`${message.author.username} has Kissed ${taggedUser.username} :kissing_heart:`)
            }
        }
            if (command === 'giveprofile'&& taggedUser) {
                console.log(`${taggedUser.username}´s pfp send was send by ${message.author.username}`)
                return message.channel.send(`${taggedUser.username}'s avatar: ${taggedUser.displayAvatarURL({ dynamic: true })}`);
                
            
        }
        if (command === 'giveprofile') {
            const user = message.author;
            console.log(`${user.username}´s pfp send`)
                return message.channel.send(`${user.username}'s avatar: ${user.displayAvatarURL({ dynamic: true })}`);
            
        }
        if (command === 'help') {
            message.channel.send(HelpEmbend)
            console.log('Help Send')
        }
        if (command === 'ping') {
            var ping = Date.now() - message.createdTimestamp + " ms";
            let days = Math.floor(client.uptime / 86400000);
            let hours = Math.floor(client.uptime / 3600000) % 24;
            let minutes = Math.floor(client.uptime / 60000) % 60;
            let seconds = Math.floor(client.uptime / 1000) % 60;
            const PingAndUptime = new Discord.MessageEmbed()
            .setColor('#9910ff')
            .setTitle('Ping And Uptime')
            
            .setAuthor('Moon Bot')
            .setDescription('Get the Ping and Uptime Of the Bot!')
            
            .addFields(
                { name: '\u200B', value: '\u200B' },
                { name: 'Ping', value: "**Your ping is `" + `${Date.now() - message.createdTimestamp}` + " ms`**"}, 
                { name: '\u200B', value: '\u200B' },  
                { name: 'Uptime', value: `__Uptime:__\n**${days}d ${hours}h ${minutes}m ${seconds}s**`}, 
            )
            .setTimestamp()
            .setFooter('Ping and Uptime');
            message.channel.send(PingAndUptime)
            console.log('ping and uptime Send')
        }
        
        if (command === 'cola'){
            message.channel.send('https://www.youtube.com/watch?v=S0qC_J1VaZI')
            console.log('ESPUMA')
        }
        
})

client.login(process.env.TOKEN)