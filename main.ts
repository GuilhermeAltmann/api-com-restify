import {Server} from './server/server'
import {usersRouter} from './users/users.router'
const server = new Server()
server.boostrap([usersRouter]).then(server =>{
    console.log("Server is listening:", server.application.address())
}).catch(error =>{
    console.log('error:',error)
    process.exit(1)
})