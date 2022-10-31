import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {};
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type DesignSystemProps = typeof __propDef.props;
export declare type DesignSystemEvents = typeof __propDef.events;
export declare type DesignSystemSlots = typeof __propDef.slots;
export default class DesignSystem extends SvelteComponentTyped<DesignSystemProps, DesignSystemEvents, DesignSystemSlots> {
}
export {};
