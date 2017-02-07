import { AisMessageBase } from "./ais-message-base";
import { EpfdFixTypes } from "../common/epfd-fix-types";

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
    get accuracy(): boolean { return super.toBoolean(78); }
    get lon(): number { return super.toInt(79, 28); }
    get lonDeg(): number { return super.getLongitudeDeg(this.lon); }
    get lat(): number { return super.toInt(107, 27); }
    get latDeg(): number { return super.getLatitudeDeg(this.lat); }
    get epfd(): EpfdFixTypes { return super.toInt(134, 4); }
    get raim(): boolean { return super.toBoolean(148); }
    get radio(): number { return super.toInt(149, 19); }
}
