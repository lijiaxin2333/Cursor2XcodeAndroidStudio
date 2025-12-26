import { spawn } from "node:child_process"
import {
  ExternalCommandRequest,
  ExternalCommandResult,
  IExternalCommandRunner
} from "../../domain/ports/IExternalCommandRunner"

export class NodeExternalCommandRunner implements IExternalCommandRunner {
  run(request: ExternalCommandRequest): Promise<ExternalCommandResult> {
    return new Promise((resolve, reject) => {
      const child = spawn(request.command, request.args, {
        cwd: request.cwd,
        shell: false
      })

      let stdout = ""
      let stderr = ""

      child.stdout?.on("data", (d) => {
        stdout += String(d)
      })

      child.stderr?.on("data", (d) => {
        stderr += String(d)
      })

      child.on("error", (e) => {
        reject(e)
      })

      child.on("close", (code) => {
        resolve({ exitCode: code, stdout, stderr })
      })
    })
  }
}


