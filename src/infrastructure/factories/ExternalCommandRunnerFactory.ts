import { IExternalCommandRunner } from "../../domain/ports/IExternalCommandRunner"
import { NodeExternalCommandRunner } from "../node/NodeExternalCommandRunner"

export class ExternalCommandRunnerFactory {
  create(): IExternalCommandRunner {
    return new NodeExternalCommandRunner()
  }
}


