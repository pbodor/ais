import { AisMessageBase } from "./ais-message-base";
import { AisPayloadDataConverter} from "../ais-payload-data-converter";

export class AisMessage18 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(18, payloadBits);
    }
    // getSpeedOverGround:-> return @payload.toInt 46, 10
    get speedOverGround(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 46, 10);
    }
    // getPositionAccuracy:-> return @payload.toBoolean 56
    get positionAccuracy(): boolean {
        return AisPayloadDataConverter.toBoolean(this.payloadBits, 56);
    }
    // getLongitude:-> return @payload.toInt 57, 28
    get longitude(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 57, 28);
    }
    // getLongitudeDeg:-> return Ais.getLongitudeDeg(this.getLongitude())
    get longitudeDeg(): number {
        return super.getLongitudeDeg(this.longitude);
    }
    // getLatitude:-> return @payload.toInt 85, 27
    get latitude(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 85, 27);
    }
    // getLatitudeDeg:-> return Ais.getLatitudeDeg(this.getLatitude())
    get latitudeDeg(): number {
        return super.getLatitudeDeg(this.latitude);
    }
    // getCourseOverGround:-> return @payload.toInt 112, 12
    get courseOverGround(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 112, 12);
    }
    // getTrueHeading:-> return @payload.toInt 124, 9
    get trueHeading(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 124, 9);
    }
    // getTimestamp:-> return @payload.toInt 133, 6
    get timestamp(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 133, 6);
    }
    // getCSUnit:-> return @payload.toBoolean 141
    get csUnit(): boolean {
        return AisPayloadDataConverter.toBoolean(this.payloadBits, 141);
    }
    // getDisplayFlag:-> return @payload.toBoolean 142
    get displayFlag(): boolean {
        return AisPayloadDataConverter.toBoolean(this.payloadBits, 142);
    }
    // getDSCFlag:-> return @payload.toBoolean 143
    get dscFlag(): boolean {
        return AisPayloadDataConverter.toBoolean(this.payloadBits, 143);
    }
    // getBandFlag:-> return @payload.toBoolean 144
    get bandFlag(): boolean {
        return AisPayloadDataConverter.toBoolean(this.payloadBits, 144);
    }
    // getMessage22Flag:-> return @oayload.toBoolean 145
    get message22Flag(): boolean {
        return AisPayloadDataConverter.toBoolean(this.payloadBits, 145);
    }
    // getAssigned:-> return @payload.toBoolean 146
    get assigned(): boolean {
        return AisPayloadDataConverter.toBoolean(this.payloadBits, 146);
    }
    // getRAIMFlag:-> return @payload.toBoolean 147
    get raimFrag(): boolean {
        return AisPayloadDataConverter.toBoolean(this.payloadBits, 147);
    }
    // getRadioStatus:-> return @payload.toInt 148, 20
    get radioStatus(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 148, 20);
    }
}
