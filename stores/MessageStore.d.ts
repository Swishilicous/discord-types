import { FluxStore } from '.';
import { Message, MessageJSON } from '../general';

export default class MessageStore extends FluxStore {
  getMessage(channelId: string, messageId: string): Message;
  /** @returns This return object is fucking huge; I'll type it later. */
  getMessages(channelId: string): unknown;
  getRawMessages(channelId: string): Record<string | number, MessageJSON>;
  hasCurrentUserSentMessage(channelId: string): boolean;
  hasPresent(channelId: string): boolean;
  isLoadingMessages(channelId: string): boolean;
  jumpedMessageId(channelId: string): string | undefined;
  whenReady(e: unknown, callback: Function): void;
  initialize(): void;
}
