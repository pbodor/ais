import { AisMessageBase } from "./ais-message-base";

export class AisMessage19 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(19, payloadBits);
    }
    get speedOverGround(): number { return super.toInt(46, 10); }
    get positionAccuracy(): boolean { return super.toBoolean(56); }
    get longitude(): number { return super.toInt(57, 28); }
    get longitudeDeg(): number { return super.getLongitudeDeg(this.longitude); }
    get latitude(): number { return super.toInt(85, 27); }
    get latitudeDeg(): number { return super.getLatitudeDeg(this.latitude); }
    get courseOverGround(): number { return super.toInt(112, 12); }
    get trueHeading(): number { return super.toInt(124, 9); }
    get timestamp(): number { return super.toInt(133, 6); }
    get regionalReserved(): number { return super.toInt(139, 4); }
    get name(): string { return super.toSixBitString(143, 20); }
    get shipType(): number { return super.toInt(263, 8); }
    get dimensionToBow(): number { return super.toInt(271, 9); }
    get dimensionToStern(): number { return super.toInt(280, 9); }
    get dimensionToPort(): number { return super.toInt(289, 6); }
    get dimensionToStarboard(): number { return super.toInt(295, 6); }
    get positionFixType(): number { return super.toInt(301, 4); }
    get raimFrag(): boolean { return super.toBoolean(305); }
    get dte(): boolean { return super.toBoolean(306); }
    get assignedModeFlag(): number { return super.toInt(307, 1); }
}
