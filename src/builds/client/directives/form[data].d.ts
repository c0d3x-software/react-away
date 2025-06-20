declare const _default: string[];
export default _default;
export interface Props<T extends object = object> {
    data: T;
    children?: any;
    onFetch?: OnFetchEvent;
    onSubmit?: OnSubmitEvent;
    onValidate?: OnValidateEvent;
}
/** react-away forms as form[data] and children[bind]
 * with RESTful actions and validation api */
export declare function formProps(props: Props, params: Params): any;
export declare function clearProps(props: any): any;
