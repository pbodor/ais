import { AivdmNmea } from "./aivdm-nmea";
import { AivdmPayload } from "./aivdm-payload";

export class Ais {
  payload: AivdmPayload;

  constructor(type: number, aivdm: AivdmNmea) {
    // this.payload = aivdm.payload;
  }
}
