import { Aivdm } from "./aivdm";
import { AisPayload } from "./ais-payload";

export class Ais {
  payload: AisPayload;

  constructor(type: number, aivdm: Aivdm) {
    this.payload = aivdm.payload;
  }
}
