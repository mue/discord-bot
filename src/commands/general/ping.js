module.exports = {
  name: 'ping',
  category: 'General',
  description: 'Get the bot ping',
  async execute(client, msg, _args) {
    const m = await msg.channel.send(':ping_pong: Pinging...');
    m.edit(
      `Latency: **${m.createdTimestamp - msg.createdTimestamp}**ms\nAPI Latency: **${Math.round(
        client.ws.ping,
      )}**ms`,
    );
  },
};
