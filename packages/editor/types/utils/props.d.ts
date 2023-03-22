import { FormConfig, FormState } from '@tmagic/form';
/**
 * 统一为组件属性表单加上事件、高级、样式配置
 * @param config 组件属性配置
 * @returns Object
 */
export declare const fillConfig: (config?: FormConfig) => {
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
                options: (mForm: FormState, { formValue }: any) => {
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
}[];
