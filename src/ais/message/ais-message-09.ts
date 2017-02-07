import { AisMessageBase } from "./ais-message-base";

export class AisMessage09 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(9, payloadBits);
    }
    get alt(): number { return super.toInt(38, 12); }
    get speed(): number { return super.toInt(50, 10); }
    get accuracy(): number { return super.toInt(60, 1); }
    get lon(): number { return super.toInt(61, 28); }
    get lonDeg(): number { return super.getLongitudeDeg(this.lon); }
    get lat(): number { return super.toInt(89, 27); }
    get latDeg(): number { return super.getLatitudeDeg(this.lat); }
    get course(): number { return super.toInt(116, 12); }
    get second(): number { return super.toInt(128, 6); }
    get regional(): number { return super.toInt(134, 8); }
    get dte(): boolean { return super.toBoolean(142); }
    get assigned(): boolean { return super.toBoolean(146); }
    get raim(): boolean { return super.toBoolean(147); }
    get radio(): number { return super.toInt(148, 19); }
}
