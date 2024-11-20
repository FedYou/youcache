declare class YouCache {
  /**
   * Creates a new YouCache instance
   * @param {string} name - Name of the cache
   **/
  constructor(name: string);
  /**
   * create a file in the cache
   * @param {string} filePath - Path of the file to add
   * @param {string} content - Content of the file to add
   * @returns {Promise<string>} - Path of the file in the cache
   **/
  create(filePath: string, content: string): Promise<string>;
  /**
   * Create a path for the file to be cached
   * @param {string} filePath - Path of the file to add
   * @returns {Promise<string>} - Path of the file in the cache
   **/
  createPath(filePath: string): Promise<string>;
  /**
   * Create a hash for the file to be cached
   * @param {string} filePath - Path of the file to add
   * @returns {Promise<string>} - Hash of the file
   **/
  /**
   * Create a hash for the file to be cached
   * @param {string} filePath - Path of the file to add
   * @returns {Promise<string>} - Hash of the file
   **/
  createHash(filePath: string): Promise<string>;
  /**
   * Add a file to the cache
   * @param {string} filePath - Path of the file to add
   * @returns {Promise<string>} - Path of the file in the cache
   **/
  add(filePath: string): Promise<string>;
  /**
   * Create a path for the file to be cached
   * @param {string} filePath - Path of the file to add
   **/
  getForHash(hash: string): string;
  /**
   * Get a file from the cache
   * @param {string} filePath - Path of the file to get
   * @returns {Promise<string>} - Path of the file in the cache
   **/
  get(filePath: string): Promise<string>;
  /**
   * Remove a file from the cache
   * @param {string} filePath - Path of the file to remove
   **/
  remove(filePath: string): Promise<void>;

  delete(): void;
  /**
   * Clears the cache
   **/
  clear(): void;
}

export = YouCache;
export as namespace YouCache;
