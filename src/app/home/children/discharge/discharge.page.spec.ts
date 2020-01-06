import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DischargePage } from './discharge.page';

describe('DischargePage', () => {
  let component: DischargePage;
  let fixture: ComponentFixture<DischargePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DischargePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DischargePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
