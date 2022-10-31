import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        classes?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type FlatToFlatProps = typeof __propDef.props;
export declare type FlatToFlatEvents = typeof __propDef.events;
export declare type FlatToFlatSlots = typeof __propDef.slots;
export default class FlatToFlat extends SvelteComponentTyped<FlatToFlatProps, FlatToFlatEvents, FlatToFlatSlots> {
}
export {};
