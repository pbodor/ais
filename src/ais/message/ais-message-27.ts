import { AisMessageBase } from "./ais-message-base";
import { AisPayloadDataConverter} from "../ais-payload-data-converter";

export class AisMessage27 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(27, payloadBits);
    }
    // getPositionAccuracy: -> return @payload.toInt 38, 1
    get positionAccuracy(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 38, 1);
    }
    // getRAIMFrag:-> return @payload.toInt 39, 1
    get raimFrag(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 39, 1);
    }
    // getNavigationStatus: -> return @payload.toInt 40, 4
    get navigationStatus(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 40, 4);
    }
    // getLongitude: -> return @payload.toInt 44, 18
    get longitude(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 44, 18);
    }
    // getLongitudeDeg: -> return Ais.getLongitudeDeg(this.getLongitude())
    get longitudeDeg(): number {
        return super.getLongitudeDeg(this.longitude);
    }
    // getLatitude: -> return @payload.toInt 62, 17
    get latitude(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 62, 17);
    }
    // getLatitudeDeg: -> return Ais.getLatitudeDeg(this.getLatitude())
    get latitudeDeg(): number {
        return super.getLatitudeDeg(this.latitude);
    }
    // getSpeedOverGround:-> return @payload.toInt 79, 6
    get speedOverGround(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 79, 6);
    }
    // getCourseOverGround:-> return @payload.toInt 85, 9
    get courseOverGround(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 85, 9);
    }
    // getGNSSPositionStatus:-> return @payload.toInt 94, 1
    get gnssPositionStatus(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 94, 1);
    }
}
