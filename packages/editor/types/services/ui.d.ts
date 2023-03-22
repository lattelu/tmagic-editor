import type { UiState } from '../type';
import BaseService from './BaseService';
declare class Ui extends BaseService {
    constructor();
    set<K extends keyof UiState, T extends UiState[K]>(name: K, value: T): void;
    get<K extends keyof UiState>(name: K): {
        uiSelectMode: boolean;
        showSrc: boolean;
        zoom: number;
        stageContainerRect: {
            width: number;
            height: number;
        };
        stageRect: {
            width: number;
            height: number;
        };
        columnWidth: {
            left: number;
            center: number;
            right: number;
        };
        showGuides: boolean;
        showRule: boolean;
        propsPanelSize: "default" | "small" | "large";
        showAddPageButton: boolean;
    }[K];
    zoom(zoom: number): Promise<void>;
    calcZoom(): Promise<number>;
    resetState(): void;
    destroy(): void;
    private setStageRect;
}
export type UiService = Ui;
declare const _default: Ui;
export default _default;
