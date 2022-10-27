import { SvelteComponentTyped } from "svelte";
import type { ColorName, DesignSystemSize } from '$src/types';
declare const __propDef: {
    props: {
        size?: DesignSystemSize | undefined;
        backgroundColor?: ColorName | undefined;
        disabled?: boolean | undefined;
        classes?: string | undefined;
        href?: string | undefined | null;
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
