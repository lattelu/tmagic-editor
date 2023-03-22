import { TabConfig } from '../schema';
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    model: any;
    lastValues?: any;
    isCompare?: boolean | undefined;
    config: TabConfig;
    name: string;
    size?: string | undefined;
    labelWidth?: string | undefined;
    prop?: string | undefined;
    expandMore?: boolean | undefined;
    disabled?: boolean | undefined;
}>, {
    lastValues: () => {};
    isCompare: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "addDiffCount")[], "change" | "addDiffCount", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    model: any;
    lastValues?: any;
    isCompare?: boolean | undefined;
    config: TabConfig;
    name: string;
    size?: string | undefined;
    labelWidth?: string | undefined;
    prop?: string | undefined;
    expandMore?: boolean | undefined;
    disabled?: boolean | undefined;
}>, {
    lastValues: () => {};
    isCompare: boolean;
}>>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onAddDiffCount?: ((...args: any[]) => any) | undefined;
}, {
    lastValues: any;
    isCompare: boolean;
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
