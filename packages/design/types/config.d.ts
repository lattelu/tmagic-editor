import { PluginOptions } from './type';
declare const setConfig: (options: PluginOptions) => void;
declare const getConfig: (key: string) => any;
export { getConfig, setConfig };
