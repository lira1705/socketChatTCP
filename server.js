const net = require('net')

let users = []

const handleConnection = socket => {
    socket.write('Welcome to the chat UOL! Please, type your name')
    socket.on('end', () => {
        removeUser(socket)

    })
    socket.on('error', (error) => {
        console.log(error)
    })

    socket.on('data', (data) => {
        const msg = data.toString()
        if (socket.name == null) {
            addUser(socket, msg)
        }
        else if (msg === 'end') {
            socket.end()
        } else {
            sendMessage(socket, msg)
        }
    })
}

const addUser = (socket, name) => {
    const userIndex = users.findIndex(user => {
        return user.name == name
    })
    if (userIndex < 0) {
        socket.name = name
        users.push({name, socket})
        socket.write(`It is a pleasure, ${socket.name}!`)
        sendUserStatusMessage(socket, 'newConnection')
        return
    }
    socket.write('This name is already being used! Please, type another name')
}

const removeUser = (socket) => {
    users = users.filter(user => user.name != socket.name)
    sendUserStatusMessage(socket, 'end')
}

const sendUserStatusMessage = (socket, status) => {
    for (const user of users) {
        if (user.name != socket.name) {
            user.socket.write(status == 'end' ?  `${socket.name} left chat.` : `${socket.name} entered in the chat.`)
        }
    }
}

const sendMessage = (socket, msg) => {
    for (const user of users) {
        if (user.name != socket.name) {
            user.socket.write(`${socket.name}: ${msg}`)
        }
    }
}

const server = net.createServer(
    handleConnection
)

server.listen(4000, '127.0.0.1')