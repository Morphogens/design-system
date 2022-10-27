import { SvelteComponentTyped } from "svelte";
import type { ColorName, DesignSystemSize } from '$src/types';
declare const __propDef: {
    props: {
        size?: DesignSystemSize | undefined;
        backgroundColor?: ColorName | undefined;
        classes?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type StickerProps = typeof __propDef.props;
export declare type StickerEvents = typeof __propDef.events;
export declare type StickerSlots = typeof __propDef.slots;
export default class Sticker extends SvelteComponentTyped<StickerProps, StickerEvents, StickerSlots> {
}
export {};
