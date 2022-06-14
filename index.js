const RPC = require("discord-rpc")
const opener = require("opener");
const rpc = new RPC.Client({
    transport: 'ipc'
});

rpc.on('ready', () => {
    
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
          
console.log("RPC online")
        
          
    })



opener("https://replit.com/");


})

rpc.login({

    clientId:"984849533974487130"

})























