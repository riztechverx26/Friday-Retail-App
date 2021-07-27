import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $(document).ready(function () {
      (function ($) {
        $('#sidebarCollapse').on('click', function () {
          $('#friday-sidebar').toggleClass('active');
        });
      })($);

    });



  }

}
