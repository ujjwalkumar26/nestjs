import {
  ClassSerializerInterceptor,
  Controller,
  UseInterceptors,
} from '@nestjs/common';
import { Logger } from '@nestjs/common/services';
import {
  Payload,
  MessagePattern,
  Ctx,
  NatsContext,
} from '@nestjs/microservices';
import { IPublishedMessage } from 'src/dtos';

// Incorrect Implementation here, should be used as an Individual app with its own services
@Controller()
export class NatsController {
  private _logger: Logger = new Logger(NatsController.name);

  @UseInterceptors(ClassSerializerInterceptor)
  @MessagePattern('subject.*') // wildcard
  getNotifications(
    @Payload() data: IPublishedMessage,
    @Ctx() context: NatsContext,
  ) {
    this._logger.debug(`Subject: ${context.getSubject()}`);
    this._logger.debug(`Message received: ${this.getMessage(data)}`);
  }

  private getMessage(message: IPublishedMessage): string {
    return `Publisher: ${message.Publisher}, Content: ${message.Content}`;
  }
}
