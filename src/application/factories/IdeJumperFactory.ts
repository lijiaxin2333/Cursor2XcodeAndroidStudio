import * as vscode from "vscode"
import { IExternalCommandRunner } from "../../domain/ports/IExternalCommandRunner"
import { IIdeJumper } from "../../domain/ports/IIdeJumper"
import { XcodeJumper } from "../jumpers/XcodeJumper"
import { AndroidStudioJumper } from "../jumpers/AndroidStudioJumper"

export type IdeTarget = "xcode" | "androidStudio"

export class IdeJumperFactory {
  constructor(private readonly runner: IExternalCommandRunner) {}

  create(target: IdeTarget): IIdeJumper {
    const config = vscode.workspace.getConfiguration("jumpToNativeIde")

    if (target === "xcode") {
      const command = config.get<string>("xcode.command", "xed")
      return new XcodeJumper(this.runner, command)
    }

    const command = config.get<string>("androidStudio.command", "studio")
    return new AndroidStudioJumper(this.runner, command)
  }
}


