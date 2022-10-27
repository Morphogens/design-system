import { SvelteComponentTyped } from "svelte";
import type { DesignSystemSize } from '$src/types';
declare const __propDef: {
    props: {
        size: DesignSystemSize;
        classes?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type TitleProps = typeof __propDef.props;
export declare type TitleEvents = typeof __propDef.events;
export declare type TitleSlots = typeof __propDef.slots;
export default class Title extends SvelteComponentTyped<TitleProps, TitleEvents, TitleSlots> {
}
export {};
