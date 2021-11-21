import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { TaskBoardService } from './task-board.service';
import { mockData } from './../task-board.mock';
import { TaskBoard, Issues } from './../models/task.board.interface';
import { HttpClientTestingModule, HttpTestingController } from  '@angular/common/http/testing';

describe('TetsService', () => {
  let service: TaskBoardService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [TaskBoardService]
    });
    service = TestBed.inject(TaskBoardService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getCategories', () => {
    test('should return task board data', () => {
      service.getCategories().subscribe((data: TaskBoard) => {
        expect(data).not.toBe(null);
        expect(JSON.stringify(data)).toEqual(JSON.stringify(mockData));
      });
      const req = httpMock
      .expectOne(`./assets/mock/Frontend_project_sample_data.json`);
      req.flush(mockData);
    });
  });

  describe('secondsToDays', () => {
    test('should return number of days', () => {
      const spy = jest.spyOn(service, 'secondsToDays')
      const seconds = 720000;
      service.secondsToDays(seconds);
      expect(service.secondsToDays(seconds)).toEqual(8);
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('getMinMaxDate', () => {
    test('should return min and max date', () => {
      const spy = jest.spyOn(service, 'getMinMaxDate');
      const issues = mockData.issues || [];
      service.getMinMaxDate(issues);
      expect(service.getMinMaxDate(issues)).toEqual({startDate: '2019-09-02', endDate: '2019-09-02'});
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('getTotalWorkDaysCount', () => {
    test('should return total working days', () => {
      const spy = jest.spyOn(service, 'getTotalWorkDaysCount');
      const currentDate = '2021-11-21';
      const issues = mockData.issues || [];
      service.getTotalWorkDaysCount(issues, currentDate);
      expect(service.getTotalWorkDaysCount(issues, currentDate)).toEqual(811);
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('getCardLabels', () => {
    test('should return all card labels', () => {
      const spy = jest.spyOn(service, 'getCardLabels');
      const issues = mockData.issues || [];
      service.getCardLabels(issues);
      expect(service.getCardLabels(issues)).toEqual(['Content-Editing','Frontend','Maintenance']);
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('getColumnWidth', () => {
    test('should return column width', () => {
      const spy = jest.spyOn(service, 'getColumnWidth');
      const totalDays = 811;
      const totalWidth = 1080;
      service.getColumnWidth(totalWidth, totalDays);
      expect(service.getColumnWidth(totalWidth, totalDays)).toEqual(0.7509259259259259);
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('getIssuesByLabel', () => {
    test('should return the list based on given label', () => {
      const spy = jest.spyOn(service, 'getIssuesByLabel');
      const issues = mockData.issues || [];
      service.getIssuesByLabel('Frontend', issues);
      expect(service.getIssuesByLabel('Frontend', issues)).toEqual(mockData.issues);
      expect(spy).toHaveBeenCalled();
    });
  });

});