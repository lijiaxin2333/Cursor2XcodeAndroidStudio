export type ExternalCommandRequest = {
  command: string
  args: string[]
  cwd?: string
}

export type ExternalCommandResult = {
  exitCode: number | null
  stdout: string
  stderr: string
}

export interface IExternalCommandRunner {
  run(request: ExternalCommandRequest): Promise<ExternalCommandResult>
}


