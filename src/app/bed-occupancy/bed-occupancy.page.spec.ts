import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BedOccupancyPage } from './bed-occupancy.page';

describe('BedOccupancyPage', () => {
  let component: BedOccupancyPage;
  let fixture: ComponentFixture<BedOccupancyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BedOccupancyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BedOccupancyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
