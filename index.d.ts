declare class YouCache {
  /**
   * Creates a new YouCache instance
   * @param {string} name - Name of the cache
   **/
  constructor(name: string);
  /**
   * Adds a file to the cache
   * @param {string} filePath - Path of the file to add
   **/
  add(filePath: string, content: string): Promise<void>;
  /**
   * Create a path for the file to be cached
   * @param {string} filePath - Path of the file to add
   * @returns {string} - Path of the file
   **/
  addForPath(filePath: string): Promise<string>;
  /**
   * Removes a file from the cache
   * @param {string} filePath - Path of the file to remove
   **/
  remove(filePath: string): Promise<void>;
  /**
   * Gets a file from the cache
   * @param {string} filePath - Path of the file to get
   * @returns {string | null} - Path of the file or null if not found
   **/
  get(filePath: string): Promise<string | null>;
  /**
   * Removes the cache
   **/
  delete(): void;
  /**
   * Clears the cache
   **/
  clear(): void;
}

export = YouCache;
export as namespace YouCache;
