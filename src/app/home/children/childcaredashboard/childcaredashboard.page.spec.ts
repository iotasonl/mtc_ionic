import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChildcaredashboardPage } from './childcaredashboard.page';

describe('ChildcaredashboardPage', () => {
  let component: ChildcaredashboardPage;
  let fixture: ComponentFixture<ChildcaredashboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildcaredashboardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChildcaredashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
