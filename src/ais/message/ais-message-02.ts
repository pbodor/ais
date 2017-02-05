import { AisMessageCNB } from "./ais-message-cnb";

export class AisMessage02 extends AisMessageCNB {
    constructor(payloadBits: number[]) {
        super(2, payloadBits);
    }
}
