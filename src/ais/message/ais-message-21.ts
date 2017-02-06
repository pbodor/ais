import { AisMessageBase } from "./ais-message-base";

export class AisMessage21 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(21, payloadBits);
    }
    get aidType(): number { return super.toInt(38, 5); }
    get name(): string { return super.toSixBitString(43, 20); }
    get positionAccuracy(): boolean { return super.toBoolean(163); }
    get longitude(): number { return super.toInt(164, 28); }
    get longitudeDeg(): number { return super.getLongitudeDeg(this.longitude); }
    get latitude(): number { return super.toInt(192, 27); }
    get latitudeDeg(): number { return super.getLatitudeDeg(this.latitude); }
    get dimensionToBow(): number { return super.toInt(219, 9); }
    get dimensionToStern(): number { return super.toInt(228, 9); }
    get dimensionToPort(): number { return super.toInt(237, 6); }
    get dimensionToStarboard(): number { return super.toInt(243, 6); }
    get typeOfEpfd(): number { return super.toInt(249, 4); }
    get UtcSecond(): number { return super.toInt(253, 6); }
    get offPositionIndicator(): boolean { return super.toBoolean(259); }
    get regionalReserved(): number { return super.toInt(260, 8); }
    get raimFlag(): boolean { return super.toBoolean(268); }
    get virtualAidFlag(): boolean { return super.toBoolean(269); }
    get assignedModeFlag(): boolean { return super.toBoolean(270); }
    get nameExtension(): string { return super.toSixBitString(272, 14); }
}
