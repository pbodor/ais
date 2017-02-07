import { AisMessageBase } from "./ais-message-base";
import { NavigationStatus } from "../common/navigation-status";
import { ManeuverIndicator } from "../common/maneuver-indicator";

export abstract class AisMessageCNB extends AisMessageBase {
    get status(): NavigationStatus { return super.toInt(38, 4); }
    get turn(): number { return super.toInt(42, 8); }
    get speed(): number { return super.toInt(50, 10); }
    get accuracy(): boolean { return super.toBoolean(60); }
    get lon(): number { return super.toInt(61, 28); }
    get lonDeg(): number { return super.getLongitudeDeg(this.lon); }
    get lat(): number { return super.toInt(89, 27); }
    get latDeg(): number { return super.getLatitudeDeg(this.lat); }
    get course(): number { return super.toInt(116, 12) * 0.1; }
    get heading(): number { return super.toInt(128, 9); }
    get second(): number { return super.toInt(137, 6); }
    get maneuver(): ManeuverIndicator { return super.toInt(143, 2); }
    get raim(): boolean { return super.toBoolean(148); }
    get radio(): number { return super.toInt(149, 19); }
}
