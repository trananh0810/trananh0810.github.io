let myApp = angular.module("myApp", []);

myApp.controller("myController", function($scope) {
  $scope.listSkill = [
    { id: "pgb-java", name: "JAVA", mark: 60 },
    { id: "pgb-html", name: "HTML", mark: 50 },
    { id: "pgb-css", name: "CSS", mark: 50 },
    { id: "pgb-pts", name: "Photoshop", mark: 50 },
    { id: "pgb-jquery", name: "jQuey", mark: 50 },
    { id: "pgb-bootstrap", name: "Bootstrap", mark: 50 }
  ];

  $scope.listEdu = [
    {level: 'Cao đẳng', schoolName: 'Trường Cao đẳng FPT Polytechnic', detail: 'Chuyên ngành Ứng dụng phần mềm', time: 'Tháng 5/2018 đến nay'},
    {level: 'Trung học phổ thông', schoolName: 'Trường THPT Tam Dương - Vĩnh Phúc', detail: '', time: '2010 - 2013'},
    {level: 'Trung học cơ sở', schoolName: 'Trường THCS Đồng Tĩnh - Tam Dương - Vĩnh Phúc', detail: '', time: '2006 - 2010'},
    {level: 'Tiểu học', schoolName: 'Trường Tiểu học Đồng Tĩnh B - Tam Dương - Vĩnh Phúc', detail: '', time: '2001 - 2006'},
    {level: 'Mẫu giáo', schoolName: 'Trường Mẫu giáo Đồng Tĩnh - Tam Dương - Vĩnh Phúc', detail: '', time: '1998 - 2001'}
  ];

  $scope.listExperience = [
    {company: 'Công Ty TNHH Hệ Thống Thông Tin FPT', position: 'Thực tập sinh Java', time: 'Tháng 11/2019 đến nay'},
    {company: 'Công ty Cổ phần DV di động Thế Hệ Mới', position: 'Nhân viên nhập liệu', time: 'Tháng 8/2019 - Tháng 10/2019'}
  ];

  $scope.listEvent = [
    { fancybox: 'gold-bee-summer-2019',
      widthClass: 'width1',
      eventName: 'Lễ vinh danh Ong Vàng Kỳ Summer 2019', 
      caption: 'Lễ Tôn Vinh Ong Vàng Kỳ Summer 2019 (Tháng 10 - 2019)', 
      time: 'Tháng 10/2019',
      thumnail: 'IMG_1018.JPG',
      imgs: ['IMG_1017.JPG', 'IMG_1014.JPG', 'IMG_1015.JPG']
    },
    { fancybox: 'gold-bee-spring-2019',
      widthClass: 'width1',
      eventName: 'Lễ vinh danh Ong Vàng Kỳ Spring 2019', 
      caption: 'Lễ Tôn Vinh Ong Vàng Kỳ Spring 2019 (Tháng 6 - 2019)', 
      time: 'Tháng 6/2019',
      thumnail: '1.JPG',
      imgs: ['2.JPG', '3.JPG', '4.JPG', '5.JPG', '6.jpeg']
    },
    { fancybox: 'fpolycup-2019',
      widthClass: 'width1',
      eventName: 'Giải bóng đá FPOLY Cup 2019', 
      caption: 'Giải bóng đá FPOLY Cup 2019 (Tháng 3 - 2019)', 
      time: 'Tháng 3/2019',
      thumnail: 'fpolycup-1.JPG',
      imgs: ['fpolycup-2.JPG', 'fpolycup-3.JPG', 'fpolycup-4.JPG', 'fpolycup-5.JPG']
    }
  ];
});