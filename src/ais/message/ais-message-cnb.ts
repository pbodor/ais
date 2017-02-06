import { AisMessageBase } from "./ais-message-base";

export abstract class AisMessageCNB extends AisMessageBase {
    get navigationStatus(): number { return super.toInt(38, 4); }
    get rot(): number { return super.toInt(42, 8); }
    get sog(): number { return super.toInt(50, 10); }
    get positionAccuracy(): number { return super.toInt(60, 1); }
    get longitude(): number { return super.toInt(61, 28); }
    get longitudeDeg(): number { return super.getLongitudeDeg(this.longitude); }
    get latitude(): number { return super.toInt(89, 27); }
    get latitudeDeg(): number { return super.getLatitudeDeg(this.latitude); }
    get cog(): number { return super.toInt(116, 12) * 0.1; }
    get hdg(): number { return super.toInt(128, 9); }
    get timestamp(): number { return super.toInt(137, 6); }
    get maneuverIndicator(): number { return super.toInt(143, 2); }
    get raimFrag(): number { return super.toInt(148, 1); }
    get communicationState(): number { return super.toInt(149, 19); }
}
