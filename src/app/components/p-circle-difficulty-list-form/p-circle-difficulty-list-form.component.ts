import { Component, OnInit } from '@angular/core';

// imports class
import { PCircleDifficultyList } from '../../models/p-circle-difficulty-list';

@Component({
  selector: 'app-p-circle-difficulty-list-form',
  templateUrl: './p-circle-difficulty-list-form.component.html',
  styleUrls: ['./p-circle-difficulty-list-form.component.sass'],
})
export class PCircleDifficultyListFormComponent implements OnInit {

  public pCircleDifficultyList: PCircleDifficultyList;

  constructor() {}

  ngOnInit(): void {
    this.pCircleDifficultyList = new PCircleDifficultyList();
  }
}
