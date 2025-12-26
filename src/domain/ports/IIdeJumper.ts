import { CodeLocation } from "../models/CodeLocation"

export interface IIdeJumper {
  jump(location: CodeLocation): Promise<void>
}


