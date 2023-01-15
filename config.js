const { Intents } = require('discord.js')

module.exports.internal = {
    token: 'OTQzNDkwMjMwODUyNDE1NTQ5.GVluob.vYyc5gvNjwYo6tCZQEu8M4nMBWzcSTg7JDp-is',
    mongoURL: 'mongodb+srv://privatevoicebase:ppwXTfEFqctAzWuN@cluster0.hqvgkob.mongodb.net/?retryWrites=true&w=majority'
}

module.exports.intents = [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MESSAGE_TYPING
]

module.exports.ids = {
    owner: "409061862223904779",
    messages: {
        privatrooms: '1064048470752763924' // убераем 2
    },
    guilds: {
        main: '936364515547811852'
    },
    channels: {
        text: {
            privatrooms: '1020659119708975154' // убераем 1
        },
        voice: {
            createPrivate: '1020659192765354064'
        },
        categories: {
            privatrooms: '1020659062259601478'
        }
    }
}

module.exports.permissions = {
    privateroom: {
        creator: {
            CREATE_INSTANT_INVITE: true,
            VIEW_CHANNEL: true,
            CONNECT: true,
            SPEAK: true,
            STREAM: true,
            USE_VAD: true,
            PRIORITY_SPEAKER: true,
            MANAGE_CHANNELS: false,
            MANAGE_ROLES: false,
            MANAGE_WEBHOOKS: false,
            MOVE_MEMBERS: false,
        }
    }
}