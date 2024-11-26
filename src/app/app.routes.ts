import { Routes } from '@angular/router';
import { TrainingHomeComponent } from './training-home/training-home.component';
import { OverallHomeComponent } from './overall-home/overall-home.component'; // Import the overall homepage component
import { InstructorsComponent } from './instructors/instructors.component';
import { DeltanetComponent } from './deltanet/deltanet.component';
import { ModulesComponent } from './modules/modules.component';


export const routes: Routes = [
  { path: '', component: OverallHomeComponent }, // Default route
  { path: 'training-home', component: TrainingHomeComponent }, // Training Home route
  { path: 'instructors', component: InstructorsComponent },
  { path: 'deltanet', component: DeltanetComponent },
  { path: 'home', component: OverallHomeComponent },
  { path: 'modules', component: ModulesComponent },
];
