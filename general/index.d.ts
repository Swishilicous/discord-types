export { default as Channel } from './Channel';
export { default as Guild } from './Guild';
export { default as GuildMember } from './GuildMember';
export { default as Role } from './Role';

export {
  EmbedJSON,
  default as Embed,
} from './Embed';

export {
  JSMessage,
  MessageJSON,
  ReactionEmoji,
  MessageReaction,
  MessageAttachment,
  default as Message,
} from './Message';

export {
  UserJSON,
  default as User,
} from './User';

export interface CommandOptions {
  type: number;
  name: string;
  description: string;
  required?: boolean;
  choices?: {
    name: string;
    values: string | number;
  }[];
  options?: CommandOptions[];
  channel_types?: number[];
  min_value?: number;
  max_value?: number;
  autocomplete?: boolean;
}
