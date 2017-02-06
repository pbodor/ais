import { AisMessageBase } from "./ais-message-base";

export class AisMessage23 extends AisMessageBase {
    constructor(payloadBits: number[]) { super(23, payloadBits); }
    get neLongitude(): number { return super.toInt(40, 18); }
    get neLatitude(): number { return super.toInt(58, 17); }
    get swLongitude(): number { return super.toInt(75, 18); }
    get swLoatitude(): number { return super.toInt(93, 17); }
    get stationType(): number { return super.toInt(110, 4); }
    get shipType(): number { return super.toInt(114, 8); }
    get txRxMode(): number { return super.toInt(144, 2); }
    get reportInternal(): number { return super.toInt(146, 4); }
    get quietTime(): number { return super.toInt(150, 4); }
}
