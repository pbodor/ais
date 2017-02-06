import { AisMessageBase } from "./ais-message-base";
import { AisPayloadDataConverter} from "../ais-payload-data-converter";

export class AisMessage21 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(21, payloadBits);
    }
    // getAidType:-> return @payload.toInt 38, 5
    get aidType(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 38, 5);
    }
    // getName:-> return @payload.toSixBitString 43, 20
    get name(): string {
        return AisPayloadDataConverter.toSixBitString(this.payloadBits, 43, 20);
    }
    // getPositionAccuracy:-> return @payload.toBoolean 163
    get positionAccuracy(): boolean {
        return AisPayloadDataConverter.toBoolean(this.payloadBits, 163);
    }
    // getLongitude:-> return @payload.toInt 164, 28
    get longitude(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 164, 28);
    }
    // getLongitudeDeg: -> return Ais.getLongitudeDeg(this.getLongitude())
    get longitudeDeg(): number {
        return super.getLongitudeDeg(this.longitude);
    }
    // getLatitude:-> return @payload.toInt 192, 27
    get latitude(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 192, 27);
    }
    // getLatitudeDeg:-> return Ais.getLatitudeDeg(this.getLatitude())
    get latitudeDeg(): number {
        return super.getLatitudeDeg(this.latitude);
    }
    // getDimensionToBow:-> return @payload.toInt 219, 9
    get dimensionToBow(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 219, 9);
    }
    // getDimensionToStern:-> return @payload.toInt 228, 9
    get dimensionToStern(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 228, 9);
    }
    // getDimensionToPort:-> return @payload.toInt 237, 6
    get dimensionToPort(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 237, 6);
    }
    // getDimensionToStarboard:-> return @payload.toInt 243, 6
    get dimensionToStarboard(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 243, 6);
    }
    // getTypeOfEPFD:-> return @payload.toInt 249, 4
    get typeOfEpfd(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 249, 4);
    }
    // getUTCSecond:-> return @payload.toInt 253, 6
    get UtcSecond(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 253, 6);
    }
    // getOffPositionIndicator:-> return @payload.toBoolean 259
    get offPositionIndicator(): boolean {
        return AisPayloadDataConverter.toBoolean(this.payloadBits, 259);
    }
    // getRegionalReserved:-> return @payload.toInt 260, 8
    get regionalReserved(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 260, 8);
    }
    // getRAIMFlag:-> return @payload.toBoolean 268
    get raimFlag(): boolean {
        return AisPayloadDataConverter.toBoolean(this.payloadBits, 268);
    }
    // getVirtualAidFlag:-> return @payload.toBoolean 269
    get virtualAidFlag(): boolean {
        return AisPayloadDataConverter.toBoolean(this.payloadBits, 269);
    }
    // getAssignedModeFlag:-> return @payload.toBoolean 270
    get assignedModeFlag(): boolean {
        return AisPayloadDataConverter.toBoolean(this.payloadBits, 270);
    }
    // getNameExtension:-> return @payload.toSixBitString 272, 14
    get nameExtension(): string {
        return AisPayloadDataConverter.toSixBitString(this.payloadBits, 272, 14);
    }
}
