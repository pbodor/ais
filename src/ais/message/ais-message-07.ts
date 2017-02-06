import { AisMessageBase } from "./ais-message-base";
import { AisPayloadDataConverter} from "../ais-payload-data-converter";

export class AisMessage07 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(7, payloadBits);
    }
    // getMMSI1:-> return @payload.toInt 40, 30
    get mmsi1(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 40, 30);
    }
    // getMMSI2:-> return @payload.toInt 72, 30
    get mmsi2(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 72, 30);
    }
    // getMMSI3:-> return @payload.toInt 104, 30
    get mmsi3(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 104, 30);
    }
    // getMMSI4:-> return @payload.toInt 136, 30
    get mmsi4(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 136, 30);
    }
}
