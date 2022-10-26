import type { Props } from 'tippy.js';
export declare function makeTooltipVideo(src: any): HTMLVideoElement;
export default function tooltip(node: HTMLElement, params?: Partial<Props>): {
    update?: undefined;
    destroy?: undefined;
} | {
    update: (newParams: any) => void;
    destroy: () => void;
} | undefined;
