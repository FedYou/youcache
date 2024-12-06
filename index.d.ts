interface Return {
  path: string
  hash: string
}

declare class YouCache {
  /**
   * Creates a new YouCache instance
   * @param {string} name - Name of the cache
   **/
  constructor(name: string)
  /**
   * Path of cache in on-device
   */
  path: string
  /**
   * Add a new file in the cache
   * @param {string} path - Path of the file to add
   * @param {any} content - Content of the file to add
   * @returns - Path of the file added and file hash
   */
  add(path: string, content: any): Promise<Return>
  /**
   * Get the path of a file in the cache
   * @param {string} path - Path of the file to get
   * @returns - Path of the file in the cache and file hash
   */
  get(path: string): Promise<Return> | null
  /**
   * Create a new file path, does not add file to cache
   * @param path - Path of the file to get
   * @returns - Path of the file in the cache and file hash
   */
  create(path: string): Promise<Return>
  /**
   * Remove a file from the cache
   * @param {string} path - Path of the file to remove
   */
  remove(path: string): Promise<void>
}

export = YouCache
export as namespace YouCache
