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
          dependency_ids: [],
          completed_at: null,
          is_locked: false
        },
        {
          task_id: 2,
          group_id: 1,
          task: 'Buy hammer',
          dependency_ids: [1],
          completed_at: null,
          is_locked: true
        },
        {
          task_id: 3,
          group_id: 1,
          task: 'Buy wood',
          dependency_ids: [1],
          completed_at: null,
          is_locked: true
        },
        {
          task_id: 4,
          group_id: 1,
          task: 'Buy nails',
          dependency_ids: [1],
          completed_at: null,
          is_locked: true
        },
        {
          task_id: 5,
          group_id: 1,
          task: 'Buy paint',
          dependency_ids: [1],
          completed_at: null,
          is_locked: true
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
          dependency_ids: [2, 3, 4],
          completed_at: null,
          is_locked: true
        },
        {
          task_id: 7,
          group_id: 2,
          task: 'Paint wings',
          dependency_ids: [5, 6],
          completed_at: null,
          is_locked: true
        },
        {
          task_id: 8,
          group_id: 2,
          task: 'Have a snack',
          dependency_ids: [],
          completed_at: null,
          is_locked: false
        }
      ]
    }
  ]
};
