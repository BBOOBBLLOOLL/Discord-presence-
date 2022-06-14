const RPC = require("discord-rpc")
const opener = require("opener");
const clientid = "Client Id"
const rpc = new RPC.Client({
    transport: 'ipc'
});

rpc.on('ready', () => {
    console.log("RPC online")
      rpc.setActivity({
          details:'Editing index.js',
          state:'Flamingo Bot v13',
          startTimestamp: new Date(),
          largeImageKey:'https://play-lh.googleusercontent.com/HHOYPEvrlSEcy9Ldxf4lVf88m9NdgmNelO--2kDUrxmf_shVUElRTkNIiopJApBAYvwq',
          largeImageText:'Replit.com',
          smallImageKey:'https://brandslogos.com/wp-content/uploads/thumbs/nodejs-icon-logo.png',
          smallImageText:'Node.js',
          buttons: [{
              label: 'Replit.com',
              url: 'https://replit.com'
          }]
          

        
          
    })



opener("https://replit.com/");


})

rpc.login({

    clientId:clientid

})
