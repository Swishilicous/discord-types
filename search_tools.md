# Search Tools
I am assuming that you know how to use webpack search so if you get "Webpack" is not defined or something similar then this is above your skill level but if you still want to help you can message me and I'll happily respond!

Also these methods don't only pertain to typing stuff so if you understand what they do you can probably use them for other cases not related to typing stuff!

Also yes, I know how getByProps works I'm just using a predicate filter because it's more universal and I don't know maybe someones using a shitty webpack search like powerCord's to search these.

---
### Copy constants to your clipboard:
```js
const constants = Webpack.getModule(m => m.AbortCodes);
const formatted = JSON.stringify(constants, null, '\t');

DiscordNative.clipboard.copy(formatted);
```
---
### Search for a value in all cached guilds:
```js
const searchGuilds = (value) => {
  return Object.values(Webpack.getModule(m => m.getGuildCount).getGuilds())
    .map(g => g[value])
      .filter(v => Array.isArray(v) ? v.length : v);
};

searchGuilds('banner');
```
---
### Search for a value in all cached messages:
```js
const searchMessages = (value) => {
  return Object.values(Webpack.getModule(m => m._channelMessages)._channelMessages)
    .map(v => v._array.map(m => m[value])
      .filter(v => Array.isArray(v) ? v.length : v))
        .filter(v => v.length);
};

searchMessages('content');
```
---
### Search for a value in all cached users:
```js
const searchUsers = (value) => {
  return Object.values(Webpack.getModule(m => m.getCurrentUser && m.getUser).getUsers())
    .map(u => u[value])
      .filter(v => Array.isArray(v) ? v.length : v);
};

searchUsers('username');
```
---
### Search for a value in all cached guild channels and threads:
Doesn't search DM channels as I'm using the GuildChannelStore. I'll make one for DM channels eventually but laaazy.
```js
const searchGuildChannels = (value) => {
  const ChannelStore = Webpack.getModule(m => m.getDMUserIds);
  const GuildChannelStore = Webpack.getModule(m => m.getAllGuilds).getAllGuilds();

  return Object.values(Object.fromEntries(Object.entries(GuildChannelStore).filter(([key]) => key !== '@favorites')))
    .map(g => g && Object.values(g)
      .map(c => Array.isArray(c) && c
        .map(subc => subc && ChannelStore.getAllThreadsForParent(subc.channel.id)
          .concat(subc.channel).map(c => c[value]))))
    .flat(Infinity).filter(Boolean);
};

searchGuildChannels('rtcRegion');
```