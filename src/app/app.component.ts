import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    // specifies the template string for the AutoComplete component
    template: `<h2>Search</h2>
    <div style="width:250px"> <ejs-autocomplete id='atcelement' [dataSource]='sportsData' [(value)]='value'></ejs-autocomplete>
    <div style='margin-top: 50px'>
        <input type="text" [(ngModel)]="value" style="width:245px;height:25px" />
     </div></div>`
})
export class AppComponent {
    constructor() {
    }
    // defined the array of data
    public sportsData: string[] = ['Badminton','Dilbar', 'Basketball', 'Cricket', 'Football', 'Golf', 'Gymnastics', 'Hockey', 'Rugby', 'Snooker', 'Tennis'];
    // set width of the popup list
    public width: string = '250px';
    // set height of the popup list
    public height: string = '200px';
    // set placeholder to autocomplete element
    public text: string = "Find a game"

  }