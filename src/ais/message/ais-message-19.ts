import { AisMessageBase } from "./ais-message-base";
import { EpfdFixTypes } from "../common/epfd-fix-types";

export class AisMessage19 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(19, payloadBits);
    }
    get speed(): number { return super.toInt(46, 10); }
    get accuracy(): boolean { return super.toBoolean(56); }
    get lon(): number { return super.toInt(57, 28); }
    get lonDeg(): number { return super.getLongitudeDeg(this.lon); }
    get lat(): number { return super.toInt(85, 27); }
    get latDeg(): number { return super.getLatitudeDeg(this.lat); }
    get course(): number { return super.toInt(112, 12); }
    get heading(): number { return super.toInt(124, 9); }
    get second(): number { return super.toInt(133, 6); }
    get regional(): number { return super.toInt(139, 4); }
    get shipname(): string { return super.toSixBitString(143, 20); }
    get shiptype(): number { return super.toInt(263, 8); }
    get to_bow(): number { return super.toInt(271, 9); }
    get to_stern(): number { return super.toInt(280, 9); }
    get to_port(): number { return super.toInt(289, 6); }
    get to_starboard(): number { return super.toInt(295, 6); }
    get epfd(): EpfdFixTypes { return super.toInt(301, 4); }
    get raim(): boolean { return super.toBoolean(305); }
    get dte(): boolean { return super.toBoolean(306); }
    get assigned(): number { return super.toInt(307, 1); }
}
