import { render, RenderResult } from '@testing-library/angular';
import { TaskBoardService } from './task-board.service';
import { TaskBoardComponent } from './../task-board.component';
import { TaskBoardModule } from './../task-board.module';

async function renderComponent(): Promise<any> {
  return render(TaskBoardComponent, {
    excludeComponentDeclaration: true,
    imports: [TaskBoardModule]
  });
}

describe('TaskBoardService', () => {
  let renderResult: RenderResult<TaskBoardService>;
  let service: TaskBoardService;

  beforeEach(async () => {
    renderResult = await renderComponent();
    service = renderResult.fixture.debugElement.componentInstance;
  });

  it('should create', () => {
    expect(renderResult).toBeTruthy();
  });

});