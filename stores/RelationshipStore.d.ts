import { FluxStore } from '.';

export default class RelationshipStore extends FluxStore {
  getFriendIDs(): string[];
  /** Related to friend nicknames experiment. */
  getNickname(userId: string): string;
  getPendingCount(): number;
  getRelationshipCount(): number;
  /** @returns Enum value from constants.RelationshipTypes */
  getRelationshipType(userId: string): number;
  /** @returns Format: [userId: Enum value from constants.RelationshipTypes] */
  getRelationships(): Record<number, number>;
  isBlocked(userId: string): boolean;
  isFriend(userId: string): boolean;
}
