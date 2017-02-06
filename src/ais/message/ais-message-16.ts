import { AisMessageBase } from "./ais-message-base";
import { AisPayloadDataConverter} from "../ais-payload-data-converter";

export class AisMessage16 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(16, payloadBits);
    }
    // getDestinationAMMSI:-> return @payload.toInt 40, 30
    get destinationAMmsi(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 40, 30);
    }
    // getOffsetA:-> return @payload.toInt 70, 12
    get offsetA(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 70, 12);
    }
    // getIncrementA:-> return @payload.toInt 82, 10
    get incrementA(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 82, 10);
    }
    // getDestinationBMMSI:-> return @payload.toInt 92, 30
    get destinationBMmsi(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 92, 30);
    }
    // getOffsetB:-> return @payload.toInt 122, 12
    get offsetB(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 122, 12);
    }
    // getIncrementB:-> return @payload.toInt 134, 10
    get incrementB(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 134, 10);
    }
}
