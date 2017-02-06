import { AisMessageBase } from "./ais-message-base";
import { AisPayloadDataConverter} from "../ais-payload-data-converter";

export class AisMessage14 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(14, payloadBits);
    }
    // getText:-> return @payload.toSixBitString 40, 161
    get text(): string {
        return AisPayloadDataConverter.toSixBitString(this.payloadBits, 40, 161);
    }
}
