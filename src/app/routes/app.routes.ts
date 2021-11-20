import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "/task-board",
        pathMatch: "full"
      },
      {
        path: "task-board",
        loadChildren: () => import("./../moules/task-board/task-board.module").then((m) => m.TaskBoardModule)
      }
]