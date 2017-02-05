import { AisFactory } from "./ais-factory";
import { AisMessage } from "./message/ais-message";
import { AivdmNmea } from "../aivdm/aivdm-nmea";
import { AivdmSentence } from "../aivdm/aivdm-sentence";

export class AisManager {
    private sentences: AivdmSentence[] = [];

    constructor(
        private decoded: (message: AisMessage) => void,
        private bufferSize?: number,
        private incompleted?: (sentence: AivdmSentence) => void) {
    }

    add(text: string) {
        const lines: string[] = text.split("\n");
        for (let line of lines) {
            line.replace(/\r*$/, "");
        }

        for (let line of lines) {
            const nmea: AivdmNmea = new AivdmNmea(line);
            let targetSentence: AivdmSentence = null;

            for (let i = 0; i < this.sentences.length; i++) {
                let sentence: AivdmSentence = this.sentences[i];
                if (sentence.isAddable(nmea)) {
                    targetSentence = this.sentences.splice(i, 1)[0];
                    break;
                }
            }

            if (targetSentence !== null) {
                targetSentence.add(nmea);
            } else {
                targetSentence = new AivdmSentence(nmea);
            }

            if (targetSentence.isComplete()) {
                let ais: AisMessage = AisFactory.create(targetSentence);
                if (this.decoded !== null || this.decoded !== undefined) {
                    this.decoded(ais);
                }
            } else {
                this.sentences.push(targetSentence);

                if (this.bufferSize === null || this.bufferSize === undefined) {
                    return;
                }

                if (this.sentences.length <= this.bufferSize) {
                    return;
                }

                if (this.incompleted === null || this.incompleted === undefined) {
                    return;
                }

                const oldIncompletedSentences: AivdmSentence[] =
                    this.sentences.splice(0, this.sentences.length - this.bufferSize);
                for (let sentence of oldIncompletedSentences) {
                    this.incompleted(sentence);
                }
            }
        }
    }
}
