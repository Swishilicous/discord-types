import { FluxStore } from '.';

export default class SelectedChannelStore extends FluxStore {
  getChannelId(e?: unknown): string;
  getLastChannelFollowingDestination(): unknown;
  getLastSelectedChannelId(): string;
  getMostRecentSelectedTextChannelId(e: unknown): unknown;
  getVoiceChannelId(): string | undefined;
  initialize(): void;
}
