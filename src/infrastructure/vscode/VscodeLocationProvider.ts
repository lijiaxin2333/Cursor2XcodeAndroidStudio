import * as vscode from "vscode"
import { CodeLocation } from "../../domain/models/CodeLocation"
import { ILocationProvider } from "../../domain/ports/ILocationProvider"

export class VscodeLocationProvider implements ILocationProvider {
  getCurrentLocation(): CodeLocation | null {
    const editor = vscode.window.activeTextEditor
    if (!editor) return null

    const doc = editor.document
    if (doc.isUntitled) return null

    const filePath = doc.uri.fsPath
    const line = editor.selection.active.line + 1
    return { filePath, line }
  }
}


