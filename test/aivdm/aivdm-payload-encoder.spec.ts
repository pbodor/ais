import { } from "jasmine";

import { AivdmPayloadEncoder } from "../../src";

describe("Aivdm", () => {
    let messages: string[] = [];

    beforeEach(() => {
        messages.push("177KQJ5000G?tO`K>RA1wUbN0TKH");
        messages.push("55P5TL01VIaAL@7WKO@mBplU@<PDhh000000001S;AJ::4A80?4i@E531@0000000000000");
    });

    afterEach(() => {
        messages.length = 0;
    });

    it("should not create instance.", () => {
        let message = messages[0];
        message = messages[1];
    });
});
