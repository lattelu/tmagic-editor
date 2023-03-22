import type { FormConfig } from '@tmagic/form';
import type { MNode } from '@tmagic/schema';
import BaseService from './BaseService';
declare class Props extends BaseService {
    private state;
    constructor();
    setPropsConfigs(configs: Record<string, FormConfig>): void;
    fillConfig(config: FormConfig): Promise<{
        type: string;
        items: ({
            title: string;
            labelWidth: string;
            items: (import("@tmagic/form").ChildConfig & {
                [key: string]: any;
            })[];
            lazy?: undefined;
        } | {
            title: string;
            items: {
                type: string;
                name: string;
                items: ({
                    name: string;
                    label: string;
                    type: string;
                    options: (mForm: import("@tmagic/form").FormState, { formValue }: any) => {
                        text: string;
                        value: string;
                    }[];
                } | {
                    name: string;
                    label: string;
                    type: string;
                    options?: undefined;
                })[];
            }[];
            labelWidth?: undefined;
            lazy?: undefined;
        } | {
            title: string;
            lazy: boolean;
            items: {
                name: string;
                text: string;
                labelWidth: string;
                type: string;
            }[];
            labelWidth?: undefined;
        })[];
    }[]>;
    /**
     * 为指定类型组件设置组件属性表单配置
     * @param type 组件类型
     * @param config 组件属性表单配置
     */
    setPropsConfig(type: string, config: FormConfig): Promise<void>;
    /**
     * 获取指点类型的组件属性表单配置
     * @param type 组件类型
     * @returns 组件属性表单配置
     */
    getPropsConfig(type: string): Promise<FormConfig>;
    setPropsValues(values: Record<string, MNode>): void;
    /**
     * 为指点类型组件设置组件初始值
     * @param type 组件类型
     * @param value 组件初始值
     */
    setPropsValue(type: string, value: MNode): Promise<void>;
    /**
     * 获取指定类型的组件初始值
     * @param type 组件类型
     * @returns 组件初始值
     */
    getPropsValue(type: string, { inputEvent, ...defaultValue }?: Record<string, any>): Promise<any>;
    createId(type: string | number): Promise<string>;
    /**
     * 将组件与组件的子元素配置中的id都设置成一个新的ID
     * @param {Object} config 组件配置
     */
    setNewItemId(config: MNode): Promise<MNode>;
    /**
     * 获取默认属性配置
     * @param type 组件类型
     * @returns Object
     */
    getDefaultPropsValue(type: string): Promise<{
        type: string;
        layout: string;
        style: {};
        name: string;
        items: never[];
    } | {
        type: string;
        style: {};
        name: string;
        layout?: undefined;
        items?: undefined;
    }>;
    resetState(): void;
    destroy(): void;
    /**
     * 生成指定位数的GUID，无【-】格式
     * @param digit 位数，默认值8
     * @returns
     */
    private guid;
}
export type PropsService = Props;
declare const _default: Props;
export default _default;
