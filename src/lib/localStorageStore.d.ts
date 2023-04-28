import { type Writable } from 'svelte/store';
type StorageType = 'local' | 'session';
interface Serializer<T> {
    parse(text: string): T;
    stringify(object: T): string;
}
interface Options<T> {
    serializer?: Serializer<T>;
    storage?: StorageType;
}
export declare function localStorageStore<T>(key: string, initialValue: T, options?: Options<T>): Writable<T>;
export { };