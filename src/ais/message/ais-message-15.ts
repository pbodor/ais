import { AisMessageBase } from "./ais-message-base";

export class AisMessage15 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(15, payloadBits);
    }
    get interrogatedMmsi(): number { return super.toInt(40, 30); }
    get firstMessageType(): number { return super.toInt(70, 6); }
    get firstSlotOffset(): number { return super.toInt(76, 12); }
    get secondMessageType(): number { return super.toInt(90, 6); }
    get secondSlotOffset(): number { return super.toInt(96, 12); }
    get interrogatedMmsi2(): number { return super.toInt(110, 30); }
    get firstMessageType2(): number { return super.toInt(140, 6); }
    get firstSlotOffset2(): number { return super.toInt(146, 12); }
}
