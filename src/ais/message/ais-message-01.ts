import { AisMessageCNB } from "./ais-message-cnb";

export class AisMessage01 extends AisMessageCNB {
    constructor(payloadBits: number[]) {
        super(1, payloadBits);
    }
}
