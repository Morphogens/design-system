import { SvelteComponentTyped } from "svelte";
import { type Writable } from 'svelte/store';
declare const __propDef: {
    props: {
        values?: [string, string] | undefined;
        defaultValue?: string | undefined;
        showLabels?: "left" | "right" | "none" | "both" | undefined;
        classes?: string | undefined;
        value?: (Writable<string> & {
            toggle: () => void;
        }) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type SwitchProps = typeof __propDef.props;
export declare type SwitchEvents = typeof __propDef.events;
export declare type SwitchSlots = typeof __propDef.slots;
export default class Switch extends SvelteComponentTyped<SwitchProps, SwitchEvents, SwitchSlots> {
}
export {};
