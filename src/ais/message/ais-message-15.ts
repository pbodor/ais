import { AisMessageBase } from "./ais-message-base";
import { AisPayloadDataConverter} from "../ais-payload-data-converter";

export class AisMessage15 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(15, payloadBits);
    }
    // getInterrogatedMMSI:-> return @payload.toInt 40, 30
    get interrogatedMmsi(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 40, 30);
    }
	// getFirstMessageType:-> return @payload.toInt 70, 6
    get firstMessageType(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 70, 6);
    }
	// getFirstSlotOffset:-> return @payload.toInt 76, 12
    get firstSlotOffset(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 76, 12);
    }
	// getSecondMessageType:-> return @payload.toInt 90, 6
    get secondMessageType(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 90, 6);
    }
	// getSecondSlotOffset:-> return @payload.toInt 96, 12
    get secondSlotOffset(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 96, 12);
    }
	// getInterrogatedMMSI:-> return @payload.toInt 110, 30
    get interrogatedMmsi2(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 110, 30);
    }
	// getFirstMessageType2:-> return @payload.toInt 140, 6
    get firstMessageType2(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 140, 6);
    }
	// getFirstSlotOffset2:-> return @payload.toInt 146, 12
    get firstSlotOffset2(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 146, 12);
    }
}
