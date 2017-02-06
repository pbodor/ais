import { AisMessageBase } from "./ais-message-base";
import { AisPayloadDataConverter} from "../ais-payload-data-converter";

export class AisMessage06 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(6, payloadBits);
    }
    // getSequence:-> return @payload.toInt 38, 2
    get sequence(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 38, 2);
    }
    // getDestinationMMSI:-> return @payload.toInt 40, 30
    get destinationMmsi(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 40, 30);
    }
    // getRetransmit:-> return @payload.toInt 70, 1
    get retransmit(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 70, 1);
    }
    // getDesignatedAreaCode:-> return @payload.toInt 72, 10
    get designatedAreaCode(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 72, 10);
    }
    // getFunctionalID:-> return @payload.toInt 82, 6
    get funtionalId(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 82, 6);
    }
    // getData:-> return @payload.toSixBitString 88, 115
    get data(): string {
        return AisPayloadDataConverter.toSixBitString(this.payloadBits, 88, 115);
    }
}
