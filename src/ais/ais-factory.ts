import { AisMessage } from "./message/ais-message";
import { AivdmSentence } from "../aivdm/aivdm-sentence";
import { AivdmPayloadDecoder } from "../aivdm/aivdm-payload-decoder";
import { AisPayloadDataConverter} from "./ais-payload-data-converter";

import { AisMessage01 } from "./message/ais-message-01";
import { AisMessage02 } from "./message/ais-message-02";
import { AisMessage03 } from "./message/ais-message-03";
import { AisMessage04 } from "./message/ais-message-04";
import { AisMessage05 } from "./message/ais-message-05";
import { AisMessage06 } from "./message/ais-message-06";
import { AisMessage07 } from "./message/ais-message-07";
import { AisMessage08 } from "./message/ais-message-08";
import { AisMessage09 } from "./message/ais-message-09";
import { AisMessage10 } from "./message/ais-message-10";
import { AisMessage11 } from "./message/ais-message-11";
import { AisMessage12 } from "./message/ais-message-12";
import { AisMessage13 } from "./message/ais-message-13";
import { AisMessage14 } from "./message/ais-message-14";
import { AisMessage15 } from "./message/ais-message-15";
import { AisMessage16 } from "./message/ais-message-16";
import { AisMessage17 } from "./message/ais-message-17";
import { AisMessage18 } from "./message/ais-message-18";
import { AisMessage19 } from "./message/ais-message-19";
import { AisMessage20 } from "./message/ais-message-20";
import { AisMessage21 } from "./message/ais-message-21";
import { AisMessage22 } from "./message/ais-message-22";
import { AisMessage23 } from "./message/ais-message-23";
import { AisMessage24 } from "./message/ais-message-24";
import { AisMessage25 } from "./message/ais-message-25";
import { AisMessage26 } from "./message/ais-message-26";
import { AisMessage27 } from "./message/ais-message-27";

export class AisFactory {
    private constructor() {
    }

    static create(sentence: AivdmSentence): AisMessage {
        let message: AisMessage;
        const payloadBits: number[] = AivdmPayloadDecoder.decodeString2Bits(sentence.payload);

        switch (AisPayloadDataConverter.toInt(payloadBits, 0, 6)) {
            case  1: message = new AisMessage01(payloadBits); break;
            case  2: message = new AisMessage02(payloadBits); break;
            case  3: message = new AisMessage03(payloadBits); break;
            case  4: message = new AisMessage04(payloadBits); break;
            case  5: message = new AisMessage05(payloadBits); break;
            case  6: message = new AisMessage06(payloadBits); break;
            case  7: message = new AisMessage07(payloadBits); break;
            case  8: message = new AisMessage08(payloadBits); break;
            case  9: message = new AisMessage09(payloadBits); break;
            case 10: message = new AisMessage10(payloadBits); break;
            case 11: message = new AisMessage11(payloadBits); break;
            case 12: message = new AisMessage12(payloadBits); break;
            case 13: message = new AisMessage13(payloadBits); break;
            case 14: message = new AisMessage14(payloadBits); break;
            case 15: message = new AisMessage15(payloadBits); break;
            case 16: message = new AisMessage16(payloadBits); break;
            case 17: message = new AisMessage17(payloadBits); break;
            case 18: message = new AisMessage18(payloadBits); break;
            case 19: message = new AisMessage19(payloadBits); break;
            case 20: message = new AisMessage20(payloadBits); break;
            case 21: message = new AisMessage21(payloadBits); break;
            case 22: message = new AisMessage22(payloadBits); break;
            case 23: message = new AisMessage23(payloadBits); break;
            case 24: message = new AisMessage24(payloadBits); break;
            case 25: message = new AisMessage25(payloadBits); break;
            case 26: message = new AisMessage26(payloadBits); break;
            case 27: message = new AisMessage27(payloadBits); break;
            default:
                throw new Error("Unsupported Message Type");
        }

        return message;
    }
}
