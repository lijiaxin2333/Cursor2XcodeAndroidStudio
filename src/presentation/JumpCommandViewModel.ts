import { ILocationProvider } from "../domain/ports/ILocationProvider"
import { JumpService } from "../application/services/JumpService"

export class JumpCommandViewModel {
  constructor(
    private readonly locationProvider: ILocationProvider,
    private readonly jumpService: JumpService
  ) {}

  async jumpToXcode(): Promise<void> {
    const location = this.locationProvider.getCurrentLocation()
    if (!location) return
    await this.jumpService.jump("xcode", location)
  }

  async jumpToAndroidStudio(): Promise<void> {
    const location = this.locationProvider.getCurrentLocation()
    if (!location) return
    await this.jumpService.jump("androidStudio", location)
  }
}


