import { CascaderOption } from './type';
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<{
    modelValue?: any;
    placeholder?: string | undefined;
    disabled?: boolean | undefined;
    clearable?: boolean | undefined;
    filterable?: boolean | undefined;
    options?: CascaderOption[] | undefined;
    size?: "default" | "large" | "small" | undefined;
    props: {
        expandTrigger?: 'click' | 'hover';
        multiple?: boolean;
        checkStrictly?: boolean;
        emitPath?: boolean;
        lazy?: boolean;
    };
}>, {
    setQuery(v: any): void;
    setPreviousQuery(v: any): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    modelValue?: any;
    placeholder?: string | undefined;
    disabled?: boolean | undefined;
    clearable?: boolean | undefined;
    filterable?: boolean | undefined;
    options?: CascaderOption[] | undefined;
    size?: "default" | "large" | "small" | undefined;
    props: {
        expandTrigger?: 'click' | 'hover';
        multiple?: boolean;
        checkStrictly?: boolean;
        emitPath?: boolean;
        lazy?: boolean;
    };
}>>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
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
