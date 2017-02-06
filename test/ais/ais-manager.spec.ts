import { } from "jasmine";

import { AisManager } from "../../src";

describe("AisManager", () => {
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

    it("should create instance.", () => {
        let manager: AisManager = new AisManager(
            message => { console.log(message); }
        );
    });

    it("should not create instance.", () => {
        let manager: AisManager = new AisManager(
            message => { console.log(message); }
        );

        let message = messages[0];
        manager.add(message);

        message = messages[2];
        manager.add(message);
        message = messages[3];
        manager.add(message);
    });
});
