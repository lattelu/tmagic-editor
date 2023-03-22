import { ChildConfig, FormValue } from '../schema';
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /** 表单值 */
    model: FormValue;
    /** 需对比的值（开启对比模式时传入） */
    lastValues?: FormValue | undefined;
    config: ChildConfig;
    prop?: string | undefined;
    disabled?: boolean | undefined;
    labelWidth?: string | undefined;
    expandMore?: boolean | undefined;
    stepActive?: string | number | undefined;
    size?: string | undefined;
    /** 是否开启对比模式 */
    isCompare?: boolean | undefined;
}>, {
    prop: string;
    size: string;
    expandMore: boolean;
    lastValues: () => {};
    isCompare: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "addDiffCount")[], "change" | "addDiffCount", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /** 表单值 */
    model: FormValue;
    /** 需对比的值（开启对比模式时传入） */
    lastValues?: FormValue | undefined;
    config: ChildConfig;
    prop?: string | undefined;
    disabled?: boolean | undefined;
    labelWidth?: string | undefined;
    expandMore?: boolean | undefined;
    stepActive?: string | number | undefined;
    size?: string | undefined;
    /** 是否开启对比模式 */
    isCompare?: boolean | undefined;
}>, {
    prop: string;
    size: string;
    expandMore: boolean;
    lastValues: () => {};
    isCompare: boolean;
}>>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onAddDiffCount?: ((...args: any[]) => any) | undefined;
}, {
    lastValues: FormValue;
    isCompare: boolean;
    prop: string;
    expandMore: boolean;
    size: string;
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
