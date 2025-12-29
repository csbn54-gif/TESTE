let clients: any[] = []

export function connect(ws: any) {
  clients.push(ws)

  ws.on('close', () => {
    clients = clients.filter(c => c !== ws)
  })
}

export function broadcast(data: any) {
  clients.forEach(c => c.send(JSON.stringify(data)))
}
