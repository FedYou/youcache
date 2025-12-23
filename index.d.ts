declare class YouCache {
  /**
   * Creates a new YouCache instance
   * @param name - Name of the cache
   **/
  constructor(name: string)
  /**
   * Path of cache in on-device
   */
  path: string
  /**
   * Clears the cache asynchronously
   */
  clear(): Promise<void>
  /**
   * Clears the cache synchronously
   */
  clearSync(): void
}

export = YouCache
export as namespace YouCache
