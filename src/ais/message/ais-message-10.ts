import { AisMessageBase } from "./ais-message-base";
import { AisPayloadDataConverter} from "../ais-payload-data-converter";

export class AisMessage10 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(10, payloadBits);
    }
	// getDestinationMMSI:-> return @payload.toInt 40, 30
    get destinationMmsi(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 40, 30);
    }
}
