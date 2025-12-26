import { CodeLocation } from "../../domain/models/CodeLocation"
import { IMessageService } from "../../domain/ports/IMessageService"
import { IdeJumperFactory, IdeTarget } from "../factories/IdeJumperFactory"

export class JumpService {
  constructor(
    private readonly jumperFactory: IdeJumperFactory,
    private readonly messageService: IMessageService
  ) {}

  async jump(target: IdeTarget, location: CodeLocation): Promise<void> {
    const jumper = this.jumperFactory.create(target)
    try {
      await jumper.jump(location)
    } catch (e) {
      const message = e instanceof Error ? e.message : String(e)
      this.messageService.showError(message)
    }
  }
}


