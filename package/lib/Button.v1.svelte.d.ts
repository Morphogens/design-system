import { SvelteComponentTyped } from "svelte";
import type { DesignSystemSize } from '$src/types';
declare const __propDef: {
    props: {
        size?: DesignSystemSize | undefined;
        classes?: string | undefined;
        disabled?: boolean | undefined;
        href?: string | undefined | null;
        target?: string | undefined | null;
        rel?: string | undefined | null;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type ButtonProps = typeof __propDef.props;
export declare type ButtonEvents = typeof __propDef.events;
export declare type ButtonSlots = typeof __propDef.slots;
export default class Button extends SvelteComponentTyped<ButtonProps, ButtonEvents, ButtonSlots> {
}
export {};
