import { AisMessageBase } from "./ais-message-base";

export class AisMessage17 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(17, payloadBits);
    }
    get lon(): number { return super.toInt(40, 18); }
    get lonDeg(): number { return super.getLongitudeDeg(this.lon); }
    get lat(): number { return super.toInt(58, 17); }
    get latDeg(): number { return super.getLatitudeDeg(this.lat); }
    get data(): string { return super.toSixBitString(80, 92); }
}
