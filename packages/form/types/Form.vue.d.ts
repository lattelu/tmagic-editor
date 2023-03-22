import type { FormConfig, FormState, FormValue } from './schema';
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /** 表单配置 */
    config: FormConfig;
    /** 表单值 */
    initValues: Object;
    /** 需对比的值（开启对比模式时传入） */
    lastValues?: Object | undefined;
    /** 是否开启对比模式 */
    isCompare?: boolean | undefined;
    parentValues?: Object | undefined;
    labelWidth?: string | undefined;
    disabled?: boolean | undefined;
    height?: string | undefined;
    stepActive?: string | number | undefined;
    size?: "default" | "small" | "large" | undefined;
    inline?: boolean | undefined;
    labelPosition?: string | undefined;
    keyProp?: string | undefined;
    popperClass?: string | undefined;
}>, {
    config: () => never[];
    initValues: () => {};
    lastValues: () => {};
    isCompare: boolean;
    parentValues: () => {};
    labelWidth: string;
    disabled: boolean;
    height: string;
    stepActive: number;
    inline: boolean;
    labelPosition: string;
    keyProp: string;
}>, {
    values: import("vue").Ref<FormValue>;
    lastValuesProcessed: import("vue").Ref<FormValue>;
    formState: FormState;
    initialized: import("vue").Ref<boolean>;
    changeHandler: () => void;
    resetForm: () => any;
    submitForm: (native?: boolean) => Promise<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "field-input" | "field-change")[], "change" | "field-input" | "field-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /** 表单配置 */
    config: FormConfig;
    /** 表单值 */
    initValues: Object;
    /** 需对比的值（开启对比模式时传入） */
    lastValues?: Object | undefined;
    /** 是否开启对比模式 */
    isCompare?: boolean | undefined;
    parentValues?: Object | undefined;
    labelWidth?: string | undefined;
    disabled?: boolean | undefined;
    height?: string | undefined;
    stepActive?: string | number | undefined;
    size?: "default" | "small" | "large" | undefined;
    inline?: boolean | undefined;
    labelPosition?: string | undefined;
    keyProp?: string | undefined;
    popperClass?: string | undefined;
}>, {
    config: () => never[];
    initValues: () => {};
    lastValues: () => {};
    isCompare: boolean;
    parentValues: () => {};
    labelWidth: string;
    disabled: boolean;
    height: string;
    stepActive: number;
    inline: boolean;
    labelPosition: string;
    keyProp: string;
}>>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onField-input"?: ((...args: any[]) => any) | undefined;
    "onField-change"?: ((...args: any[]) => any) | undefined;
}, {
    config: FormConfig;
    initValues: Object;
    lastValues: Object;
    isCompare: boolean;
    keyProp: string;
    parentValues: Object;
    labelWidth: string;
    disabled: boolean;
    stepActive: string | number;
    height: string;
    inline: boolean;
    labelPosition: string;
}>;
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
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};
