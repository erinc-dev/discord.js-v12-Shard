const ayarlar = require('./ayarlar.json');
const { ShardingManager } = require('discord.js');
const shard = new ShardingManager('./index.js', {
  token: ayarlar.token,
  autoSpawn: true
});

shard.spawn(2);

shard.on('launch', shard => console.log(`[SHARD] Shard ${shard.id}/${shard.totalShards}`));
