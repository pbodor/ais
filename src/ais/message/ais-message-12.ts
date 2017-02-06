import { AisMessageBase } from "./ais-message-base";
import { AisPayloadDataConverter} from "../ais-payload-data-converter";

export class AisMessage12 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(12, payloadBits);
    }
    // getSequenceNumber:-> return @payload.toInt 38, 2
    get sequenceNumber(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 38, 2);
    }
    // getDestinationMMSI:-> return @payload.toInt 40, 30
    get destinationMmsi(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 40, 30);
    }
    // getRetransimitFrag:-> return @payload.toBoolean 70
    get retransmitFrag(): boolean {
        return AisPayloadDataConverter.toBoolean(this.payloadBits, 70);
    }
    // getText:-> return @payload.toSixBitString 72, 156
    get text(): string {
        return AisPayloadDataConverter.toSixBitString(this.payloadBits, 72, 156);
    }
}
