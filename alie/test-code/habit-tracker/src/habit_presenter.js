export default class HabitPresenter {
  constructor(habit) {
    this.habit = habit;
  }

  increment(habit, update) {
    this.habits = this.habits.map((item) => {
      if (item.id === this.habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    update(this.habits);
  }

  decrement(habit, update) {
    this.habits = this.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
    update(this.habits);
  }

  addHabit(habit, update) {
    this.habits = [...this.habits, habit];
    update(this.habits);
  }

  deleteHabit(habit, update) {
    this.habits = this.habits.filter((item) => item.id !== habit.id);
    update(this.habits);
  }
  resetHabit(habit, update) {
    this.habits = this.habits.map((habit) => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });
    update(this.habits);
  }
}
