export default class SelectedChannelStore {
  getChannelId(e?: unknown): string;
  getLastChannelFollowingDestination(): unknown;
  getLastSelectedChannelId(): string;
  getMostRecentSelectedTextChannelId(e: unknown): unknown;
  getVoiceChannelId(): string | undefined;
  initialize(): void;
}
