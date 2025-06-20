import { HTML } from "../typings/form";
import { SubmitEvent, SubmitReturn } from "../typings/form";
import { Props } from "./form[data]";
import '../../kernel/extensions';
export declare const onSubmit: (props: any, params: any) => (e: SubmitEvent) => void;
/** form[data] for reactive rendering after submit the form  */
export declare function validate(props: Props, e: SubmitEvent): SubmitReturn;
/** get invalidated inputs */
export declare function getInvalidInputs(props: Props, inputs: HTML[]): any;
