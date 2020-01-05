import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChildcarePage } from './childcare.page';

describe('ChildcarePage', () => {
  let component: ChildcarePage;
  let fixture: ComponentFixture<ChildcarePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildcarePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChildcarePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
