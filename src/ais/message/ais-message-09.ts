import { AisMessageBase } from "./ais-message-base";
import { AisPayloadDataConverter} from "../ais-payload-data-converter";

export class AisMessage09 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(9, payloadBits);
    }
    // getAltitude:-> return @payload.toInt 38, 12
    get altitude(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 38, 12);
    }
    // getSOG:-> return @payload.toInt 50, 10
    get sog(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 50, 10);
    }
    // getPositionAccuracy:-> return @payload.toInt 60, 1
    get positionAccuracy(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 60, 1);
    }
    // getLongitude: -> return @payload.toInt 61, 28
    get longitude(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 61, 28);
    }
    // getLongitudeDeg: -> Ais.getLongitudeDeg(this.getLongitude())
    get longitudeDeg(): number {
        return super.getLongitudeDeg(this.longitude);
    }
    // getLatitude: -> return @payload.toInt 89, 27
    get latitude(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 89, 27);
    }
    // getLatitudeDeg: -> Ais.getLatitudeDeg(this.getLatitude())
    get latitudeDeg(): number {
        return super.getLatitudeDeg(this.latitude);
    }
    // getCourseOverGround:-> return @payload.toInt 116, 12
    get courseOverGround(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 116, 12);
    }
    // getTimeStamp:-> return @payload.toInt 128, 6
    get timestamp(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 128, 6);
    }
    // getRegionalReserved:-> return @payload.toInt 134, 8
    get regionalReserved(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 134, 8);
    }
    // getDTE:-> return @payload.toBoolean 142
    get dte(): boolean {
        return AisPayloadDataConverter.toBoolean(this.payloadBits, 142);
    }
    // getAssigned:-> return @payload.toBoolean 146
    get assigned(): boolean {
        return AisPayloadDataConverter.toBoolean(this.payloadBits, 146);
    }
    // getRAIM:-> return @payload.toBoolean 147
    get raim(): boolean {
        return AisPayloadDataConverter.toBoolean(this.payloadBits, 147);
    }
    // getRadioStatus:-> return @payload.toInt 148, 19
    get radioStatus(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 148, 19);
    }
}
