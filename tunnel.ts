const Tunnel = () => (webPort: number){
    const localtunnel = require('localtunnel');

    (async () => {
      const tunnel = await localtunnel({ port: webPort });
    
      // the assigned public url for your tunnel
      // i.e. https://abcdefgjhij.localtunnel.me
      tunnel.url;
    
      console.log(tunnel.url);
    
      tunnel.on('close', () => {
        // tunnels are closed
      });
    })();
}

export default Tunnel