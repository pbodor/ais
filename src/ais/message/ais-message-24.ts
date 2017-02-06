import { AisMessageBase } from "./ais-message-base";
import { AisPayloadDataConverter} from "../ais-payload-data-converter";

export class AisMessage24 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(24, payloadBits);
    }
    // getPartNumber:-> return @payload.toInt 38, 2
    get portNumber(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 38, 2);
    }
    // getVesselName:-> return @payload.toSixBitASCIIString 40, 20
    get vesselName(): string {
        return AisPayloadDataConverter.toSixBitString(this.payloadBits, 40, 20);
    }
    // getShipType:-> return @payload.toInt 168, 8
    get shipType(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 168, 8);
    }
    // getVenderID:-> return @payload.toSixBitASCIIString 176, 7
    get venderId(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 176, 7);
    }
    // getCallSign:-> return @payload.toSixBitASCIIString 218, 7
    get callSign(): string {
        return AisPayloadDataConverter.toSixBitString(this.payloadBits, 218, 7);
    }
    // getDimensionToBow:-> return @payload.toInt 260, 9
    get dimensionToBow(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 260, 9);
    }
    // getDimensionToStern:-> return @payload.toInt 269, 9
    get dimensionToStern(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 269, 9);
    }
    // getDimensionToPort:-> return @payload.toInt 278, 6
    get dimensionToPort(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 278, 6);
    }
    // getDimensionToStarboard:-> return @payload.toInt 284, 6
    get dimensionToStarboard(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 284, 6);
    }
    // getMothershipMMSI:-> return @payload.toInt 290, 30
    get mothershipMmsi(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 290, 30);
    }
}
