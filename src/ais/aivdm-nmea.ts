import { Nmea } from "nmea";

/**
 * AIVDM/AIVDO Sentence Layer
 * http://catb.org/gpsd/AIVDM.html#_aivdm_aivdo_sentence_layer
 */
export class AivdmNmea extends Nmea {
    private static readonly AIVDM_VDO_REGEX: RegExp = new RegExp(
        "^[!$](AIVDM|AIVDO),(\\d+),(\\d+),(\\d*),([AB]),([^,\\*]*),([0-5])\\*[0-9a-fA-F]+\r?$");

    private _packetId: string;
    private _countOfFragments: number;
    private _fragmentNumber: number;
    private _sequentialId: number | null;
    private _radioChannel: string;
    private _payload: string;
    private _fillBits: number;

    constructor(_line: string) {
        super(_line);

        const matched = _line.match(AivdmNmea.AIVDM_VDO_REGEX);

        this._packetId = matched[1];
        this._countOfFragments = parseInt(matched[2], 10);
        this._fragmentNumber = parseInt(matched[3], 10);
        this._sequentialId = parseInt(matched[4], 10);
        if (isNaN(this._sequentialId)) {
            this._sequentialId = null;
        }
        this._radioChannel = matched[5];
        this._payload = matched[6];
        this._fillBits = parseInt(matched[7], 10);
    }

    get packetId(): string { return this._packetId; }
    get countOfFragments(): number { return this._countOfFragments; }
    get fragmentNumber(): number { return this._fragmentNumber; }
    get sequentialId(): number { return this._sequentialId; }
    get radioChannel(): string { return this._radioChannel; }
    get payload(): string { return this._payload; }
    get fillBits(): number { return this._fillBits; }
}
