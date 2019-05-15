const taskType = {
  GUESS_TWO: `game-1`,
  GUESS_ONE: `game-2`,
  FIND: `game-3`
};

const taskTypeToTaskTitle = {
  [taskType.GUESS_TWO]: `Угадайте для каждого изображения фото или рисунок?`,
  [taskType.GUESS_ONE]: `Угадайте для каждого изображения фото или рисунок?`,
  [taskType.FIND]: `Угадайте для каждого изображения фото или рисунок?`,
};

const TASKS = [
  {
    type: taskType.GUESS_TWO,
    title: taskTypeToTaskTitle[taskType.GUESS_TWO],
    questions: [
      {
        type: `photo`,
        img: `http://i.imgur.com/1KegWPz.jpg`,
      },
      {
        type: `paint`,
        img: `https://k42.kn3.net/CF42609C8.jpg`
      }
    ]
  },
  {
    type: taskType.GUESS_ONE,
    title: taskTypeToTaskTitle[taskType.GUESS_ONE],
    questions: [
      {
        type: `photo`,
        img: `https://i.imgur.com/DiHM5Zb.jpg`,
      }
    ]
  },
  {
    type: taskType.FIND,
    title: taskTypeToTaskTitle[taskType.FIND],
    questions: [
      {
        type: `photo`,
        isSelected: false,
        img: `http://i.imgur.com/DKR1HtB.jpg`,
      },
      {
        type: `paint`,
        isSelected: true,
        img: `https://k32.kn3.net/5C7060EC5.jpg`
      },
      {
        type: `photo`,
        isSelected: false,
        img: `http://i.imgur.com/1KegWPz.jpg`,
      }
    ]
  },
  {
    type: taskType.GUESS_TWO,
    title: taskTypeToTaskTitle[taskType.GUESS_TWO],
    questions: [
      {
        type: `photo`,
        img: `http://i.imgur.com/1KegWPz.jpg`,
      },
      {
        type: `paint`,
        img: `https://k42.kn3.net/CF42609C8.jpg`
      }
    ]
  },
  {
    type: taskType.GUESS_ONE,
    title: taskTypeToTaskTitle[taskType.GUESS_ONE],
    questions: [
      {
        type: `photo`,
        img: `https://i.imgur.com/DiHM5Zb.jpg`,
      }
    ]
  },
  {
    type: taskType.FIND,
    title: taskTypeToTaskTitle[taskType.FIND],
    questions: [
      {
        type: `photo`,
        isSelected: false,
        img: `http://i.imgur.com/DKR1HtB.jpg`,
      },
      {
        type: `paint`,
        isSelected: true,
        img: `https://k32.kn3.net/5C7060EC5.jpg`
      },
      {
        type: `photo`,
        isSelected: false,
        img: `http://i.imgur.com/1KegWPz.jpg`,
      }
    ]
  },
  {
    type: taskType.GUESS_TWO,
    title: taskTypeToTaskTitle[taskType.GUESS_TWO],
    questions: [
      {
        type: `photo`,
        img: `http://i.imgur.com/1KegWPz.jpg`,
      },
      {
        type: `paint`,
        img: `https://k42.kn3.net/CF42609C8.jpg`
      }
    ]
  },
  {
    type: taskType.GUESS_TWO,
    title: taskTypeToTaskTitle[taskType.GUESS_TWO],
    questions: [
      {
        type: `photo`,
        img: `http://i.imgur.com/1KegWPz.jpg`,
      },
      {
        type: `paint`,
        img: `https://k42.kn3.net/CF42609C8.jpg`
      }
    ]
  },
  {
    type: taskType.GUESS_ONE,
    title: taskTypeToTaskTitle[taskType.GUESS_ONE],
    questions: [
      {
        type: `photo`,
        img: `https://i.imgur.com/DiHM5Zb.jpg`,
      }
    ]
  },
  {
    type: taskType.FIND,
    title: taskTypeToTaskTitle[taskType.FIND],
    questions: [
      {
        type: `photo`,
        isSelected: false,
        img: `http://i.imgur.com/DKR1HtB.jpg`,
      },
      {
        type: `paint`,
        isSelected: true,
        img: `https://k32.kn3.net/5C7060EC5.jpg`
      },
      {
        type: `photo`,
        isSelected: false,
        img: `http://i.imgur.com/1KegWPz.jpg`,
      }
    ]
  }
];

export {
  taskType,
  TASKS,
};
