import { AisMessage } from "./ais-message";
import { AivdmSentence } from "../../aivdm/aivdm-sentence";
import { AisPayloadDataConverter} from "../ais-payload-data-converter";

export abstract class AisMessageBase implements AisMessage {

    protected constructor(private _type: number, private payloadBits: number[]) {
    }

    get type(): number {
        return this._type;
    }

    get repeat(): number {
        return this.toInt(6, 2);
    }

    get mmsi(): number {
        return this.toInt(8, 30);
    }

    protected toInt(index: number, length: number): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, index, length);
    }

    protected toBoolean(index: number): boolean {
        return AisPayloadDataConverter.toBoolean(this.payloadBits, index);
    }

    protected toSixBitString(index: number, charSize: number): string {
        return AisPayloadDataConverter.toSixBitString(this.payloadBits, index, charSize);
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
