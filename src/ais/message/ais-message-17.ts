import { AisMessageBase } from "./ais-message-base";

export class AisMessage17 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(17, payloadBits);
    }
    get longitude(): number { return super.toInt(40, 18); }
    get longitudeDeg(): number { return super.getLongitudeDeg(this.longitude); }
    get latitude(): number { return super.toInt(58, 17); }
    get latitudeDeg(): number { return super.getLatitudeDeg(this.latitude); }
    get payload(): string { return super.toSixBitString(80, 92); }
}
