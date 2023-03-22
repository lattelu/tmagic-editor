import { FieldsetConfig } from '../schema';
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    labelWidth?: string | undefined;
    prop: string;
    size?: string | undefined;
    model: Record<string, any>;
    lastValues?: Record<string, any> | undefined;
    isCompare?: boolean | undefined;
    config: FieldsetConfig;
    rules?: any;
    disabled?: boolean | undefined;
}>, {
    rules: {};
    prop: string;
    lastValues: () => {};
    isCompare: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "addDiffCount")[], "change" | "addDiffCount", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    labelWidth?: string | undefined;
    prop: string;
    size?: string | undefined;
    model: Record<string, any>;
    lastValues?: Record<string, any> | undefined;
    isCompare?: boolean | undefined;
    config: FieldsetConfig;
    rules?: any;
    disabled?: boolean | undefined;
}>, {
    rules: {};
    prop: string;
    lastValues: () => {};
    isCompare: boolean;
}>>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onAddDiffCount?: ((...args: any[]) => any) | undefined;
}, {
    lastValues: Record<string, any>;
    isCompare: boolean;
    rules: any;
    prop: string;
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
