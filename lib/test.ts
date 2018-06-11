import {
  User,
  LearningObject,
  LearningGoal,
  LearningOutcome,
  InstructionalStrategy,
  AssessmentPlan
} from './index';
import { levels } from '@cyber4all/clark-taxonomy';

function basicTest() {
  console.log('----- Testing User Entity -----');
  let newUser = new User(
    'test1',
    'Test User',
    'test@test.com',
    'CLARK',
    'test123'
  );
  console.log();
  console.log('New User Entity: ', newUser);
  console.log();
  console.log('----- User Entity Testing Complete -----');
  console.log();

  console.log('----- Testing Learning Object Entity -----');
  let newLearingObject = new LearningObject(
    newUser,
    'New Test Learning Object'
  );
  newLearingObject.date = new Date().toLocaleString();
  console.log();
  console.log('New Learning Object Entity: ', newLearingObject);
  console.log();
  console.log('----- Learning Object Entity Testing Complete -----');

  console.log();

  console.log('----- Testing Learning Goal Entity -----');
  let newLearingGoal = new LearningGoal('New Goal 1');
  console.log();
  console.log('New Learning Goal Entity: ', newLearingGoal);
  console.log();
  console.log('----- Learning Goal Entity Testing Complete -----');

  console.log();

  console.log('----- Testing Learning Outcome Entity -----');
  let newLearingOutcome = new LearningOutcome(newLearingObject);
  console.log();
  console.log('New Learning Outcome Entity: ', newLearingOutcome);
  console.log();
  console.log('----- Learning Outcome Entity Testing Complete -----');
  console.log();

  console.log('----- Testing Instructional Strategy Entity -----');
  let newInstructionalStrategy = new InstructionalStrategy(newLearingOutcome);
  console.log();
  console.log('New Instructional Strategy Entity: ', newInstructionalStrategy);
  console.log();
  console.log('----- Instructional Strategy Entity Testing Complete -----');

  console.log();

  console.log('----- Testing Assessment Plan Entity -----');
  let newAssessmentPlan = new AssessmentPlan(newLearingOutcome);
  console.log();
  console.log('New Assessment Plan Entity: ', newAssessmentPlan);
  console.log();
  console.log('----- Assessment Plan Entity Testing Complete -----');

  console.log();

  console.log(
    '----- Testing Learning Object Entity Property Modification -----'
  );

  // Add Goal
  newLearingObject.addGoal('New Goal 2');
  //Add Outcome
  let newLearningOutcome2 = newLearingObject.addOutcome();
  newLearningOutcome2.text = 'New Learning Outcome';
  //Add Instructional Strategy
  let newInstructionalStrategy2 = newLearingOutcome.addStrategy();
  newInstructionalStrategy2.text = 'New Instructional Strategy 2';
  //Add Assessment Plan
  let newAssessmentPlan2 = newLearingOutcome.addAssessment();
  newAssessmentPlan2.text = 'New Assessment Plan 2';

  console.log();
  console.log(
    'New Learning Object Entity With Filled Properties: ',
    newLearingObject
  );
  console.log();
  console.log("----- Testing Learning Object Entity's Children -----");
  console.log();
  const child1 = new LearningObject(newUser, 'Child1');
  const child1_child1 = new LearningObject(newUser, "Child 1's Child 1");
  const child1_child2 = new LearningObject(newUser, "Child 1's Child 2");
  child1.children = [child1_child1, child1_child2];
  const child2 = new LearningObject(newUser, 'Child2');
  const child3 = new LearningObject(newUser, 'Child3');
  const child4 = new LearningObject(newUser, 'Child4');
  const child5 = new LearningObject(newUser, 'Child5');
  const children = [child1, child2, child3, child4, child5];
  newLearingObject.children = children;
  console.log(newLearingObject);
  console.log();
  console.log('----- Testing Learning Object Instantiation -----');
  console.log();
  let object = JSON.parse(JSON.stringify(newLearingObject));
  object.blah = 'FOO BLAH';
  console.log();
  console.log('----- Primitive Object -----');
  object._goals[0]._text = null;
  console.log(object);
  console.log();
  console.log('----- Instantiate Object -----');
  console.log(LearningObject.instantiate(object));
  console.log();
  console.log(
    "----- Removing Learning Object Entity's Property Modifications -----"
  );
  console.log();
  newLearingOutcome.removeAssessment(0);
  newLearingOutcome.removeStrategy(0);
  newLearingObject.removeOutcome(0);
  newLearingObject.removeGoal(0);
  newLearingObject.children = [];
  console.log('Removed properties', newLearingObject);
  console.log();
  console.log(
    '----- Learning Object Entity Property Modification Testing Complete -----'
  );
  console.log();
}

basicTest();
