import { MenuButton, MenuComponent } from '../type';
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    menuData?: (MenuButton | MenuComponent)[] | undefined;
    isSubMenu?: boolean | undefined;
}>, {
    menuData: () => never[];
    isSubMenu: boolean;
}>, {
    hide: () => void;
    show: (e: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("hide" | "show")[], "hide" | "show", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    menuData?: (MenuButton | MenuComponent)[] | undefined;
    isSubMenu?: boolean | undefined;
}>, {
    menuData: () => never[];
    isSubMenu: boolean;
}>>> & {
    onHide?: ((...args: any[]) => any) | undefined;
    onShow?: ((...args: any[]) => any) | undefined;
}, {
    menuData: (MenuButton | MenuComponent)[];
    isSubMenu: boolean;
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
