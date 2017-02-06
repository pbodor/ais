import { AisMessageBase } from "./ais-message-base";
import { AisPayloadDataConverter} from "../ais-payload-data-converter";

export class AisMessage20 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(20, payloadBits);
    }
    // getOffsetNumber1:-> return @payload.toInt 40, 12
    get offsetNumber1(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 40, 12);
    }
    // getReservedSlots1:-> return @payload.toInt 52, 4
    get reservedSlots1(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 52, 4);
    }
    // getTimeout1:-> return @payload.toInt 56, 3
    get timeout1(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 56, 3);
    }
    // getIncrement1:-> return @payload.toInt 59, 11
    get increment1(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 59, 11);
    }
    // getOffsetNumber2:-> return @payload.toInt 70, 12
    get offsetNumber2(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 70, 12);
    }
    // getReservedSlots2:-> return @payload.toInt 82, 4
    get reservedSlots2(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 82, 4);
    }
    // getTimeout2:-> return @payload.toInt 86, 3
    get timeout2(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 86, 3);
    }
    // getIncrement2:-> return @payload.toInt 89, 11
    get increment2(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 89, 11);
    }
    // getOffsetNumber3:-> return @payload.toInt 100, 12
    get offsetNumber3(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 100, 12);
    }
    // getReservedSlots3:-> return @payload.toInt 112, 4
    get reservedSlots3(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 112, 4);
    }
    // getTimeout3:-> return @payload.toInt 116, 3
    get timeout3(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 116, 3);
    }
    // getIncrement3:-> return @payload.toInt 119, 11
    get increment3(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 119, 11);
    }
    // getOffsetNumber4:-> return @payload.toInt 130, 12
    get offsetNumber4(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 130, 12);
    }
    // getReservedSlots4:-> return @payload.toInt 142, 4
    get reservedSlots4(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 142, 4);
    }
    // getTimeout4:-> return @payload.toInt 146, 3
    get timeout4(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 146, 3);
    }
    // getIncrement4:-> return @payload.toInt 149, 11
    get increment4(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 149, 11);
    }
}
