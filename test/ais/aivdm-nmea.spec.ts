import { } from "jasmine";

import { AivdmNmea } from "../../src";

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
            new AivdmNmea(message);
            fail(message);
        } catch (e) {
            expect(e.message).not.toBeNull(message);
        }

        message = messages[1];
        try {
            new AivdmNmea(message);
            fail(message);
        } catch (e) {
            expect(e.message).not.toBeNull(message);
        }
    });

    it("should create instance.", () => {
        let message: string = messages[0];
        expect(new AivdmNmea(message)).toBeTruthy();
        message = messages[2];
        expect(new AivdmNmea(message)).toBeTruthy();
        message = messages[3];
        expect(new AivdmNmea(message)).toBeTruthy();
        // console.log(new Aivdm(message));
    });
});
