import { AisMessageBase } from "./ais-message-base";
import { ShipType } from "../common/ship-type";

export class AisMessage24 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(24, payloadBits);
    }
    // Part A
    get partno(): number { return super.toInt(38, 2); }
    get shipname(): string { return super.toSixBitString(40, 20); }
    // Part B
    get shiptype(): ShipType { return super.toInt(40, 8); }
    get vendorid(): string { return super.toSixBitString(48, 3); }
    get model(): number { return super.toInt(66, 4); }
    get serial(): number { return super.toInt(70, 20); }
    get callsign(): string { return super.toSixBitString(90, 7); }
    get to_bow(): number { return super.toInt(132, 9); }
    get to_stern(): number { return super.toInt(141, 9); }
    get to_port(): number { return super.toInt(150, 6); }
    get to_starboard(): number { return super.toInt(156, 6); }
    get mothership_mmsi(): number { return super.toInt(162, 30); }
}
