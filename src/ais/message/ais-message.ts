export interface AisMessage {
    readonly type: number;
    readonly repeat: number;
    readonly mmsi: number;
}
