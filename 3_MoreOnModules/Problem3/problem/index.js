import events from "events";
import { copyFileSync } from "fs";

class FitnessTracker extends events.EventEmitter {
  constructor() {
    super();
    this.progress = 0;
    this.goal = 1000;
  }

  addExercise(exercise) {

    this.progress += exercise.caloriesBurned;

    // console.log(this.progress + " " + this.goal);
    if (this.progress >= this.goal) {
      this.emit('goalReached');
      // this.progress = 0;
      // this.goal = 0;
      // console.log(this.progress+" "+this.goal);
    }
  }
}

const Solution = () => {
  let tracker = new FitnessTracker();

  tracker.on("goalReached", () => {
    console.log("Congratulations! You have reached your fitness goal.");
  });


  // simulate adding exercise
  tracker.addExercise({ name: "Running", caloriesBurned: 500 });
  tracker.addExercise({ name: "Weightlifting", caloriesBurned: 600 });
};

Solution();
export { FitnessTracker, Solution };
