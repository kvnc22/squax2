const Discord = require('discord.js');
const db = require('quick.db')
 const Gamedig = require('gamedig');
exports.run = async(client, message, args) => { 
  
  
  let codeming = args[0]

  await message.channel.send('İp verisi **'+codeming+'** olarak değiştirildi! :star2: \n\n **CodEming**')
  
  db.set(`codemingtr`, codeming)


process.exit(0); 
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'ip-değiştir',
  description: 'taslak', 
  usage: 'ip-değiştir'
};