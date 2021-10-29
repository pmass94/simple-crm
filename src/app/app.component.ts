import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('drawer') drawer: MatDrawer;

  openDrawer = true;
  title = 'simple-crm';
  drawerMode = "side"; // indicates current drawer-mode ('side' for wide screens, 'over' for mobile devices)


  constructor(
  ) { }

  ngOnInit() {
    this.adaptDrawer();
  }

  adaptDrawer() {

    if (window.innerWidth > 850) {
      this.drawerMode = "side";
    } else {
      this.drawerMode = "over";
    }
  }



}