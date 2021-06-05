const tokenler = ["token1","token2"]
tokenler.forEach(a => {
    const ytdl = require("ytdl-core")
const {Client} = require("discord.js")
const client = new Client()
client.on("ready",() =>{
console.log(client.user.tag)
})
client.on("message", async msg => {
  if (msg.content.toLowerCase() === "!soksese") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("YOUTUBE MÜZİK LİNK", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});
client.login(a)
})
