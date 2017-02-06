import { AisMessageBase } from "./ais-message-base";
import { AisPayloadDataConverter} from "../ais-payload-data-converter";

export class AisMessage23 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(23, payloadBits);
    }
    // getNELongitude:-> return @payload.toInt 40, 18
    get neLongitude(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 40, 18);
    }
    // getNELatitude:-> return @payload.toInt 58, 17
    get neLatitude(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 58, 17);
    }
    // getSWLongitude:-> return @payload.toInt 75, 18
    get swLongitude(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 75, 18);
    }
    // getSWLatitude:-> return @payload.toInt 93, 17
    get swLoatitude(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 93, 17);
    }
    // getStationType:-> return @payload.toInt 110, 4
    get stationType(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 110, 4);
    }
    // getShipType:-> return @payload.toInt 114, 8
    get shipType(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 114, 8);
    }
    // getTxRxMode:-> return @payload.toInt 144, 2
    get txRxMode(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 144, 2);
    }
    // getReportInterval:-> return @payload.toInt 146, 4
    get reportInternal(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 146, 4);
    }
    // getQuietTime:-> return @payload.toInt 150, 4
    get quietTime(): number {
        return AisPayloadDataConverter.toInt(this.payloadBits, 150, 4);
    }
}
