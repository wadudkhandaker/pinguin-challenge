import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskBoard, Issues, StartEndDays } from './../models/task.board.interface';
 
@Injectable()
export class TaskBoardService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<TaskBoard> {
    const url = './assets/mock/Frontend_project_sample_data.json';
    return this.http.get<TaskBoard>(url);
  }

  secondsToDays(seconds: number): number {
    const sec = Number(seconds);
    const days = Math.floor(sec / (3600*24));
    if(!days) {
      return Math.floor(sec / 3600);
    }
    return Math.floor(sec / (3600*24));
  }

  getMinMaxDate(data: Issues[]): StartEndDays {
    let max = data[0].fields.duedate;
    let min = data[0].fields.duedate;
    for (let i = 0; i < data.length; i++) {
      if(data[i].fields.duedate) {
            max = new Date(data[i].fields.duedate) > new Date(max)? data[i].fields.duedate: max;
            min = new Date(data[i].fields.duedate) < new Date(min)? data[i].fields.duedate: min;
      }
    }
    return {startDate: min, endDate: max}
  }

  getTotalWorkDaysCount(data: Issues[], currentDate?: string): number {
    const dateRange = this.getMinMaxDate(data);
    const oneDay = 24 * 60 * 60 * 1000;
    const startDate = new Date(dateRange.startDate);
    const endDate = currentDate? new Date(currentDate): new Date(dateRange.endDate);
    const diffDays = Math.round(Math.abs((startDate.valueOf() - endDate.valueOf()) / oneDay));
    return diffDays;
  }

  getCardLabels(data: Issues[]): string[] {
    const lables = data.map((item: Issues) => item.fields.labels)
                  .reduce((si, current)=> si.concat(current), [])
                  .filter((label, i, arr) => arr.indexOf(label) === i);
    const labelsWithFilter = this.removeLabel(lables, 'Roadmap');

    return labelsWithFilter;
  }

  removeLabel(arr: string[], value: string): string[] {
    const index = arr.indexOf(value);
    if (index > -1) arr.splice(index, 1);
    return arr;
  }

  getColumnWidth(totalDays: number, totalWidth: number): number {
    return totalWidth/totalDays;
  }

  getIssuesByLabel(lablel: string, dataSource: Issues[]): Issues[] {
    return dataSource.filter((issue: Issues)=> issue.fields.labels.includes(lablel));
  }
}
