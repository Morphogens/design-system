import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        values?: [string, string] | undefined;
        defaultValue?: string | undefined;
        showLabels?: "left" | "right" | "none" | "both" | undefined;
        classes?: string | undefined;
        value?: {
            toggle: () => void;
            set(this: void, value: string): void;
            update(this: void, updater: import("svelte/store").Updater<string>): void;
            subscribe(this: void, run: import("svelte/store").Subscriber<string>, invalidate?: ((value?: string | undefined) => void) | undefined): import("svelte/store").Unsubscriber;
        } | undefined;
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
