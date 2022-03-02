import * as Stores from './lib/stores';
import * as General from './lib/general';

import constants from './lib/constants';

export { Stores, General, constants };

export type UserStore = Stores.UserStore;
export type GuildStore = Stores.GuildStore;
export type MemberStore = Stores.MemberStore;
export type ChannelStore = Stores.ChannelStore;
export type SelectedStore = Stores.SelectedStore;

export type User = General.User;
export type Role = General.Role;
export type Guild = General.Guild;
export type Member = General.Member;
export type Channel = General.Channel;