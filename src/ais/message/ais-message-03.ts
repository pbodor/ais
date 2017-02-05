import { AisMessageCNB } from "./ais-message-cnb";

export class AisMessage03 extends AisMessageCNB {
    constructor(payloadBits: number[]) {
        super(3, payloadBits);
    }
}
