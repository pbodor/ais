import { AisMessageBase } from "./ais-message-base";

export class AisMessage22 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(22, payloadBits);
    }
    get channelA(): number { return super.toInt(46, 12); }
    get channnelB(): number { return super.toInt(52, 12); }
    get txTrMode(): number { return super.toInt(64, 4); }
    get power(): boolean { return super.toBoolean(68); }
    get neLongitude(): number { return super.toInt(69, 18); }
    get neLatitude(): number { return super.toInt(87, 17); }
    get swLongitude(): number { return super.toInt(104, 18); }
    get swLatitude(): number { return super.toInt(122, 17); }
    get mmsi1(): number { return super.toInt(139, 30); }
    get mmsi2(): number { return super.toInt(169, 30); }
    get addressed(): boolean { return super.toBoolean(199); }
    get channelABand(): boolean { return super.toBoolean(200); }
    get channelBBand(): boolean { return super.toBoolean(201); }
    get zoneSize(): number { return super.toInt(202, 3); }
}
