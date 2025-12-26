import { CodeLocation } from "../models/CodeLocation"

export interface ILocationProvider {
  getCurrentLocation(): CodeLocation | null
}


