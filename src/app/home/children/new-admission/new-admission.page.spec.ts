import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewAdmissionPage } from './new-admission.page';

describe('NewAdmissionPage', () => {
  let component: NewAdmissionPage;
  let fixture: ComponentFixture<NewAdmissionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAdmissionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewAdmissionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
