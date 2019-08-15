import { Component, OnInit, Input } from "@angular/core";
import { User } from "../User";

@Component({
  selector: "app-tab",
  templateUrl: "./tab.component.html",
  styleUrls: ["./tab.component.scss"]
})
export class TabComponent implements OnInit {
  @Input("tabTitle") title: string;
  @Input() active = false;
  public user = new User();
  constructor() {}

  ngOnInit() {}
}
