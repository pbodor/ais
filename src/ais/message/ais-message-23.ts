import { AisMessageBase } from "./ais-message-base";
import { StationType } from "../common/station-type";
import { ShipType } from "../common/ship-type";
import { StationInterval } from "../common/station-interval";

export class AisMessage23 extends AisMessageBase {
    constructor(payloadBits: number[]) { super(23, payloadBits); }
    get ne_lon(): number { return super.toInt(40, 18); }
    get ne_lat(): number { return super.toInt(58, 17); }
    get sw_lon(): number { return super.toInt(75, 18); }
    get sw_lat(): number { return super.toInt(93, 17); }
    get station_type(): StationType { return super.toInt(110, 4); }
    get ship_type(): ShipType { return super.toInt(114, 8); }
    get txrx(): number { return super.toInt(144, 2); }
    get interval(): StationInterval { return super.toInt(146, 4); }
    get quiet(): number { return super.toInt(150, 4); }
}
