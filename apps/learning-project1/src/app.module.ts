import { Module } from '@nestjs/common';
import { MessagesModule } from './messages/messages.module';
import { ComputerModule } from './computer/computer.module';
import { CpuModule } from './cpu/cpu.module';
import { DiskModule } from './disk/disk.module';
import { PowerModule } from './power/power.module';

@Module({
  imports: [MessagesModule, ComputerModule, CpuModule, DiskModule, PowerModule],
})
export class AppModule {}
