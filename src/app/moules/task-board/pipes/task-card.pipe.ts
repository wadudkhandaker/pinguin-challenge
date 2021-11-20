import { Pipe, PipeTransform, ElementRef} from '@angular/core';
import { TaskBoardService } from './../services/task-board.service';
import { Issues, ColorPriority } from './../models/task.board.interface';
import { CardDetailsDialogComponent } from './../components/card-details-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Pipe({
  name: 'taskCard'
})
export class TaskCardPipe implements PipeTransform {
  elem: HTMLElement;
  cardDetailsFunc: unknown;
  constructor(private taskBoardService: TaskBoardService, el: ElementRef, public dialog: MatDialog){
    this.elem = el.nativeElement as HTMLElement;
  }

  transform(value: string, columnWidth: number, dataSource: Issues[]): unknown {
    return this.getSpecificCardBylabel(value, columnWidth, dataSource)
  }

  getSpecificCardBylabel(value: string, columnWidth: number, dataSource: Issues[]): void {
    const issues = this.taskBoardService.getIssuesByLabel(value, dataSource);
    this.generateCard(issues, columnWidth);
  }

  generateCard(issues: Issues[], columnWidth: number): void {
    issues.forEach((issue)=> {
      const rootElem =  this.elem.parentNode as HTMLElement;
      if(rootElem) {
        const issueDays = this.taskBoardService.getTotalWorkDaysCount(issues, issue.fields.duedate);
        const timeEstimate = this.taskBoardService.secondsToDays(issue.fields.timetracking.originalEstimateSeconds);
        const cardContainerElem = document.createElement('div');
        const titleElem = document.createElement('p');
        titleElem.innerText = issue?.fields?.issuetype?.name;
        titleElem.style.textAlign = 'center';
        titleElem.style.top = '37%';
        titleElem.style.position = 'relative';

        cardContainerElem.style.width = `${timeEstimate * columnWidth}px`;
        cardContainerElem.style.left = `${rootElem.offsetLeft + (issueDays * columnWidth)}px`;
        cardContainerElem.style.position = 'absolute';
        cardContainerElem.style.top = '10px';
        cardContainerElem.style.height = '100px';
        cardContainerElem.style.cursor = 'pointer';
        cardContainerElem.appendChild(titleElem);

        if(issue.fields.priority.name === ColorPriority.LOW) {
          cardContainerElem.style.backgroundColor = '#7b6dc8';
        } else if (issue.fields.priority.name === ColorPriority.LOWEST) {
          cardContainerElem.style.backgroundColor = '#adb3fc';
        } else {
          cardContainerElem.style.backgroundColor = '#e5e67f';
        }

        this.cardDetailsFunc = cardContainerElem.addEventListener('click', (event) => {
          this.openDialog(issue);
        });
        
        // cardContainerElem.style.left
        rootElem.appendChild(cardContainerElem);
      }
    });
  }

  openDialog(issue: Issues): void {
    this.dialog.open(CardDetailsDialogComponent, {
      data: issue
    });
  };

}
