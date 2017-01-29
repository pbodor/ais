import { } from "jasmine";

import { AivdmNmea } from "../../src";
import { AivdmSentence } from "../../src";

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
            new AivdmSentence(message);
            fail(message);
        } catch (e) {
            expect(e.message).not.toBeNull(message);
        }
    });

    it("should create instance.", () => {
        let message: AivdmNmea = new AivdmNmea(messages[0]);
        expect(new AivdmSentence(message)).toBeTruthy();
        message = new AivdmNmea(messages[2]);
        expect(new AivdmSentence(message)).toBeTruthy();
        message = new AivdmNmea(messages[3]);
        expect(new AivdmSentence(message)).toBeTruthy();
    });

    it("should add aivdm1.", () => {
        let sentence: AivdmSentence = new AivdmSentence(new AivdmNmea(messages[2]));
        let message: AivdmNmea = new AivdmNmea(messages[3]);
        let result: boolean = sentence.isAddable(message);
        expect(result).toBeTruthy();
        sentence.add(message);
        console.log(sentence.payload);
    });

    it("should add aivdm2.", () => {
        let sentence: AivdmSentence = new AivdmSentence(new AivdmNmea(messages[3]));
        let message: AivdmNmea = new AivdmNmea(messages[2]);
        let result: boolean = sentence.isAddable(message);
        expect(result).toBeTruthy();
        sentence.add(message);
        console.log(sentence.payload);
    });

    it("should not add aivdm.", () => {
        let sentence: AivdmSentence = new AivdmSentence(new AivdmNmea(messages[2]));
        let message: AivdmNmea = new AivdmNmea(messages[2]);
        let result: boolean = sentence.isAddable(message);
        expect(result).toBeFalsy();
    });
});
