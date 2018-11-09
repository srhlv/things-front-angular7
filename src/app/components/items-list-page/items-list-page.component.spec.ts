import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsListPageComponent } from './items-list-page.component';

describe('ItemsListPageComponent', () => {
  let component: ItemsListPageComponent;
  let fixture: ComponentFixture<ItemsListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
