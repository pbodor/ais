import { AisMessageBase } from "./ais-message-base";

export class AisMessage18 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(18, payloadBits);
    }
    get speed(): number { return super.toInt(46, 10); }
    get accuracy(): boolean { return super.toBoolean(56); }
    get lon(): number { return super.toInt(57, 28); }
    get lonDeg(): number { return super.getLongitudeDeg(this.lon); }
    get lat(): number { return super.toInt(85, 27); }
    get latDeg(): number { return super.getLatitudeDeg(this.lat); }
    get course(): number { return super.toInt(112, 12); }
    get heading(): number { return super.toInt(124, 9); }
    get regional(): number { return super.toInt(133, 6); }
    get second(): number { return super.toInt(139, 2); }
    get cs(): boolean { return super.toBoolean(141); }
    get display(): boolean { return super.toBoolean(142); }
    get dsc(): boolean { return super.toBoolean(143); }
    get band(): boolean { return super.toBoolean(144); }
    get msg22(): boolean { return super.toBoolean(145); }
    get assigned(): boolean { return super.toBoolean(146); }
    get raim(): boolean { return super.toBoolean(147); }
    get radio(): number { return super.toInt(148, 20); }
}
