# Manual Discord Types (for Discord Client Mods)

Manually typing common discord webpack modules :)

Help would be greatly appreciated.

## Currently Typed:
- General Objects
- - User Class*
- - Guild Class*
- - Role Object*
- - Channel Class*
- - Embed Object*
- - Message Class*
- - Member Object
- Flux Stores
- - User Store
- - Guild Store
- - Channel Store
- - Message Store*
- - Relationships Store
- - Guild Member Store
- - Selected Channel Store*
- Other
- - Constants
- - FluxDispatcher*
- - CommandOptions
- - Actions
- - - UserActions*
- - JSON Generals (smaller general objects)
- - - UserJSON
- - - EmbedJSON
- - - MessageJSON

\* Most of it is typed but some if it is either typed as "unknown" or is just missing.

`Last updated: 4/10/2022`

---

## Installation
```
npm i -D discord-types
pnpm i -D discord-types
yarn add -D discord-types
```

## Intended Usage
```ts
import type { User, MemberStore, constants } from 'discord-types';
```

## Contributing
See [search_tools](https://github.com/Swishilicous/discord-types/blob/main/search_tools.md) for tools to find types.