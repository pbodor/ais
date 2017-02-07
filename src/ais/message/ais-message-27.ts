import { AisMessageBase } from "./ais-message-base";

export class AisMessage27 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(27, payloadBits);
    }
    get accuracy(): number { return super.toInt(38, 1); }
    get raim(): boolean { return super.toBoolean(39); }
    get status(): number { return super.toInt(40, 4); }
    get lon(): number { return super.toInt(44, 18); }
    get lonDeg(): number { return super.getLongitudeDeg(this.lon); }
    get lat(): number { return super.toInt(62, 17); }
    get latDeg(): number { return super.getLatitudeDeg(this.lat); }
    get speed(): number { return super.toInt(79, 6); }
    get course(): number { return super.toInt(85, 9); }
    get gnss(): number { return super.toInt(94, 1); }
}
