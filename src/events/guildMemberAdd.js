module.exports = async (client, member) => {
  member.guild.channels.cache
    .find((channel) => channel.id === client.config.welcome_channel)
    .send(
      `Welcome **${member.user.username}** (<@${member.user.id}>) to the Mue Discord community!`,
    );
};
