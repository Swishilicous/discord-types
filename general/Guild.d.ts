import User from './User';
import Role from './Role';

export default class Guild {
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
  vanityURLCode: string | undefined;
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
