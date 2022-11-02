import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        href?: string | undefined | null;
        target?: string | undefined;
        classes?: string | undefined;
        style?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type MaybeLinkProps = typeof __propDef.props;
export declare type MaybeLinkEvents = typeof __propDef.events;
export declare type MaybeLinkSlots = typeof __propDef.slots;
export default class MaybeLink extends SvelteComponentTyped<MaybeLinkProps, MaybeLinkEvents, MaybeLinkSlots> {
}
export {};
