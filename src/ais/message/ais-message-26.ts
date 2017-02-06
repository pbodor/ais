import { AisMessageBase } from "./ais-message-base";

export class AisMessage26 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(26, payloadBits);
    }
    get destinationIndicator(): boolean { return super.toBoolean(38); }
    get binaryDataFlag(): boolean { return super.toBoolean(39); }
    get destinationMmsi(): number { return super.toInt(40, 30); }
    get applicationId(): number { return undefined; }
    get data(): string { return undefined; }
    get radioStatus(): number { return undefined; }
}
