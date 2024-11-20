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
   **/
  addForPath(filePath: string): Promise<string>;
  /**
   * Removes a file from the cache
   * @param {string} filePath - Path of the file to remove
   **/
  remove(filePath: string): Promise<void>;
  /**
   * Gets the path of the cache file
   * @param {string} filePath - Path of the file to get
   **/
  getForPath(filePath: string): Promise<string | null>;
  /**
   * Gets the path of the cache file with hash of the file
   * @param {string} hash - Path of the file to get
   **/
  getForHash(hash: string): string | null;
  /**
   * Gets the hash of file
   * @param {string} filePath - Path of the file to get
   **/
  getHash(filePath: string): Promise<string>;
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
