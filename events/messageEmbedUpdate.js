const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js")

class MessageEmbedUpdate extends Event {
    constructor() {
        super("messageEmbedUpdate")
    }

    async run(bot) {
        let channel = bot.channels.cache.get(bot.config.ids.channels.text.privatrooms)
        if(channel) {
            channel.messages.fetch(bot.config.ids.messages.privatrooms)
            .then(message => {
                let row1 = new MessageActionRow()
                .addComponents(new MessageButton().setEmoji('<:1_:1020664997786964049> ').setCustomId('pvlimit').setStyle('SECONDARY'))
                .addComponents(new MessageButton().setEmoji('<:1_:1020664996331532369> ').setCustomId('pvlock').setStyle('SECONDARY'))
                .addComponents(new MessageButton().setEmoji('<:1_:1020664994494431272> ').setCustomId('pvunlock').setStyle('SECONDARY'))
                .addComponents(new MessageButton().setEmoji('<:1_:1020664992950915152> ').setCustomId('pvremoveuser').setStyle('SECONDARY'))
                .addComponents(new MessageButton().setEmoji('<:1_:1020664991646498856> ').setCustomId('pvadduser').setStyle('SECONDARY'))

                let row2 = new MessageActionRow()
                .addComponents(new MessageButton().setEmoji('<:1_:1020664989641605180>').setCustomId('pvname').setStyle('SECONDARY'))
                .addComponents(new MessageButton().setEmoji('<:1_:1020664988320399441>').setCustomId('pvcrown').setStyle('SECONDARY'))
                .addComponents(new MessageButton().setEmoji('<:1_:1020664986332303400>').setCustomId('pvkick').setStyle('SECONDARY'))
                .addComponents(new MessageButton().setEmoji('<:1_:1020664984864313414> ').setCustomId('pvmute').setStyle('SECONDARY'))
                .addComponents(new MessageButton().setEmoji('<:1_:1020664983194972250> ').setCustomId('pvunmute').setStyle('SECONDARY'))
                
                let embed = new MessageEmbed()
                .setColor('#2f3136')
                .setTitle('Управление приватной комнатой')
                .setDescription('> Жми следующие кнопки, чтобы настроить свою комнату')
                .setFooter({text: 'Использовать их можно только когда у тебя есть приватный канал'})
                .addField('** **',
                '<:1_:1020664997786964049>    — установить лимит' + '\n'
                + '<:1_:1020664996331532369>  — закрыть комнату' + '\n'
                + '<:1_:1020664994494431272>  — открыть комнату' + '\n'
                + '<:1_:1020664992950915152>  — забрать доступ' + '\n'
                + '<:1_:1020664991646498856>   — выдать доступ',
                true)
                .addField('** **',
                '<:1_:1020664989641605180>  — сменить название' + '\n'
                + '<:1_:1020664988320399441>  — передать владельца' + '\n'
                + '<:1_:1020664986332303400> — выгнать из комнаты' + '\n'
                + '<:1_:1020664984864313414>   — забрать право говорить' + '\n'
                + '<:1_:1020664983194972250>  — вернуть право говорить',
                true)
                message.edit({embeds: [embed], components: [row1, row2]})
            }).catch((err) => {
                console.log(`Ошибка с изменерием сообщения.\n${err.name}: ${err.message}`)
            })
        }
    }
}

module.exports = MessageEmbedUpdate