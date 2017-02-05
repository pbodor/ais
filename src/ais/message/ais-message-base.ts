import { AisMessage } from "./ais-message";
import { AivdmSentence } from "../../aivdm/aivdm-sentence";
import { AisPayloadDataConverter} from "../ais-payload-data-converter";

export abstract class AisMessageBase implements AisMessage {

    constructor(private _type: number, protected payloadBits: number[]) {
    }

    get type(): number {
        return this._type;
    }

    get repeat(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 6, 2);
    }

    get mmsi(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 8, 30);
    }

    protected getLongitudeDeg(raw_longitude: number): number {
        if (raw_longitude >= 0x8000000) {
            raw_longitude = -1 * (0x10000000 - raw_longitude);
        }
        return raw_longitude / 600000.0;
    }

    protected getLatitudeDeg(raw_latitude: number): number {
        if (raw_latitude >= 0x4000000) {
            raw_latitude = -1 * (0x8000000 - raw_latitude);
        }
        return raw_latitude / 600000.0;
    }
}
