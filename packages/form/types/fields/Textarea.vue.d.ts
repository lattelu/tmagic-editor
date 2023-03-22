import { TextareaConfig } from '../schema';
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<{
    config: TextareaConfig;
    model: any;
    initValues?: any;
    values?: any;
    name: string;
    prop: string;
    disabled?: boolean | undefined;
    size?: "default" | "small" | "large" | undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "input")[], "change" | "input", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    config: TextareaConfig;
    model: any;
    initValues?: any;
    values?: any;
    name: string;
    prop: string;
    disabled?: boolean | undefined;
    size?: "default" | "small" | "large" | undefined;
}>>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onInput?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
