if (reaction.message.channel.id == '802209416685944862') {
  if (reaction.emoji.name === '🦊') {
    await reaction.message.guild.members.cache
      .get(user.id)
      .roles.add('802208163776167977');
  }
  if (reaction.emoji.name === '🐯') {
    await reaction.message.guild.members.cache
      .get(user.id)
      .roles.add('802208242696192040');
  }
  if (reaction.emoji.name === '🐍') {
    await reaction.message.guild.members.cache
      .get(user.id)
      .roles.add('802208314766524526');
  }
} else return;
