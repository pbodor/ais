import { AisMessageBase } from "./ais-message-base";

export class AisMessage20 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(20, payloadBits);
    }
    get offset1(): number { return super.toInt(40, 12); }
    get number1(): number { return super.toInt(52, 4); }
    get timeout1(): number { return super.toInt(56, 3); }
    get increment1(): number { return super.toInt(59, 11); }
    get offset2(): number { return super.toInt(70, 12); }
    get number2(): number { return super.toInt(82, 4); }
    get timeout2(): number { return super.toInt(86, 3); }
    get increment2(): number { return super.toInt(89, 11); }
    get offset3(): number { return super.toInt(100, 12); }
    get number3(): number { return super.toInt(112, 4); }
    get timeout3(): number { return super.toInt(116, 3); }
    get increment3(): number { return super.toInt(119, 11); }
    get offset4(): number { return super.toInt(130, 12); }
    get number4(): number { return super.toInt(142, 4); }
    get timeout4(): number { return super.toInt(146, 3); }
    get increment4(): number { return super.toInt(149, 11); }
}
