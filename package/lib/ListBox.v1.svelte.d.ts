import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        title?: string | undefined;
        classes?: string | undefined;
        contentClasses?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type ListBoxProps = typeof __propDef.props;
export declare type ListBoxEvents = typeof __propDef.events;
export declare type ListBoxSlots = typeof __propDef.slots;
export default class ListBox extends SvelteComponentTyped<ListBoxProps, ListBoxEvents, ListBoxSlots> {
}
export {};
