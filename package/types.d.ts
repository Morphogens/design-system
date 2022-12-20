import type { Writable } from 'svelte/store';
export declare type DesignSystemSize = 's' | 'm' | 'l' | 'xl' | 'xxl';
export declare type BinaryWritable<T> = Writable<T> & {
    toggle: () => void;
    notValue: () => T;
};
export declare type ColorName = 'transparent' | 'blue-10' | 'blue-20' | 'blue-30' | 'blue-40' | 'blue-50' | 'cyan-10' | 'cyan-20' | 'cyan-30' | 'cyan-40' | 'cyan-50' | 'chartreuse-10' | 'chartreuse-20' | 'chartreuse-30' | 'chartreuse-40' | 'chartreuse-50' | 'green-10' | 'green-20' | 'green-30' | 'green-40' | 'green-50' | 'gray-0' | 'gray-10' | 'gray-20' | 'gray-30' | 'gray-40' | 'gray-50' | 'gray-60' | 'gray-70' | 'gray-80' | 'gray-90' | 'gray-100' | 'magenta-10' | 'magenta-20' | 'magenta-30' | 'magenta-40' | 'magenta-50' | 'orange-10' | 'orange-20' | 'orange-30' | 'orange-40' | 'orange-50' | 'purple-10' | 'purple-20' | 'purple-30' | 'purple-40' | 'purple-50' | 'red-10' | 'red-20' | 'red-30' | 'red-40' | 'red-50' | 'yellow-10' | 'yellow-20' | 'yellow-30' | 'yellow-40' | 'yellow-50' | 'twitter-blue' | 'discord-blue' | 'instagram-pink';
