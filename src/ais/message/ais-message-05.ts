import { AisMessageBase } from "./ais-message-base";

export class AisMessage05 extends AisMessageBase {
    constructor(payloadBits: number[]) {
        super(5, payloadBits);
    }
}
