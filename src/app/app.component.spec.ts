import { render, RenderResult } from '@testing-library/angular';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { RouterTestingModule } from '@angular/router/testing';

async function renderComponent(): Promise<any> {
  return render(AppComponent, {
    excludeComponentDeclaration: true,
    imports: [AppModule, RouterTestingModule]
  });
}

describe('AppComponent', () => {
  let renderResult: RenderResult<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    renderResult = await renderComponent();
    component = renderResult.fixture.debugElement.componentInstance;
  });

  it('should create', () => {
    expect(renderResult).toBeTruthy();
  });

});