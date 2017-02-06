import { AisMessageBase } from "./ais-message-base";
import { AisPayloadDataConverter} from "../ais-payload-data-converter";

export class AisMessage25 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(25, payloadBits);
    }
    // getDestinationIndicator:-> return @payload.toBoolean 38
    get destinationIndicator(): boolean {
        return AisPayloadDataConverter.toBoolean(this.payloadBits, 38);
    }
    // getBinaryDataFlag:-> return @payload.toBoolean 39
    get binaryDataFlag(): boolean {
        return AisPayloadDataConverter.toBoolean(this.payloadBits, 39);
    }
    // getDestinationMMSI:-> return @payload.toInt 40, 30
    get destinationMmsi(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 40, 30);
    }
    // getApplicationID:-> return
    get applicationId(): number {
        return undefined;
    }
    // getData:-> return
    get data(): string {
        return undefined;
    }
}
