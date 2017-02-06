import { AisMessageBase } from "./ais-message-base";

export class AisMessage18 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(18, payloadBits);
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
    get csUnit(): boolean { return super.toBoolean(141); }
    get displayFlag(): boolean { return super.toBoolean(142); }
    get dscFlag(): boolean { return super.toBoolean(143); }
    get bandFlag(): boolean { return super.toBoolean(144); }
    get message22Flag(): boolean { return super.toBoolean(145); }
    get assigned(): boolean { return super.toBoolean(146); }
    get raimFrag(): boolean { return super.toBoolean(147); }
    get radioStatus(): number { return super.toInt(148, 20); }
}
