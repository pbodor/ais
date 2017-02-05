import { AisMessageBase } from "./ais-message-base";
import { AisPayloadDataConverter} from "../ais-payload-data-converter";

export abstract class AisMessageCNB extends AisMessageBase {
    get navigationStatus(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 38, 4);
    }

    get rot(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 42, 8);
    }

    get sog(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 50, 10);
    }

    get positionAccuracy(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 60, 1);
    }

    get longitude(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 61, 28);
    }

    get longitudeDeg(): number {
        return super.getLongitudeDeg(this.longitude);
    }

    get latitude(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 89, 27);
    }

    get latitudeDeg(): number {
        return super.getLatitudeDeg(this.latitude);
    }

    get cog(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 116, 12) * 0.1;
    }

    get hdg(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 128, 9);
    }

    get timestamp(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 137, 6);
    }

    get maneuverIndicator(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 143, 2);
    }

    get raimFrag(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 148, 1);
    }

    get communicationState(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 149, 19);
    }
}
