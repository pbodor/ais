import { AisMessageBase } from "./ais-message-base";

export class AisMessage25 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(25, payloadBits);
    }
    get addressed(): boolean { return super.toBoolean(38); }
    get structured(): boolean { return super.toBoolean(39); }
    get dest_mmsi(): number { return super.toInt(40, 30); }
    get app_id(): number { return undefined; }
    get data(): string { return undefined; }
}
