import * as monaco from 'monaco-editor';
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    initValues?: string | Object | undefined;
    modifiedValues?: string | Object | undefined;
    type?: "diff" | undefined;
    language?: string | undefined;
    options?: {
        [key: string]: any;
    } | undefined;
    autoSave?: boolean | undefined;
}>, {
    autoSave: boolean;
    language: string;
    options: () => {
        tabSize: number;
    };
}>, {
    getEditor(): monaco.editor.IStandaloneCodeEditor | monaco.editor.IStandaloneDiffEditor | null;
    setEditorValue: (v: string | any, m: string | any) => void | undefined;
    focus(): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("save" | "initd")[], "save" | "initd", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    initValues?: string | Object | undefined;
    modifiedValues?: string | Object | undefined;
    type?: "diff" | undefined;
    language?: string | undefined;
    options?: {
        [key: string]: any;
    } | undefined;
    autoSave?: boolean | undefined;
}>, {
    autoSave: boolean;
    language: string;
    options: () => {
        tabSize: number;
    };
}>>> & {
    onSave?: ((...args: any[]) => any) | undefined;
    onInitd?: ((...args: any[]) => any) | undefined;
}, {
    options: {
        [key: string]: any;
    };
    language: string;
    autoSave: boolean;
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
