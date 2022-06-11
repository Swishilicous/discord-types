export { default as ChannelStore } from './ChannelStore';
export { default as GuildMemberStore } from './GuildMemberStore';
export { default as GuildStore } from './GuildStore';
export { default as MessageStore } from './MessageStore';
export { default as RelationshipStore } from './RelationshipStore';
export { default as SelectedChannelStore } from './SelectedChannelStore';
export { default as SelectedGuildStore } from './SelectedGuildStore';
export { default as UserStore } from './UserStore';

export class FluxStore {
  addChangeListener(listener: () => void): void;
  addConditionalChangeListener(removeListener: () => boolean, t?: boolean): void;
  emitChange(): void;
  getDispatchToken(): string;
  getName(): string;
  hasChangeCallbacks(): boolean;
  initialize(): void;
  initializeIfNeeded(): void;
  mustEmitChanges(conditional?: (t?: unknown) => boolean): void;
  removeChangeListener(listener: () => void): void;
  syncWith(stores: FluxStore[], emitChange: boolean, delay?: number): void;
  waitFor(...stores: FluxStore[]): void;
}
