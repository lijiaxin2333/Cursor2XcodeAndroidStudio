import * as vscode from "vscode"
import { JumpCommandViewModel } from "./presentation/JumpCommandViewModel"
import { VscodeLocationProviderFactory } from "./infrastructure/factories/VscodeLocationProviderFactory"
import { ExternalCommandRunnerFactory } from "./infrastructure/factories/ExternalCommandRunnerFactory"
import { IdeJumperFactory } from "./application/factories/IdeJumperFactory"
import { JumpService } from "./application/services/JumpService"
import { VscodeMessageServiceFactory } from "./infrastructure/factories/VscodeMessageServiceFactory"

export function activate(context: vscode.ExtensionContext) {
  const locationProvider = new VscodeLocationProviderFactory().create()
  const commandRunner = new ExternalCommandRunnerFactory().create()
  const messageService = new VscodeMessageServiceFactory().create()
  const jumperFactory = new IdeJumperFactory(commandRunner)
  const jumpService = new JumpService(jumperFactory, messageService)
  const vm = new JumpCommandViewModel(locationProvider, jumpService)

  context.subscriptions.push(
    vscode.commands.registerCommand("jumpToNativeIde.jumpToXcode", () => vm.jumpToXcode()),
    vscode.commands.registerCommand("jumpToNativeIde.jumpToAndroidStudio", () => vm.jumpToAndroidStudio())
  )
}

export function deactivate() {}


