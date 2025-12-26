import { IMessageService } from "../../domain/ports/IMessageService"
import { VscodeMessageService } from "../vscode/VscodeMessageService"

export class VscodeMessageServiceFactory {
  create(): IMessageService {
    return new VscodeMessageService()
  }
}


