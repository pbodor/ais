import { AisMessageBase } from "./ais-message-base";
import { CodesForShipType } from "../common/codes-for-ship";
import { EpfdFixTypes } from "../common/epfd-fix-types";

export class AisMessage05 extends AisMessageBase {
    constructor(payloadBits: number[]) { super(5, payloadBits); }
    get ais_version(): number { return super.toInt(38, 2); }
    get imo(): number { return super.toInt(40, 30); }
    get callsign(): string { return super.toSixBitString(70, 7); }
    get shipname(): string { return super.toSixBitString(112, 20); }
    get shiptype(): CodesForShipType { return super.toInt(232, 8); }
    get to_bow(): number { return super.toInt(240, 9); }
    get to_stern(): number { return super.toInt(249, 9); }
    get to_port(): number { return super.toInt(258, 6); }
    get to_starboard(): number { return super.toInt(264, 6); }
    get epfd(): EpfdFixTypes { return super.toInt(270, 4); }
    get month(): number { return super.toInt(274, 4); }
    get day(): number { return super.toInt(278, 5); }
    get hour(): number { return super.toInt(283, 5); }
    get minute(): number { return super.toInt(288, 6); }
    get draught(): number { return super.toInt(294, 8) / 10.0; }
    get destination(): string { return super.toSixBitString(302, 20); }
    get dte(): boolean { return super.toBoolean(422); }
}
