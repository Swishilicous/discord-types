import * as Other from './lib/other';
import * as Stores from './lib/stores';
import * as General from './lib/general';
import * as Actions from './lib/actions';

import constants from './lib/constants';

export { Stores, General, Actions, Other };

export type constants = typeof constants;

export type UserStore = Stores.UserStore;
export type GuildStore = Stores.GuildStore;
export type ChannelStore = Stores.ChannelStore;
export type MessageStore = Stores.MessageStore;
export type GuildMemberStore = Stores.GuildMemberStore;
export type RelationshipStore = Stores.RelationshipStore;
export type SelectedChannelStore = Stores.SelectedChannelStore;

export type User = General.User;
export type Role = General.Role;
export type Guild = General.Guild;
export type Embed = General.Embed;
export type Member = General.Member;
export type Channel = General.Channel;
export type Message = General.Message;

export type UserJSON = General.UserJSON;
export type EmbedJSON = General.EmbedJSON;
export type MessageJSON = General.MessageJSON;
export type CommandOptions = General.CommandOptions;
export type MessageAttachment = General.MessageAttachment;

export type UserActions = typeof Actions.UserActions;

export type FluxDispatcher = Other.FluxDispatcher;