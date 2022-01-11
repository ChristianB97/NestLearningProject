import { Module } from '@nestjs/common';
import { ComputerController } from './computer.controller';
import { DiskService } from '../disk/disk.service';
import { CpuService } from '../cpu/cpu.service';

@Module({
  imports: [DiskService, CpuService],
  controllers: [ComputerController]
})
export class ComputerModule {}
