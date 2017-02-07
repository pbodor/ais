import { AisMessageBase } from "./ais-message-base";
import { EpfdFixTypes } from "../common/epfd-fix-types";

export class AisMessage21 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(21, payloadBits);
    }
    get aid_type(): number { return super.toInt(38, 5); }
    get name(): string { return super.toSixBitString(43, 20); }
    get accuracy(): boolean { return super.toBoolean(163); }
    get lon(): number { return super.toInt(164, 28); }
    get lonDeg(): number { return super.getLongitudeDeg(this.lon); }
    get lat(): number { return super.toInt(192, 27); }
    get latDeg(): number { return super.getLatitudeDeg(this.lat); }
    get to_bow(): number { return super.toInt(219, 9); }
    get to_stern(): number { return super.toInt(228, 9); }
    get to_port(): number { return super.toInt(237, 6); }
    get to_starboard(): number { return super.toInt(243, 6); }
    get epfd(): EpfdFixTypes { return super.toInt(249, 4); }
    get second(): number { return super.toInt(253, 6); }
    get off_position(): boolean { return super.toBoolean(259); }
    get regional(): number { return super.toInt(260, 8); }
    get raim(): boolean { return super.toBoolean(268); }
    get virtual_aid(): boolean { return super.toBoolean(269); }
    get assigned(): boolean { return super.toBoolean(270); }
    get nameExtension(): string { return super.toSixBitString(272, 14); }
}
