export default class User {
  constructor(user: object);
  avatar: string | null;
  avatarDecoration: string | null | undefined;
  bot: boolean;
  desktop: boolean;
  discriminator: string;
  email: string | null;
  flags: number;
  globalName: string | null | undefined;
  guildMemberAvatars: Record<string, string>;
  hasBouncedEmail: boolean;
  id: string;
  mfaEnabled: boolean;
  mobile: boolean;
  nsfwAllowed: boolean | undefined;
  personalConnectionId: string | null;
  phone: string | null;
  premiumType: number | null;
  premiumUsageFlags: number;
  publicFlags: number;
  purchasedFlags: number;
  system: boolean;
  username: string;
  verified: boolean;

  get createdAt(): Date;
  get tag(): string;

  addGuildAvatarHash(guildId: string, avatarHash: string): User;
  getAvatarSource(
    guildId?: string,
    canAnimate?: boolean,
    size?: number
  ): { uri: string };
  getAvatarURL(guildId?: string, size?: number, canAnimate?: boolean): string;
  hasAnyStaffLevel(): boolean;
  hasAvatarForGuild(guildId: string): boolean;
  hasFlag(flag: number): boolean;
  hasFreePremium(): boolean;
  hasHadPremium(premiumType: number): boolean;
  hasHadSKU(skuId: string): boolean;
  hasPremiumUsageFlag(flag: number): boolean;
  hasPurchasedFlag(flag: number): boolean;
  hasUrgentMessages(): boolean;
  hasVerifiedEmailOrPhone(): boolean;
  isClaimed(): boolean;
  isClyde(): boolean;
  isLocalBot(): boolean;
  isNonUserBot(): boolean;
  isPhoneVerified(): boolean;
  isPomelo(): boolean;
  isStaff(): boolean;
  isStaffPersonal(): boolean;
  isSystemUser(): boolean;
  isVerifiedBot(): boolean;
  removeGuildAvatarHash(guildId: string): User;
  toString(): string;
}

export interface UserJSON {
  avatar: string;
  avatarDecoration: unknown | undefined;
  discriminator: string;
  id: string;
  publicFlags: number;
  username: string;
}
