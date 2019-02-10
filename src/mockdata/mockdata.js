export default {
  groups: [
    {
      name: 'Purchases',
      group_id: 1,
      tasks: [
        {
          task_id: 1,
          group_id: 1,
          task: 'Go to the bank',
          dependencyIds: [],
          completedAt: null,
          isLocked: false
        },
        {
          task_id: 2,
          group_id: 1,
          task: 'Buy hammer',
          dependencyIds: [1],
          completedAt: null,
          isLocked: true
        },
        {
          task_id: 3,
          group_id: 1,
          task: 'Buy wood',
          dependencyIds: [1],
          completedAt: null,
          isLocked: true
        },
        {
          task_id: 4,
          group_id: 1,
          task: 'Buy nails',
          dependencyIds: [1],
          completedAt: null,
          isLocked: true
        },
        {
          task_id: 5,
          group_id: 1,
          task: 'Buy paint',
          dependencyIds: [1],
          completedAt: null,
          isLocked: true
        }
      ]
    },
    {
      name: 'Build Airplane',
      group_id: 2,
      tasks: [
        {
          task_id: 6,
          group_id: 2,
          task: 'Hammer nails into wood',
          dependencyIds: [2, 3, 4],
          completedAt: null,
          isLocked: true
        },
        {
          task_id: 7,
          group_id: 2,
          task: 'Paint wings',
          dependencyIds: [5, 6],
          completedAt: null,
          isLocked: true
        },
        {
          task_id: 8,
          group_id: 2,
          task: 'Have a snack',
          dependencyIds: [],
          completedAt: null,
          isLocked: false
        }
      ]
    }
  ]
};
