import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  constructor() { }
  ngOnInit(): void {

    this.dropdownList = [
      { item_id: 1, item_text: 'Lahore' },
      { item_id: 2, item_text: 'Islamabad' },
      { item_id: 3, item_text: 'Karachi' },
      { item_id: 4, item_text: 'Sialkot' },
      { item_id: 5, item_text: 'Multan' },
      { item_id: 6, item_text: 'Gujrat' },
      { item_id: 7, item_text: 'Faisalabad' },
      { item_id: 8, item_text: 'Rawalpindi' },
      { item_id: 9, item_text: 'Peshawar' },
      { item_id: 10, item_text: 'Gujranwala' }
    ];
    this.selectedItems = [
      { item_id: 1, item_text: 'Lahore' },
      { item_id: 2, item_text: 'Islamabad' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    $(document).ready(function () {
      $("form").on("change", ".file-upload-field", function () {
        $(this).parent(".file-upload-wrapper").attr("data-text", $(this).val().replace(/.*(\/|\\)/, ''));
      });
    });

  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }




  selectedCountry: number;
    countries = [
        { id: 1, name: 'Mobile Phones' },
        { id: 2, name: 'Gaming' },
        { id: 3, name: 'LED' },
        { id: 4, name: 'Air Conditioner' },
        { id: 5, name: 'Household' },
        { id: 6, name: 'Shoes' },
        { id: 7, name: 'Cloth' },
        { id: 8, name: 'Accessories' },
    ];
}
