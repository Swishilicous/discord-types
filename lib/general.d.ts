import moment from 'moment';

export class User {
  constructor(user: object);
  accentColor: number;
  avatar: string;
  banner: string;
  bio: string;
  bot: boolean;
  desktop: boolean;
  discriminator: string;
  email: string | undefined;
  flags: number;
  guildMemberAvatars: Record<string, string>;
  id: string;
  mfaEnabled: boolean;
  mobile: boolean;
  nsfwAllowed: boolean | undefined;
  phone: string | undefined;
  premiumType: number | undefined;
  premiumUsageFlags: number;
  publicFlags: number;
  purchasedFlags: number;
  system: boolean;
  username: string;
  verified: boolean;

  get createdAt(): Date;
  get hasPremiumPerks(): boolean;
  get tag(): string;
  get usernameNormalized(): string;

  addGuildAvatarHash(guildId: string, avatarHash: string): User;
  getAvatarSource(guildId: string, canAnimate?: boolean): { uri: string; };
  getAvatarURL(guildId?: string, t?: unknown, canAnimate?: boolean): string;
  hasAvatarForGuild(guildId: string): boolean;
  hasDisabledPremium(): boolean;
  hasFlag(flag: number): boolean;
  hasFreePremium(): boolean;
  hasHadSKU(e: unknown): boolean;
  hasPremiumUsageFlag(flag: number): boolean;
  hasPurchasedFlag(flag: number): boolean;
  hasUrgentMessages(): boolean;
  isClaimed(): boolean;
  isLocalBot(): boolean;
  isNonUserBot(): boolean;
  isPhoneVerified(): boolean;
  isStaff(): boolean;
  isSystemUser(): boolean;
  isVerifiedBot(): boolean;
  removeGuildAvatarHash(guildId: string): User;
  toString(): string;
}

export interface UserJSON {
  avatar: string;
  discriminator: string;
  id: string;
  publicFlags: number;
  username: string;
}

export class Channel {
  constructor(channel: object);
  application_id: number | undefined;
  bitrate: number;
  defaultAutoArchiveDuration: number | undefined;
  flags: number;
  guild_id: string;
  icon: string;
  id: string;
  lastMessageId: string;
  lastPinTimestamp: string | undefined;
  member: unknown;
  memberCount: number | undefined;
  memberIdsPreview: string[] | undefined;
  memberListId: unknown;
  messageCount: number | undefined;
  name: string;
  nicks: Record<string, unknown>;
  nsfw: boolean;
  originChannelId: unknown;
  ownerId: string;
  parent_id: string;
  permissionOverwrites: {
    [role: string]: {
      id: string;
      type: number;
      deny: bigint;
      allow: bigint;
    };
  };
  position: number;
  rateLimitPerUser: number;
  rawRecipients: {
    id: string;
    avatar: string;
    username: string;
    public_flags: number;
    discriminator: string;
  }[];
  recipients: string[];
  rtcRegion: string;
  threadMetadata: {
    locked: boolean;
    archived: boolean;
    invitable: boolean;
    createTimestamp: string | undefined;
    autoArchiveDuration: number;
    archiveTimestamp: string | undefined;
  };
  topic: string;
  type: number;
  userLimit: number;
  videoQualityMode: undefined;

  get accessPermissions(): bigint;
  get lastActiveTimestamp(): number;

  computeLurkerPermissionsAllowList(): unknown;
  getApplicationId(): unknown;
  getGuildId(): string;
  getRecipientId(): unknown;
  hasFlag(flag: number): boolean;
  isActiveThread(): boolean;
  isArchivedThread(): boolean;
  isCategory(): boolean;
  isDM(): boolean;
  isDirectory(): boolean;
  isForumChannel(): boolean;
  isGroupDM(): boolean;
  isGuildStageVoice(): boolean;
  isGuildVoice(): boolean;
  isListenModeCapable(): boolean;
  isManaged(): boolean;
  isMultiUserDM(): boolean;
  isNSFW(): boolean;
  isOwner(): boolean;
  isPrivate(): boolean;
  isSystemDM(): boolean;
  isThread(): boolean;
  isVocal(): boolean;
}

export class Guild {
  constructor(guild: object);
  afkChannelId: string | undefined;
  afkTimeout: number;
  applicationCommandCounts: Record<number, number>;
  application_id: unknown;
  banner: string | undefined;
  defaultMessageNotifications: number;
  description: string | undefined;
  discoverySplash: string | undefined;
  explicitContentFilter: number;
  features: Set<string>;
  hubType: unknown;
  icon: string | undefined;
  id: string;
  joinedAt: Date;
  maxMembers: number;
  maxVideoChannelUsers: number;
  mfaLevel: number;
  name: string;
  nsfwLevel: number;
  ownerId: string;
  preferredLocale: string;
  premiumProgressBarEnabled: boolean;
  premiumSubscriberCount: number;
  premiumTier: number;
  publicUpdatesChannelId: string | undefined;
  roles: Record<string, Role>;
  rulesChannelId: string;
  splash: string;
  systemChannelFlags: number;
  systemChannelId: string;
  vanityURLCode: null;
  verificationLevel: number;

  get acronym(): string;

  getApplicationId(): unknown;
  getIconSource(size: string | number, canAnimate: boolean): { uri: string; };
  getIconURL(size: string | number, canAnimate: boolean): string;
  getMaxEmojiSlots(): number;
  getRole(roleId: string): Role;
  hasFeature(feautre: string): boolean;
  hasVerificationGate(): boolean;
  isLurker(): boolean;
  isNew(newerThanDays?: number): boolean;
  isOwner(user: User): boolean;
  isOwnerWithRequiredMfaLevel(user: User): boolean;
  toString(): string; // override that is identical to Guild.name
}

/*
  If you want to help find the unknown props:
  
  Object.values(Webpack.getModule(m => m._channelMessages)._channelMessages)
    .map(v => v._array.map(v => v.{PUT THE VALUE HERE})
      .filter(v => Array.isArray(v) ? v.length : !!v)).filter(v => v.length)
*/
export class Message {
  constructor(message: object);
  activity: unknown;
  application: unknown;
  applicationId: unknown;
  attachments: MessageAttachment[];
  author: User;
  blocked: boolean;
  bot: boolean;
  call: {
    duration: moment.Duration;
    endedTimestamp: moment.Moment;
    participants: string[];
  };
  channel_id: string;
  /* not fully typed: */
  codedLinks: {
    code?: string;
    type: string;
  }[];
  colorString: unknown;
  components: unknown[];
  content: string;
  customRenderedContent: unknown;
  editedTimestamp: moment.Moment;
  embeds: Embed[];
  flags: number;
  giftCodes: string[];
  id: string;
  interaction: {
    id: string;
    name: string;
    type: number;
    user: User;
  }[] | undefined;
  interactionData: {
    application_command: {
      application_id: string;
      default_member_permissions: unknown;
      default_permission: boolean;
      description: string;
      dm_permission: unknown;
      id: string;
      name: string;
      options: CommandOptions[];
      permissions: unknown[];
      type: number;
      version: string;
    };
    attachments: MessageAttachment[];
    guild_id: string | undefined;
    id: string;
    name: string;
    options: {
      focused: unknown;
      name: string;
      type: number;
      value: string;
    }[];
    type: number;
    version: string;
  }[];
  interactionError: unknown[];
  isSearchHit: boolean;
  loggingName: unknown;
  mentionChannels: string[];
  mentionEveryone: boolean;
  mentionRoles: string[];
  mentioned: boolean;
  mentions: string[];
  messageReference: {
    guild_id?: string;
    channel_id: string;
    message_id: string;
  } | undefined;
  nick: unknown; // probably a string
  nonce: string | undefined;
  pinned: boolean;
  reactions: MessageReaction[];
  state: string;
  stickerItems: {
    format_type: number;
    id: string;
    name: string;
  }[];
  stickers: unknown[];
  timestamp: moment.Moment;
  tts: boolean;
  type: number;
  webhookId: string | undefined;

  /** @note Doesn't actually update the original message; it just returns a new message instance with the added reaction. */
  addReaction(emoji: ReactionEmoji, fromCurrentUser: boolean): Message;
  /** @note Searches each reaction and if the provided string has an index above -1 it'll return the reaction object. */
  getReaction(name: string): MessageReaction;
  /** @note Doesn't actually update the original message; it just returns the message instance without the reaction searched with the provided emoji object.  */
  removeReactionsForEmoji(emoji: ReactionEmoji): Message;
  /** @note Doesn't actually update the original message; it just returns the message instance without the reaction.*/
  removeReaction(emoji: ReactionEmoji, fromCurrentUser: boolean): Message;

  getChannelId(): string;
  hasFlag(flag: number): boolean;
  isCommandType(): boolean;
  isEdited(): boolean;
  isSystemDM(): boolean;

  /** @note Returns the entire object (minus the prototype functions because it's not a class anymore) but with 3 additional props that are aliases. */
  toJS(): JSMessage;
}

interface JSMessage extends Message {
  webkhook_id: string | undefined;
  edited_timestamp: moment.Moment;
  mention_everyone: boolean;
}

/** @note A smaller Message object found in FluxDispatcher and elsewhere. */
export interface MessageJSON {
  attachments: MessageAttachment[];
  author: UserJSON;
  channel_id: string;
  components: unknown[];
  content: string;
  edited_timestamp: string;
  embeds: Embed[];
  flags: number;
  guild_id: string | undefined;
  id: string;
  member: {
    avatar: string | undefined;
    communication_disabled_until: string | undefined;
    deaf: boolean;
    hoisted_role: string | undefined;
    is_pending: boolean;
    joined_at: string;
    mute: boolean;
    nick: string | boolean;
    pending: boolean;
    premium_since: string | undefined;
    roles: string[];
  } | undefined;
  mention_everyone: boolean;
  mention_roles: string[];
  mentions: UserJSON[];
  message_reference: {
    guild_id?: string;
    channel_id: string;
    message_id: string;
  } | undefined;
  nonce: string | undefined;
  pinned: boolean;
  referenced_message: MessageJSON | undefined;
  timestamp: string;
  tts: boolean;
  type: number;
}

export interface Embed {
  author?: {
    iconProxyURL: string | undefined;
    iconURL: string | undefined;
    name: string;
    url: string;
  };
  color: string;
  fields: [];
  id: string;
  provider?: {
    name: string;
    url: string;
  };
  rawDescription: string;
  rawTitle: string;
  referenceId: unknown;
  thumbnail?: {
    height: number;
    proxyURL: string | undefined;
    url: string;
    width: number;
  };
  type: string;
  url: string | undefined;
  video?: {
    height: number;
    proxyURL: string | undefined;
    url: string;
    width: number;
  };
}

export interface Member {
  avatar: string | undefined;
  banner: string | undefined;
  bio: string;
  colorString: string;
  communicationDisabledUntil: string | undefined;
  fullProfileLoadedTimestamp: number;
  guildId: string;
  hoistRoleId: string;
  iconRoleId: string;
  isPending: boolean | undefined;
  joinedAt: string | undefined;
  nick: string | undefined;
  premiumSince: string | undefined;
  roles: string[];
  userId: string;
}

export interface Role {
  color: number;
  colorString: string | undefined;
  hoist: boolean;
  icon: string | undefined;
  id: string;
  managed: boolean;
  mentionable: boolean;
  name: string;
  originalPosition: number;
  permissions: bigint;
  position: number;
  tags: { // I'm sure there are more.
    bot_id: string;
    integration_id: string;
    premium_subscriber: unknown;
  } | undefined;
  unicodeEmoji: string | undefined;
}

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

export interface MessageAttachment {
  filename: string;
  id: string;
  proxy_url: string;
  size: number;
  spoiler: boolean;
  url: string;
  content_type?: string;
  width?: number;
  height?: number;
}

interface ReactionEmoji {
  id: string | undefined;
  name: string;
  animated: boolean;
}

interface MessageReaction {
  count: number;
  emoji: ReactionEmoji;
  me: boolean;
}