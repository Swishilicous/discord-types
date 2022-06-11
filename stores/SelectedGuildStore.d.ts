import { FluxStore } from '.';

export interface SelectedGuildTimings {
  selectedGuildTimestampMillis: Record<string | number, number>;
}

export default class SelectedGuildStore extends FluxStore {
  getGuildId(): string | undefined;
  getLastSelectedGuildId(): string | undefined;
  getLastSelectedTimestamp(): string | undefined;
  getState(): SelectedGuildTimings | undefined;
  initialize(): void;
} 
