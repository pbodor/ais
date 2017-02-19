export class Nmea {
    private static readonly NMEA_REGEX: RegExp = /^[!$]([^\*]+)\*([0-9a-fA-F]+)\r?$/;

    constructor(private _line: string) {
      if (!Nmea.isValid(_line)) {
        throw new Error(`line is not valid(${_line}).`);
      }
    }

    static isValid(source: string): boolean {
        const matched: string[] = source.match(Nmea.NMEA_REGEX);
        const data: string = matched[1];
        const checksum: number = parseInt(matched[2], 16);
        let calcedChecksum: number = 0;

        for (let i of data) {
          calcedChecksum ^= i.charCodeAt(0);
        }

        return checksum === calcedChecksum;
    }

    get line(): string {
      return this._line;
    }
}
