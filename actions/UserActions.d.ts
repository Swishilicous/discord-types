import { User } from '../general';

export default interface UserActions {
  /**
   * Sends a PATCH request to `constants.Endpoints.USER_AGREEMENTS` with a body of `terms: boolean, privacy: boolean`.
   * 
   * The arguments determine wether or not to set either of them to false. By default, both are set to true.
   * @param terms Defaults to true.
   * @param privacy Defaults to true.
   */
  acceptAgreements(terms: boolean, privacy: boolean): Promise<boolean>;

  /**
   * Sends a PATCH request to `constants.Endpoints.USER_AGREEMENTS` with a body of `acknowledgment: true`.
   */
  acknowledgeTOSNotification(): Promise<boolean>;

  /**
   * There is a first argument but it seems to be used to supply a token that is used for analytics.
   */
  fetchCurrentUser(): Promise<User>;

  /**
   * Fetches the mutual friends of the current user with the povided user.
   * 
   * Does not return anything. Instead it dispatches an event to `LOAD_MUTUAL_FRIENDS`.
   */
  fetchMutualFriends(userId: string): void;

  /**
   * I don't know what the other arguments are for but you can just supply a userId for the first argument and it will asynchronously fetch the whole user.
   * 
   * This is a deeper fetch than {@link getUser} and will fetch all the user's data like bios ect.
   */
  fetchProfile(userId: string, n?: { friendToken: unknown; }, r?: (e: unknown, guildId: string) => unknown): {
    connected_accounts: {
      id: string;
      name: string;
      type: string;
      verified: boolean;
    }[];
    mutual_guilds: {
      id: string;
      nick: string | undefined;
    }[];
    premium_guild_since: string | undefined;
    premium_since: string | undefined;
    user: User;
  };

  /**
   * Asynchronously fetches a user's profile.
   * 
   * This will not get all user data like {@link fetchProfile} does.
   */
  getUser(userId: string): Promise<User>;

  setFlag(e: number, t?: boolean): unknown;
}
