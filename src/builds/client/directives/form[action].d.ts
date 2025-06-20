import { UpdateArgs } from '../typings';
/** Action binding sets [action] as RESTful request */
export declare function action(args: UpdateArgs): Promise<void>;
export declare const getDefaultError: (code: number) => "Invalid request" | "URL not found" | "Error" | "Internal serve error...";
