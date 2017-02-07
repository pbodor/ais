import { AisMessageBase } from "./ais-message-base";

export class AisMessage22 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(22, payloadBits);
    }
    get channel_a(): number { return super.toInt(46, 12); }
    get channel_b(): number { return super.toInt(52, 12); }
    get txrx(): number { return super.toInt(64, 4); }
    get power(): boolean { return super.toBoolean(68); }
    get ne_lon(): number { return super.toInt(69, 18); }
    get ne_lat(): number { return super.toInt(87, 17); }
    get sw_lon(): number { return super.toInt(104, 18); }
    get sw_lat(): number { return super.toInt(122, 17); }
    get dest1(): number { return super.toInt(139, 30); }
    get dest2(): number { return super.toInt(169, 30); }
    get addressed(): boolean { return super.toBoolean(199); }
    get band_a(): boolean { return super.toBoolean(200); }
    get band_b(): boolean { return super.toBoolean(201); }
    get zonesize(): number { return super.toInt(202, 3); }
}
