import { AisMessageBase } from "./ais-message-base";
import { AisPayloadDataConverter} from "../ais-payload-data-converter";

export class AisMessage17 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(17, payloadBits);
    }
    // getLongitude: -> return @payload.toInt 40, 18
    get longitude(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 40, 18);
    }
    // getLongitudeDeg: -> return Ais.getLongitudeDeg(this.getLongitude())
    get longitudeDeg(): number {
        return super.getLongitudeDeg(this.longitude);
    }
    // getLatitude: -> return @payload.toInt 58, 17
    get latitude(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 58, 17);
    }
    // getLatitudeDeg: -> return Ais.getLatitudeDeg(this.getLatitude())
    get latitudeDeg(): number {
        return super.getLatitudeDeg(this.latitude);
    }
    // getPayload:-> return @payload.toSixBitString 80, 92
    get payload(): string {
        return AisPayloadDataConverter.toSixBitString(this.payloadBits, 80, 92);
    }
}
