import { Injectable,Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}


@Injectable()
export class CronService {
  private readonly logger = new Logger(CronService.name);
  @Cron('0/10 * * * * *')
  handleCron() {
    this.logger.debug('cron log...')
  }
}