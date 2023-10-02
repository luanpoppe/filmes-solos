import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sections-title',
  templateUrl: './sections-title.component.html',
  styleUrls: ['./sections-title.component.scss'],
})
export class SectionsTitleComponent implements OnInit {
  @Input() titleContent!: string;
  @Input() userName: string = '';
  @Input() titleContent2: string = '';

  constructor() {}

  ngOnInit(): void {}
}
