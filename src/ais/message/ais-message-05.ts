import { AisMessageBase } from "./ais-message-base";
import { AisPayloadDataConverter} from "../ais-payload-data-converter";

export class AisMessage05 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(5, payloadBits);
    }
    // getVersion:-> return @payload.toInt 38, 2
    get version(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 38, 2);
    }
    // getIMO:-> return @payload.toInt 40, 30
    get imo(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 40, 30);
    }
    // getCallSign:-> return @payload.toSixBitString 70, 7
    get callSign(): string {
        return AisPayloadDataConverter.toSixBitString(this.payloadBits, 70, 7);
    }
    // getVesselName:-> return @payload.toSixBitString 112, 20
    get vesselName(): string {
        return AisPayloadDataConverter.toSixBitString(this.payloadBits, 112, 20);
    }
    // getShipType:-> return @payload.toInt 232, 8
    get shipType(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 232, 8);
    }
    // getBow:-> return @payload.toInt 240, 9
    get bow(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 240, 9);
    }
    // getStern:-> return @payload.toInt 249, 9
    get stern(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 249, 9);
    }
    // getPort:-> return @payload.toInt 258, 6
    get port(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 258, 6);
    }
    // getStarboard:-> return @payload.toInt 264, 6
    get starboard(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 264, 6);
    }
    // getPositionFixType:-> return @payload.toInt 270, 4
    get positionFixType(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 270, 4);
    }
    // getMonth:-> return @payload.toInt 274, 4
    get month(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 274, 4);
    }
    // getDay:-> return @payload.toInt 278, 5
    get day(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 278, 5);
    }
    // getHour:-> return @payload.toInt 283, 5
    get hour(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 283, 5);
    }
    // getMinute:-> return @payload.toInt 288, 6
    get minute(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 288, 6);
    }
    // getDraught:-> return (@payload.toInt 294, 8) / 10.0
    get draught(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 294, 8) / 10.0;
    }
    // getDestination:-> return @payload.toSixBitString 302, 20
    get destination(): string {
        return AisPayloadDataConverter.toSixBitString(this.payloadBits, 302, 20);
    }
    // getDTE:-> return @payload.toInt 422, 1
    get dte(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 422, 1);
    }
}
