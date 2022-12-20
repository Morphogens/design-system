import { SvelteComponentTyped } from "svelte";
import type { BinaryWritable } from '$src/types';
declare class __sveltets_Render<T> {
    props(): {
        values?: [T, T] | undefined;
        defaultValue?: T | undefined;
        showLabels?: "left" | "right" | "none" | "both" | undefined;
        classes?: string | undefined;
        value?: BinaryWritable<T> | undefined;
    };
    events(): {
        change: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {};
}
export declare type SwitchProps<T> = ReturnType<__sveltets_Render<T>['props']>;
export declare type SwitchEvents<T> = ReturnType<__sveltets_Render<T>['events']>;
export declare type SwitchSlots<T> = ReturnType<__sveltets_Render<T>['slots']>;
export default class Switch<T> extends SvelteComponentTyped<SwitchProps<T>, SwitchEvents<T>, SwitchSlots<T>> {
}
export {};
