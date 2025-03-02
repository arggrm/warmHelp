import { Component } from '@angular/core';
import { AboutComponent } from "./about/about.component";
import { ActivitiesComponent } from "./activities/activities.component";
import { SettingsComponent } from "./settings/settings.component";
import { ProjectsComponent } from "./projects/projects.component";
import { CommonModule, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

type TabNames = 'about' | 'activities' | 'settings' | 'projects';

@Component({
  selector: 'app-profile',
  imports: [AboutComponent, CommonModule, NgFor, ActivitiesComponent, SettingsComponent, ProjectsComponent, RouterModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})

export class ProfileComponent {

  readonly tabs: TabNames[] = ['about', 'activities', 'settings', 'projects'];

  public isActiveItems = {
    about: true,
    activities: false,
    settings: false,
    projects: false,
  };

  setActiveTab(tab: TabNames): void {
    this.isActiveItems = {
      about: tab === 'about',
      activities: tab === 'activities',
      settings: tab === 'settings',
      projects: tab === 'projects'
    };
  }
}
