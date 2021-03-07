const { cms } = require('@tensei/cms')
const { auth } = require('@tensei/auth')
const { media } = require('@tensei/media')
const { tensei } = require('@tensei/core')
const { rest } = require('@tensei/rest')

const { next } = require('@tensei/next')

tensei()
    .root(__dirname)
    .plugins([
        cms().plugin(),
        media().plugin(),
        auth()
            .cookieSessions()
            .plugin(),
        next().plugin(),
        rest().plugin(),
    ])
    .start()
    .catch(console.error)
