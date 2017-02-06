import { AisMessageBase } from "./ais-message-base";
import { AisPayloadDataConverter} from "../ais-payload-data-converter";

export class AisMessage19 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(19, payloadBits);
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
    // getReginalReserved:-> return @payload.toInt 139, 4
    get regionalReserved(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 139, 4);
    }
    // getName:-> return @payload.toSixBitString 143, 20
    get name(): string {
        return AisPayloadDataConverter.toSixBitString(this.payloadBits, 143, 20);
    }
    // getShipType:-> return @payload.toInt 263, 8
    get shipType(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 263, 8);
    }
    // getDimensionToBow:-> return @payload.toInt 271, 9
    get dimensionToBow(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 271, 9);
    }
    // getDimensionToStern:-> return @payload.toInt 280, 9
    get dimensionToStern(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 280, 9);
    }
    // getDimensionToPort:-> return @payload.toInt 289, 6
    get dimensionToPort(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 289, 6);
    }
    // getDimensionToStarboard:-> return @payload.toInt 295, 6
    get dimensionToStarboard(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 295, 6);
    }
    // getPositionFixType:-> return @payload.toInt 301, 4
    get positionFixType(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 301, 4);
    }
    // getRAIMFlag:-> return @payload.toBoolean 305
    get raimFrag(): boolean {
        return AisPayloadDataConverter.toBoolean(this.payloadBits, 305);
    }
    // getDTE:-> return @payload.toBoolean 306
    get dte(): boolean {
        return AisPayloadDataConverter.toBoolean(this.payloadBits, 306);
    }
    // getAssignedModeFlag:-> return @payload.toInt 307, 1
    get assignedModeFlag(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 307, 1);
    }
}
