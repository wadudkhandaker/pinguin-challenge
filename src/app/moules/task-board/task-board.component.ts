import { Component, OnDestroy, OnInit} from '@angular/core';
import { TaskBoardService} from './services/task-board.service';
import { TaskBoard, Issues, Epic, Roadmap } from './models/task.board.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss']
})
export class TaskBoardComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription;
  dataSource: Issues[] = [];
  totalWorkingDays = 0;
  cardLabels: string[] = [];
  columnWidth = 0;
  totalWidth = 1280;
  ttt= 0;
  constructor(private taskBoardService: TaskBoardService) {}

  ngOnInit(): void {
    this.subscription =  this.taskBoardService.getCategories().pipe()
    .subscribe((data: TaskBoard) => {
      this.dataSource = this.filterWithEpicAndRoadmap(data?.issues || []);
      this.cardLabels = this.taskBoardService.getCardLabels(this.dataSource);
      this.totalWorkingDays = this.taskBoardService.getTotalWorkDaysCount(this.dataSource);
      this.columnWidth = this.taskBoardService.getColumnWidth(this.totalWorkingDays, this.totalWidth);  
   });
  }

  ngOnDestroy (): void {
    this.subscription.unsubscribe();
  }

  filterWithEpicAndRoadmap(issues: Issues[]): Issues[] {
    return issues.filter((data:Issues)=> data.fields.issuetype.name === Epic && data.fields.labels.includes(Roadmap))
  }

  counter(i: number): number[] {
    return new Array(i) as number[];
  }
}

