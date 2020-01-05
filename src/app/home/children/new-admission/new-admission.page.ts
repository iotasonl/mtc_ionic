import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-admission',
  templateUrl: './new-admission.page.html',
  styleUrls: ['./new-admission.page.scss'],
})
export class NewAdmissionPage implements OnInit {

  constructor() {}
  // birthDate = Date.now();
  ngOnInit() {
  }

  public birthdate: any;
  public age: number;

  public CalculateAge(): void
     {
       debugger
       
       let a = Date.parse(this.birthdate);
      //  d = Date.now()
       if(this.birthdate){
        var timeDiff = Math.abs(Date.now() - a);
        // document.getElementById('age').value = timeDiff;
      }
    }

}
