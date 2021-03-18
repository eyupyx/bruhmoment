client.on('message', (msg) => {
  if (msg.content === 'Hello') msg.reply('Hi');
});
