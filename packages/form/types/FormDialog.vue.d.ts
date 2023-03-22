import { FormConfig } from './schema';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    config?: FormConfig | undefined;
    values?: Object | undefined;
    parentValues?: Object | undefined;
    width?: string | number | undefined;
    labelWidth?: string | undefined;
    fullscreen?: boolean | undefined;
    disabled?: boolean | undefined;
    title?: string | undefined;
    zIndex?: number | undefined;
    size?: "default" | "small" | "large" | undefined;
    confirmText?: string | undefined;
}>, {
    config: () => never[];
    values: () => {};
    confirmText: string;
}>, {
    form: import("vue").Ref<({
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
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
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            config: {
                type: import("vue").PropType<FormConfig>;
                required: true;
            } & {
                default: () => never[];
            };
            popperClass: {
                type: import("vue").PropType<string>;
            };
            initValues: {
                type: import("vue").PropType<Object>;
                required: true;
            } & {
                default: () => {};
            };
            lastValues: {
                type: import("vue").PropType<Object>;
            } & {
                default: () => {};
            };
            isCompare: {
                type: import("vue").PropType<boolean>;
            } & {
                default: boolean;
            };
            keyProp: {
                type: import("vue").PropType<string>;
            } & {
                default: string;
            };
            parentValues: {
                type: import("vue").PropType<Object>;
            } & {
                default: () => {};
            };
            labelWidth: {
                type: import("vue").PropType<string>;
            } & {
                default: string;
            };
            disabled: {
                type: import("vue").PropType<boolean>;
            } & {
                default: boolean;
            };
            stepActive: {
                type: import("vue").PropType<string | number>;
            } & {
                default: number;
            };
            size: {
                type: import("vue").PropType<"default" | "small" | "large">;
            };
            height: {
                type: import("vue").PropType<string>;
            } & {
                default: string;
            };
            inline: {
                type: import("vue").PropType<boolean>;
            } & {
                default: boolean;
            };
            labelPosition: {
                type: import("vue").PropType<string>;
            } & {
                default: string;
            };
        }>> & {
            onChange?: ((...args: any[]) => any) | undefined;
            "onField-input"?: ((...args: any[]) => any) | undefined;
            "onField-change"?: ((...args: any[]) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "config" | "initValues" | "lastValues" | "isCompare" | "keyProp" | "parentValues" | "labelWidth" | "disabled" | "stepActive" | "height" | "inline" | "labelPosition">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null;
        $emit: (event: "change" | "field-input" | "field-change", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            config: {
                type: import("vue").PropType<FormConfig>;
                required: true;
            } & {
                default: () => never[];
            };
            popperClass: {
                type: import("vue").PropType<string>;
            };
            initValues: {
                type: import("vue").PropType<Object>;
                required: true;
            } & {
                default: () => {};
            };
            lastValues: {
                type: import("vue").PropType<Object>;
            } & {
                default: () => {};
            };
            isCompare: {
                type: import("vue").PropType<boolean>;
            } & {
                default: boolean;
            };
            keyProp: {
                type: import("vue").PropType<string>;
            } & {
                default: string;
            };
            parentValues: {
                type: import("vue").PropType<Object>;
            } & {
                default: () => {};
            };
            labelWidth: {
                type: import("vue").PropType<string>;
            } & {
                default: string;
            };
            disabled: {
                type: import("vue").PropType<boolean>;
            } & {
                default: boolean;
            };
            stepActive: {
                type: import("vue").PropType<string | number>;
            } & {
                default: number;
            };
            size: {
                type: import("vue").PropType<"default" | "small" | "large">;
            };
            height: {
                type: import("vue").PropType<string>;
            } & {
                default: string;
            };
            inline: {
                type: import("vue").PropType<boolean>;
            } & {
                default: boolean;
            };
            labelPosition: {
                type: import("vue").PropType<string>;
            } & {
                default: string;
            };
        }>> & {
            onChange?: ((...args: any[]) => any) | undefined;
            "onField-input"?: ((...args: any[]) => any) | undefined;
            "onField-change"?: ((...args: any[]) => any) | undefined;
        }, {
            values: import("vue").Ref<import("./schema").FormValue>;
            lastValuesProcessed: import("vue").Ref<import("./schema").FormValue>;
            formState: import("./schema").FormState;
            initialized: import("vue").Ref<boolean>;
            changeHandler: () => void;
            resetForm: () => any;
            submitForm: (native?: boolean | undefined) => Promise<any>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "field-input" | "field-change")[], string, {
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
        }, {}, string> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        config: {
            type: import("vue").PropType<FormConfig>;
            required: true;
        } & {
            default: () => never[];
        };
        popperClass: {
            type: import("vue").PropType<string>;
        };
        initValues: {
            type: import("vue").PropType<Object>;
            required: true;
        } & {
            default: () => {};
        };
        lastValues: {
            type: import("vue").PropType<Object>;
        } & {
            default: () => {};
        };
        isCompare: {
            type: import("vue").PropType<boolean>;
        } & {
            default: boolean;
        };
        keyProp: {
            type: import("vue").PropType<string>;
        } & {
            default: string;
        };
        parentValues: {
            type: import("vue").PropType<Object>;
        } & {
            default: () => {};
        };
        labelWidth: {
            type: import("vue").PropType<string>;
        } & {
            default: string;
        };
        disabled: {
            type: import("vue").PropType<boolean>;
        } & {
            default: boolean;
        };
        stepActive: {
            type: import("vue").PropType<string | number>;
        } & {
            default: number;
        };
        size: {
            type: import("vue").PropType<"default" | "small" | "large">;
        };
        height: {
            type: import("vue").PropType<string>;
        } & {
            default: string;
        };
        inline: {
            type: import("vue").PropType<boolean>;
        } & {
            default: boolean;
        };
        labelPosition: {
            type: import("vue").PropType<string>;
        } & {
            default: string;
        };
    }>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onField-input"?: ((...args: any[]) => any) | undefined;
        "onField-change"?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        values: import("vue").Ref<import("./schema").FormValue>;
        lastValuesProcessed: import("vue").Ref<import("./schema").FormValue>;
        formState: import("./schema").FormState;
        initialized: import("vue").Ref<boolean>;
        changeHandler: () => void;
        resetForm: () => any;
        submitForm: (native?: boolean | undefined) => Promise<any>;
    }> & {} & import("vue").ComponentCustomProperties & {}) | undefined>;
    saveFetch: import("vue").Ref<boolean>;
    dialogVisible: import("vue").Ref<boolean>;
    cancel: () => void;
    save: () => Promise<void>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "close" | "submit" | "error")[], "change" | "close" | "submit" | "error", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    config?: FormConfig | undefined;
    values?: Object | undefined;
    parentValues?: Object | undefined;
    width?: string | number | undefined;
    labelWidth?: string | undefined;
    fullscreen?: boolean | undefined;
    disabled?: boolean | undefined;
    title?: string | undefined;
    zIndex?: number | undefined;
    size?: "default" | "small" | "large" | undefined;
    confirmText?: string | undefined;
}>, {
    config: () => never[];
    values: () => {};
    confirmText: string;
}>>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onSubmit?: ((...args: any[]) => any) | undefined;
    onError?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
}, {
    config: FormConfig;
    values: Object;
    confirmText: string;
}>, {
    default: (_: {}) => any;
    left: (_: {}) => any;
    footer: (_: {}) => any;
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
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
