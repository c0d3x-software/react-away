/** it loads the env file and sets to env object */
export declare function load(that: any, loader: () => Promise<record>): Promise<void>;
/** validate if env file is ok */
export declare function validation(instance: any): boolean;
