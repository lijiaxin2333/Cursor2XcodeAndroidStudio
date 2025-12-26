import { ILocationProvider } from "../../domain/ports/ILocationProvider"
import { VscodeLocationProvider } from "../vscode/VscodeLocationProvider"

export class VscodeLocationProviderFactory {
  create(): ILocationProvider {
    return new VscodeLocationProvider()
  }
}


