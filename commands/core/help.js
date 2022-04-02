const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['h',"yardım"],
    showHelp: false,
    utilisation: '{prefix}help',

    execute(client, message, args) {
        const embed = new MessageEmbed();

        embed.setColor('BLUE');
        embed.setTitle(client.user.username);
        embed.setThumbnail(client.user.displayAvatarURL())
        const commands = client.commands.filter(x => x.showHelp !== false);

        embed.setDescription('不可以...♡我對你...只是♡...只是尊敬而已...我不能...不可以對你懷有...懷有那種心思啊♡...但是...但是心中的感情♡...已經...抑制不住了啊♡') ;
        embed.addField(`Available - ${commands.size} Command Available`, commands.map(x => `\`${x.name}${x.aliases[0] ? ` (${x.aliases[0]})\`` : '\`'}`).join(' | '));

        embed.setTimestamp();
        embed.setFooter({ text: '我愛你主人', iconURL:message.author.avatarURL({ dynamic: true }) });
        message.channel.send({ embeds: [embed] });
    },
};
