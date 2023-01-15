class Ready extends Event {
    constructor() {
        super("ready")
    }

    async run(bot) {
        console.log(bot.user.tag)

    bot.channels.cache.get('1020659119708975154').send({embeds: [{title: 'Embeds'}]})

        bot.emit('messageEmbedUpdate', bot)
    }
}

module.exports = Ready

// bot.channels.cache.get('вставляем айди канала')