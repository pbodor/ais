import { AisMessageBase } from "./ais-message-base";

export class AisMessage27 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(27, payloadBits);
    }
    get positionAccuracy(): number { return super.toInt(38, 1); }
    get raimFrag(): number { return super.toInt(39, 1); }
    get navigationStatus(): number { return super.toInt(40, 4); }
    get longitude(): number { return super.toInt(44, 18); }
    get longitudeDeg(): number { return super.getLongitudeDeg(this.longitude); }
    get latitude(): number { return super.toInt(62, 17); }
    get latitudeDeg(): number { return super.getLatitudeDeg(this.latitude); }
    get speedOverGround(): number { return super.toInt(79, 6); }
    get courseOverGround(): number { return super.toInt(85, 9); }
    get gnssPositionStatus(): number { return super.toInt(94, 1); }
}
