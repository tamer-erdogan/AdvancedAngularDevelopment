import { FoodService } from './food.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { FoodItem } from '../model/food-item.model';
import { environment } from 'src/environments/environment';

describe('FoodService', () => {
  let service: FoodService;
  let controller: HttpTestingController;
  let data = [
    { name: 'Rehgulasch', rating: 2 },
    { name: 'Leberkäse', rating: 2 }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FoodService]
    });

    service = TestBed.get(FoodService);
    controller = TestBed.get(HttpTestingController);
  });

  it('should be created & made the initialized the data', done => {
    expect(service).toBeTruthy();

    //setup the service mock
    const req = controller.expectOne(`${environment.apiUrl}food`);
    expect(req.request.method).toEqual('GET');

    //flushing down mock data
    req.flush(data);
    //make sure all requests are completed
    controller.verify();

    //testing a private method - use any type to fool the compiler
    let fs: any = service;
    fs.setState(data);

    service.getItems().subscribe(data => {
      expect(data.length).toEqual(2);
      done();
    });
  });

  it('should create a post in an array', done => {
    service.addItem({ name: 'Gulasch', rating: 2 });

    service.getItems().subscribe(data => {
      expect(data.length).toEqual(1);
      done();
    });
  });

  it('should return the correct amount of items', done => {
    service.addItem({ name: 'Gulasch', rating: 2 });
    service.addItem({ name: 'Panierter Kabeljau', rating: 3 });

    service.getItems().subscribe(data => {
      expect(data.length).toEqual(2);
      expect(data[1].name).toEqual('Panierter Kabeljau');
      done();
    });
  });

  it('should have the correct nbr of items after delete', done => {
    const g: FoodItem = { name: 'Gulasch', rating: 2 };
    service.addItem(g);
    service.addItem({ name: 'Panierter Kabeljau', rating: 3 });
    service.deleteItem(g);

    service.getItems().subscribe(data => {
      expect(data.length).toEqual(1);
      expect(data).toEqual([{ name: 'Panierter Kabeljau', rating: 3 }]);
      done();
    });
  });
});
