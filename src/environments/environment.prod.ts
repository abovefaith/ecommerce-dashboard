export const environment = {
  production: true,
  maintenance: false,
  apiUrl: 'https://idapi.kenwideinstitute.com/api',
  examApiUrl: 'https://exams.kenwideinstitute.com/api',
  courseApiUrl: 'https://course.kenwideinstitute.com/api',
  courseIntakeApiUrl: 'https://courseintake.kenwideinstitute.com/api',
  enrollmentApiUrl: 'https://enrollment.kenwideinstitute.com/api',
  venueApiUrl: 'https://venue.kenwideinstitute.com/api',
  version: 'v1',
  authConfig: {
    authority: 'https://id.kenwideinstitute.com',
    redirectUrl: window.location.origin,
    postLogoutRedirectUri: window.location.origin,
    clientId: 'kenwide-ui',
    scope: 'openid profile email identity_admin_api roles address kenwide_course_api kenwide_venue_api kenwide_result_api  kenwide_exam_event_api kenwide_exam_module_api kenwide_exam_category_api kenwide_exam_api kenwide_enrollment_api kenwide_course_intake_api  kenwide_booked_exam_api kenwide_booked_course_api',
    responseType: 'code',
    silentRenew: false,
    useRefreshToken: true,
  },
  signUpUrl: 'https://id.kenwideinstitute.com/Account/Register',
  enableAuthenicatorUrl: 'https://id.kenwideinstitute.com/Manage/EnableAuthenticator',
  contactUrl: 'https://www.kenwideinstitute.com/contactform.php',
  examUrl: 'https://www.kenwideinstitute.com/examform.php',
  dataUrl: 'assets/mock-data/osd-exams.json',
  apiUrls: {
    idApiUrl:'https://idapi.kenwideinstitute.com/api',
    exam: 'https://exams.kenwideinstitute.com/api',
    examEvent: 'https://examevents.kenwideinstitute.com/api',
    examCategory: 'https://examcategory.kenwideinstitute.com/api',
    course: 'https://course.kenwideinstitute.com/api/Course',
    venue: 'https://venue.kenwideinstitute.com/api/Venue',
    enrollment: 'https://enrollment.kenwideinstitute.com/api/Enrollment',
  },
};
