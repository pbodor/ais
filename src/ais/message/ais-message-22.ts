import { AisMessageBase } from "./ais-message-base";
import { AisPayloadDataConverter} from "../ais-payload-data-converter";

export class AisMessage22 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(22, payloadBits);
    }
    // getChannelA:-> return @payload.toInt 40, 12
    get channelA(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 46, 12);
    }
    // getChannelB:-> return @payload.toInt 52, 12
    get channnelB(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 52, 12);
    }
    // getTxTrMode:-> return @payload.toInt 64, 4
    get txTrMode(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 64, 4);
    }
    // getPower:-> return @payload.toBoolean 68
    get power(): boolean {
        return AisPayloadDataConverter.toBoolean(this.payloadBits, 68);
    }
    // getNELongitude:-> return @payload.toInt 69, 18
    get neLongitude(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 69, 18);
    }
    // getNELatitude:-> return @payload.toInt 87, 17
    get neLatitude(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 87, 17);
    }
    // getSWLongitude:-> return @payload.toInt 104, 18
    get swLongitude(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 104, 18);
    }
    // getSWLatitude:-> return @payload.toInt 122, 17
    get swLatitude(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 122, 17);
    }
    // getMMSI1:-> return @payload.toInt 139, 30
    get mmsi1(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 139, 30);
    }
    // getMMSI2:-> return @payload.toInt 169, 30
    get mmsi2(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 169, 30);
    }
    // getAddressed:-> return @payload.toBoolean 199
    get addressed(): boolean {
        return AisPayloadDataConverter.toBoolean(this.payloadBits, 199);
    }
    // getChannelABand:-> return @payload.toBoolean 200
    get channelABand(): boolean {
        return AisPayloadDataConverter.toBoolean(this.payloadBits, 200);
    }
    // getChannelBBand:-> return @payload.toBoolean 201
    get channelBBand(): boolean {
        return AisPayloadDataConverter.toBoolean(this.payloadBits, 201);
    }
    // getZoneSize:-> return @payload.toInt 202, 3
    get zoneSize(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 202, 3);
    }
}
