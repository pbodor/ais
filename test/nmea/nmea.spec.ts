import { } from "jasmine";

import { Nmea } from "../../src";

describe("Nmea", () => {

    it("should create instance.", () => {
        const messages = [];
        messages.push("!AIVDM,1,1,,B,177KQJ5000G?tO`K>RA1wUbN0TKH,0*5C");
        messages.push("!AIVDM,2,1,3,B,55P5TL01VIaAL@7WKO@mBplU@<PDhh000000001S;AJ::4A80?4i@E53,0*3E");
        messages.push("!AIVDM,2,2,3,B,1@0000000000000,2*55");

        for (let message of messages) {
            const nmea: Nmea = new Nmea(message);
            expect(nmea).toBeTruthy(message);
            expect(nmea.line).toEqual(message, message);
        }
    });

    it("should not create instance.", () => {
        const messages = [];
        messages.push("!AIVDM,1,1,,B,177KQJ5000G?tO`K>RA1wUbN0TKH,0*5D");

        for (let message of messages) {
            try {
                new Nmea(message);
                fail("到達しない");
            } catch (e) {
                expect(e.message).toEqual(`line is not valid(${message}).`);
            }
        }
    });

    it("is valid.", () => {
        const messages = [];
        messages.push("!AIVDM,1,1,,B,177KQJ5000G?tO`K>RA1wUbN0TKH,0*5C");
        messages.push("!AIVDM,2,1,3,B,55P5TL01VIaAL@7WKO@mBplU@<PDhh000000001S;AJ::4A80?4i@E53,0*3E");
        messages.push("!AIVDM,2,2,3,B,1@0000000000000,2*55");

        for (let message of messages) {

            expect(Nmea.isValid(message)).toBeTruthy(message);
        }
    });

    it("is not valid.", () => {
        const messages = [];
        messages.push("!AIVDM,1,1,,B,177KQJ5000G?tO`K>RA1wUbN0TKH,0*5D");

        for (let message of messages) {
            expect(Nmea.isValid(message)).toBeFalsy(message);
        }
    });
});
