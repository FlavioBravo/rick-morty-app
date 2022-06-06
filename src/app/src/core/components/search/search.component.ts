import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() title = '';
  @Input() list = Array<any>();
  @Output() searchEvent = new EventEmitter<Array<any>>();
  searchForm: any;

  constructor() { 
    this.searchForm = new FormGroup({
      search: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const text = this.searchForm.get('search').value;
    const filteredResult = this.list.filter((val) =>
      val.name.toLowerCase().includes(text)
    );
    this.searchEvent.emit(filteredResult);
  }

}
