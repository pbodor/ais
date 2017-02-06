import { AisMessageBase } from "./ais-message-base";

export class AisMessage09 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(9, payloadBits);
    }
    get altitude(): number { return super.toInt(38, 12); }
    get sog(): number { return super.toInt(50, 10); }
    get positionAccuracy(): number { return super.toInt(60, 1); }
    get longitude(): number { return super.toInt(61, 28); }
    get longitudeDeg(): number { return super.getLongitudeDeg(this.longitude); }
    get latitude(): number { return super.toInt(89, 27); }
    get latitudeDeg(): number { return super.getLatitudeDeg(this.latitude); }
    get courseOverGround(): number { return super.toInt(116, 12); }
    get timestamp(): number { return super.toInt(128, 6); }
    get regionalReserved(): number { return super.toInt(134, 8); }
    get dte(): boolean { return super.toBoolean(142); }
    get assigned(): boolean { return super.toBoolean(146); }
    get raim(): boolean { return super.toBoolean(147); }
    get radioStatus(): number { return super.toInt(148, 19); }
}
