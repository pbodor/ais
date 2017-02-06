import { AisMessageBase } from "./ais-message-base";
import { AisPayloadDataConverter} from "../ais-payload-data-converter";

export class AisMessage04 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(4, payloadBits);
    }
    // getYear:-> return @payload.toInt 38, 14
    get year(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 38, 14);
    }
    // getMonth:-> return @payload.toInt 52, 4
    get month(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 52, 4);
    }
    // getDay:-> return @payload.toInt 56, 5
    get day(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 56, 5);
    }
    // getHour:-> return @payload.toInt 61, 5
    get hour(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 61, 5);
    }
    // getMinute:-> return @payload.toInt 66, 6
    get minute(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 66, 6);
    }
    // getSecond:-> return @payload.toInt 72, 6
    get second(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 72, 6);
    }
    // getAccuracy:-> return @payload.toInt 78, 1
    get accuracy(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 78, 1);
    }
    // getLongitude:-> return @payload.toInt 79, 28
    get longitude(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 79, 28);
    }
    // getLongitudeDeg:-> return Ais.getLongitudeDeg(this.getLongitude())
    get longitudeDeg(): number {
        return super.getLongitudeDeg(this.longitude);
    }
    // getLatitude:-> return @payload.toInt 107, 27
    get latitude(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 107, 27);
    }
    // getLatitudeDeg:-> return Ais.getLatitudeDeg(this.getLatitude())
    get latitudeDeg(): number {
        return super.getLatitudeDeg(this.latitude);
    }
    // getEPFD:-> return @payload.toInt 134, 4
    get epfd(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 134, 4);
    }
    // getRAIM:-> return @payload.toInt 148, 1
    get raim(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 148, 1);
    }
    // getSOTDMA:-> return @payload.toInt 149, 19
    get sotdma(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 149, 19);
    }
}
