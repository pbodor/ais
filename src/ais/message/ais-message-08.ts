import { AisMessageBase } from "./ais-message-base";
import { AisPayloadDataConverter} from "../ais-payload-data-converter";

export class AisMessage08 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(8, payloadBits);
    }
    // getDesignatedAreaCode:-> return @payload.toInt 40, 10
    get designatedAgetCode(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 40, 10);
    }
    // getFunctionalID:-> return @payload.toInt 50, 6
    get functionalId(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 50, 6);
    }
    // getData:-> return @payload.toSixBitString 56, 119
    get data(): string {
        return AisPayloadDataConverter.toSixBitString(this.payloadBits, 56, 119);
    }
}
