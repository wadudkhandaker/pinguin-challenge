import { render, RenderResult } from '@testing-library/angular';
import { TaskBoardComponent } from './task-board.component';
import { TaskBoardModule } from './task-board.module';
import { HttpClientModule } from '@angular/common/http';

async function renderComponent(): Promise<any> {
  return render(TaskBoardComponent, {
    excludeComponentDeclaration: true,
    imports: [TaskBoardModule, HttpClientModule]
  });
}

describe('TaskBoardComponent', () => {
  let renderResult: RenderResult<TaskBoardComponent>;
  let component: TaskBoardComponent;

  beforeEach(async () => {
    renderResult = await renderComponent();
    component = renderResult.fixture.debugElement.componentInstance;
  });

  it('should create', () => {
    expect(renderResult).toBeTruthy();
  });

});