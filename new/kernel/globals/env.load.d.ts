/** it loads the env file and sets to env object */
export declare function load(that: any, delegate: () => Promise<object>): Promise<void>;

/** validate if env file is ok */
export declare function validation(instance: any): boolean;
