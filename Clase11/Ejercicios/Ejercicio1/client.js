const net = require('net')

const client=net.createConnection({port:8080 } , ()=>{
    console.log('Conectado al servidor');
    
    //Ruta absoluta
    client.write('/home/user/documeto.txt')

    //Ruta Relativa
    client.write('documeto.txt')

    //Ruta Absoluta
    client.write('/home/ususrios/file.txt')
})

client.on('data',(data)=>{
    console.log(data.toString());
    client.end()
    
})

client.on('end', ()=>{
    console.log('Desconectado del servidor');
    
})

