import { TaskBoardService } from './task-board.service';
import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';

describe('TaskBoardService', () => {
  let service: TaskBoardService;

  beforeEach(() => {
     service = new TaskBoardService(Inject(HttpClient));
  });

  it('#getValue should return real value', () => {
    const totalDays = 500;
    const totalWidth = 1400;
    service.getColumnWidth(totalDays, totalWidth);
    expect(service.getColumnWidth(totalDays, totalWidth)).toBe(2.8);
  });
 
});