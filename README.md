# Manual Discord Types (for Discord Client Mods)

Manually typing common discord webpack modules :)

Help would be greatly appreciated.

## Currently Typed:
- General Objects
- - User Class*
- - Guild Class*
- - Role Object*
- - Embed Object*
- - Member Object
- - Channel Class*
- - Message Class*
- Flux Stores
- - User Store
- - Guild Store
- - Member Store
- - Channel Store
- - Message Store*
- - Selected Store*
- Other
- - Constants
- - CommandOptions
- - JSON Generals (smaller general objects)
- - - UserJSON
- - - EmbedJSON
- - - MessageJSON

\* Most of it is typed but some if it is typed as "unknown"

`Last updated: 3/21/2022`

---

## Installation
```
npm install discord-types
pnpm add discord-types
```

## Intended Usage
```ts
import type { User, MemberStore, constants } from 'discord-types';
```