import { } from "jasmine";

import { Nmea } from "nmea";
import { Aivdm } from "../../src";

describe("Aivdm", () => {
    let messages: string[] = [];

    beforeEach(() => {
        messages.push("!AIVDM,1,1,,B,177KQJ5000G?tO`K>RA1wUbN0TKH,0*5C");
        messages.push("!AIVDM,1,1,,B,177KQJ5000G?tO`K>RA1wUbN0TKH,0*5D");
        messages.push("!AIVDM,2,1,3,B,55P5TL01VIaAL@7WKO@mBplU@<PDhh000000001S;AJ::4A80?4i@E53,0*3E");
        messages.push("!AIVDM,2,2,3,B,1@0000000000000,2*55");
    });

    afterEach(() => {
        messages.length = 0;
    });

    it("should not create instance.", () => {
        let message = null;
        try {
            new Aivdm(message);
        } catch (e) {
            console.log(e.message);
        }
    });

    it("should create instance.", () => {
        let nmea = new Nmea(messages[0]);
        console.log(nmea);
        let aivdm: Aivdm = Aivdm.parse(nmea);
        console.log(aivdm);
    });
});
