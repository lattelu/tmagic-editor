import { StepConfig } from '../schema';
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    model: any;
    lastValues?: any;
    isCompare?: boolean | undefined;
    config: StepConfig;
    stepActive?: number | undefined;
    labelWidth?: string | undefined;
    size?: string | undefined;
    disabled?: boolean | undefined;
}>, {
    stepActive: number;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "addDiffCount")[], "change" | "addDiffCount", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    model: any;
    lastValues?: any;
    isCompare?: boolean | undefined;
    config: StepConfig;
    stepActive?: number | undefined;
    labelWidth?: string | undefined;
    size?: string | undefined;
    disabled?: boolean | undefined;
}>, {
    stepActive: number;
}>>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onAddDiffCount?: ((...args: any[]) => any) | undefined;
}, {
    stepActive: number;
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
