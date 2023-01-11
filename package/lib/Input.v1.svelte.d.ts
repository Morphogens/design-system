import { SvelteComponentTyped } from "svelte";
import type { InputType } from '$src/types';
declare const __propDef: {
    props: {
        size?: "xs" | "s" | undefined;
        classes?: string | undefined;
        style?: string | undefined;
        type?: InputType | undefined;
        value?: string | undefined;
        name?: string | undefined;
        autocomplete?: string | undefined;
        pattern?: string | undefined;
        placeholder?: string | undefined;
        disabled?: boolean | undefined;
        readonly?: boolean | undefined;
        required?: boolean | undefined;
    };
    events: {
        input: Event;
        change: Event;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type InputProps = typeof __propDef.props;
export declare type InputEvents = typeof __propDef.events;
export declare type InputSlots = typeof __propDef.slots;
export default class Input extends SvelteComponentTyped<InputProps, InputEvents, InputSlots> {
}
export {};
