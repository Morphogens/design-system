import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        title?: string | undefined;
        detail?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        title: {};
        detail: {};
        action: {};
    };
};
export declare type ListItemProps = typeof __propDef.props;
export declare type ListItemEvents = typeof __propDef.events;
export declare type ListItemSlots = typeof __propDef.slots;
export default class ListItem extends SvelteComponentTyped<ListItemProps, ListItemEvents, ListItemSlots> {
}
export {};
