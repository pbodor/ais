import { Nmea } from "nmea";
import { AisPayload } from "./ais-payload";

/**
 * 複数のNMEAからAivdmを生成するAibdmBuilderが必要か。。。
 * まずは、Typescriptへの移植だな。
 */
export class Aivdm {
    private static readonly AIVDM_VDO_REGEX: RegExp = new RegExp(
        "^[!$](AIVDM|AIVDO),(\\d+),(\\d+),(\\d*),([AB]),([^,\\*]*),([0-5])\\*[0-9a-fA-F]+\r?$");

    _parsedList: any[];
    _id: number;
    _totalFragments: number;
    _lastFragment: number = 0;
    _sequentialId: number;
    _radioChannel: number;
    _payload: string = "";
    _fillBit: number = 0;

    constructor(nmea: Nmea) {
        // Initialize members.

        // Add first NMEA object.
        let parsed = Aivdm.parse(nmea);

        if (parsed.fragmentId !== 1) {
            throw new Error("First NMEA can create AIVDM instance.");
        }

        this._id = parsed.id;
        this._lastFragment = parsed.fragmentId;
        this._totalFragments = parsed.totalFragments;
        this._sequentialId = parsed.seqId;
        this._radioChannel = parsed.radioChannel;
        this._fillBit += parsed.fillBit;

        this._parsedList.push(parsed);
    }

    get id(): number { return this._id; }
    get totalFragments(): number { return this._totalFragments; }
    get lastFragment(): number { return this._lastFragment; }
    get sequentialId(): number { return this._sequentialId; }
    get radioChannel(): number { return this._radioChannel; }

    get payload(): AisPayload {
        let payloadString;
        for (let parsed of this._parsedList) {
            payloadString += parsed.payload;
        }

        let payload = new AisPayload(payloadString);
        return payload;
    }

    get source(): Nmea[] {
        let nmeaList: Nmea[] = [];
        for (let parsed of this._parsedList) {
            nmeaList.push(parsed.nmea);
        }

        return nmeaList;
    }

    isComplete(): boolean {
        return this._totalFragments === this._lastFragment;
    }

    isAddable(nmea: Nmea): boolean {
        const parsed = Aivdm.parse(nmea);
        let result: boolean =
            this._id === parsed.id &&
            this._totalFragments === parsed.totalFragments &&
            this._sequentialId === parsed.seqId &&
            this.radioChannel === parsed.radioChannel;

        return result;
    }

    static parse(nmea: Nmea) {
        console.log(Aivdm.AIVDM_VDO_REGEX);
        console.log(nmea.line);
        const matched = nmea.line.match(Aivdm.AIVDM_VDO_REGEX);
        console.log(matched);
        let parsed: any = {};
        parsed.id = matched[1];
        parsed.totalFragments = parseInt(matched[2], 10);
        parsed.fragmentId = parseInt(matched[3], 10);
        parsed.seqId = parseInt(matched[4], 10);
        if (isNaN(parsed.seqId)) {
            parsed.seqId = null;
        }
        parsed.radioChannel = matched[5];
        parsed.payload = matched[6];
        parsed.fillBit = parseInt(matched[7], 10);

        return parsed;
    }
}
