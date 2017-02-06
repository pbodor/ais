import { AisMessageBase } from "./ais-message-base";

export class AisMessage11 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(11, payloadBits);
    }
    get year(): number { return super.toInt(38, 14); }
    get month(): number { return super.toInt(52, 4); }
    get day(): number { return super.toInt(56, 5); }
    get hour(): number { return super.toInt(61, 5); }
    get minute(): number { return super.toInt(66, 6); }
    get second(): number { return super.toInt(72, 6); }
    get accuracy(): number { return super.toInt(78, 1); }
    get longitude(): number { return super.toInt(79, 28); }
    get longitudeDeg(): number { return super.getLongitudeDeg(this.longitude); }
    get latitude(): number { return super.toInt(107, 27); }
    get latitudeDeg(): number { return super.getLatitudeDeg(this.latitude); }
    get epfd(): number { return super.toInt(134, 4); }
    get raim(): number { return super.toInt(148, 1); }
    get sotdma(): number { return super.toInt(149, 19); }
}
