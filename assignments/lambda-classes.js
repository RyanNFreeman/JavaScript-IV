// CODE here for your Lambda Classes

class Person {
    constructor(human) {
        this.name = human.name;
        this.age = human.age;
        this.location = human.location;
        this.gender = human.gender;
    }
    speak () {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
};

class Instructor extends Person {
    constructor(teacher) {
        super(teacher);
        this.specialty = teacher.specialty;
        this.favLanguage = teacher.favLanguage;
        this.catchPhrase = "Don't forget the homies";
    }
    demo (subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(subject) {
        console.log `${student.name} receives a perfect score on ${subject}`;
    }
};

class Student extends Person {
    constructor(learner) {
        super(learner);
        this.previousBackground = learner.previousBackground;
        this.className = learner.className;
        this.favSubjects = learner.favSubjects;
    }
    listSubjects(favSubjects) {
        console.log(favSubjects);
    }
    PRAssignment(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challeng on ${subject}`)
    }
};

class ProjectManager extends Instructor {
    constructor(PM) {
        super(PM);
        this.gradClassName = "CS1";
        this.favInstructor = "Sean"; 
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
};

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const joe = new ProjectManager({
      name: 'Joe',
      location: 'The Cloud',
      age: 30,
      gender: 'male',
      channel: 'Web17',
  })

  const ryan = new Student({
      name: 'Ryan',
      location: 'Salt Lake',
      age: 28,
      gender: 'male',
      previousBackground: 'finance',
      className: 'CS17',
      favSubjects: ['Html','CSS','JavaScript'],
  })

  console.log(fred.demo('User Interface'));
  console.log(ryan.listSubjects(['JS','CSS']));
  console.log(joe.standUp('Joe17'));
  console.log(joe.debugsCode(ryan, 'JS'));

