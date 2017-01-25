import { AivdmNmea } from "./aivdm-nmea";
import { AivdmPayload } from "./aivdm-payload";

export class AivdmSentence {
    private aivdms: AivdmNmea[] = [];
    private readonly baseNmea: AivdmNmea;

    constructor(nmea: AivdmNmea) {
        if (!(nmea instanceof AivdmNmea)) {
            throw new Error("parameter is null.");
        }

        this.baseNmea = nmea;
        this.aivdms.push(nmea);
    }

    isComplete(): boolean {
        return this.aivdms.length === this.baseNmea.countOfFragments;
    }

    canBeAdded(aivdm: AivdmNmea): boolean {
        return !this.isComplete() &&
            this.baseNmea.packetId === aivdm.packetId &&
            this.aivdms.filter((element, index, array) => {
                return aivdm.fragmentNumber === element.fragmentNumber;
            }).length === 0 &&
            this.baseNmea.sequentialId === aivdm.sequentialId &&
            this.baseNmea.radioChannel === aivdm.radioChannel;
    }

    add(aivdm: AivdmNmea) {
        if (!this.canBeAdded(aivdm)) {
            throw new Error("Cannot add aivdm. The aivdm is different from the others.");
        }
        this.aivdms.push(aivdm);
    }

    get payload(): AivdmPayload {
        if (!this.isComplete()) {
            throw new Error("Cannot output payload. Sentence is not complete.");
        }

        let concat: string = "";

        this.aivdms.sort((a, b) => {
            return a.fragmentNumber > b.fragmentNumber ? 1 : -1;
        }).forEach((element, index, array) => {
            concat += element.payload;
        });

        return new AivdmPayload(concat);
    }
}
