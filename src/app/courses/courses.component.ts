import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  // render courses in a list
  // select a course
  // render selected course

  courses = [
    {
      id: 1,
      title: 'Angular 13 Fundamentals',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: 'Tacos',
      description: 'Everydais a good day for tacos',
      percentComplete: 100,
      favorite: true
    },
    {
      id: 3,
      title: 'Still Tacos',
      description: 'What can I say?',
      percentComplete: 50,
      favorite: true
    }
  ];

  selectedCourse: any

  constructor() {}

  ngOnInit(): void {}

  selectCourse(course) {
    this.selectedCourse = course
  }

  deleteCourse(courseId) {
    console.log('DELETE COURSE ', courseId)
  }
}
