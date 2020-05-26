import { Application } from 'https://deno.land/x/oak/mod.ts'
import router from "./rooter.ts";
const PORT = 2020
const HOST = 'localhost'

const app = new Application()
app.use(router.routes())
app.use(router.allowedMethods())


const HOST_PORT = `${HOST}:${PORT}`
console.log(`Listen on ${HOST_PORT}`)
app.listen(HOST_PORT)