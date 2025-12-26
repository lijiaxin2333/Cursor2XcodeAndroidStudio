import { CodeLocation } from "../../domain/models/CodeLocation"
import { IExternalCommandRunner } from "../../domain/ports/IExternalCommandRunner"
import { IIdeJumper } from "../../domain/ports/IIdeJumper"

export class XcodeJumper implements IIdeJumper {
  constructor(
    private readonly runner: IExternalCommandRunner,
    private readonly command: string
  ) {}

  async jump(location: CodeLocation): Promise<void> {
    const result = await this.runner.run({
      command: this.command,
      args: ["-l", String(location.line), location.filePath]
    })

    if (result.exitCode !== 0) {
      throw new Error(result.stderr || `xed exitCode=${String(result.exitCode)}`)
    }
  }
}


