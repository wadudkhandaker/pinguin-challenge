import { render, RenderResult } from '@testing-library/angular';
import { TaskBoardComponent } from './task-board.component';
import { TaskBoardModule } from './task-board.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TaskBoardService } from './services/task-board.service';

async function renderComponent(): Promise<any> {
  return render(TaskBoardComponent, {
    excludeComponentDeclaration: true,
    imports: [TaskBoardModule, HttpClientModule]
  });
}

describe('TaskBoardComponent', () => {
  let renderResult: RenderResult<TaskBoardComponent>;
  let component: TaskBoardComponent;
  let taskBoardService: TaskBoardService;
  let httpClient : HttpClient;
  
  beforeEach(async () => {
    renderResult = await renderComponent();
    component = renderResult.fixture.debugElement.componentInstance;
    taskBoardService = new TaskBoardService(httpClient);
  });

  it('should create', () => {
    expect(renderResult).toBeTruthy();
  });

});