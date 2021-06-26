import 'module-alias/register'
import app from './config/app'
import env from './config/env'

app.listen(env.port, () => console.log(`Server Running at http://localhost:${env.port}`))
