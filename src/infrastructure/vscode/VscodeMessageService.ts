import * as vscode from "vscode"
import { IMessageService } from "../../domain/ports/IMessageService"

export class VscodeMessageService implements IMessageService {
  showInfo(message: string): void {
    void vscode.window.showInformationMessage(message)
  }

  showError(message: string): void {
    void vscode.window.showErrorMessage(message)
  }
}


