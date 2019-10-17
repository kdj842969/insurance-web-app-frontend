import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ApplicationsService} from '../shared/services/applications.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Application} from '../shared/models/application';
import {Car} from '../shared/models/car';
import {Client} from '../shared/models/client';
import {Policy} from '../shared/models/policy';
import {Router} from '@angular/router';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit, AfterViewInit {

  dataSource = new MatTableDataSource<Application>();

  displayedColumns = ['client', 'status', 'update', 'delete'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  car: Car = new Car();
  policy: Policy = new Policy();
  client: Client = new Client();
  applications: Application[] = [new Application()];

  constructor(private applicationService: ApplicationsService,
              private router: Router) {}

  ngOnInit() {
    this.applicationService.getApplications().subscribe((res) => {
      this.applications = res;
      this.dataSource.data = this.applications;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  addApplication() {
    this.router.navigate(['applications/new']);
  }

  redirectToDelete (id) {
    this.applicationService.deleteApplication(id).subscribe(res => {
      if (res.success === true) {
        this.applicationService.getApplications().subscribe((res) => {
          this.applications = res;
          this.dataSource.data = this.applications;
        });
      } else {
        console.log('delete fail');
      }
    });
  }

  redirectToUpdate(id) {
    this.router.navigate(['applications/update', id]);
  }
}
