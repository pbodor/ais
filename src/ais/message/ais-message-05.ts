import { AisMessageBase } from "./ais-message-base";

export class AisMessage05 extends AisMessageBase {
    constructor(payloadBits: number[]) { super(5, payloadBits); }
    get version(): number { return super.toInt(38, 2); }
    get imo(): number { return super.toInt(40, 30); }
    get callSign(): string { return super.toSixBitString(70, 7); }
    get vesselName(): string { return super.toSixBitString(112, 20); }
    get shipType(): number { return super.toInt(232, 8); }
    get bow(): number { return super.toInt(240, 9); }
    get stern(): number { return super.toInt(249, 9); }
    get port(): number { return super.toInt(258, 6); }
    get starboard(): number { return super.toInt(264, 6); }
    get positionFixType(): number { return super.toInt(270, 4); }
    get month(): number { return super.toInt(274, 4); }
    get day(): number { return super.toInt(278, 5); }
    get hour(): number { return super.toInt(283, 5); }
    get minute(): number { return super.toInt(288, 6); }
    get draught(): number { return super.toInt(294, 8) / 10.0; }
    get destination(): string { return super.toSixBitString(302, 20); }
    get dte(): number { return super.toInt(422, 1); }
}
