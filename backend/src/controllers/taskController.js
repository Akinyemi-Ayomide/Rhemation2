// Sample data (Replace with database later)

const tasks = [
  { id: 1, title: 'learn node.js', completed: false },
  { id: 2, title: 'Build an api', completed: true },
];

// Get All Tasks

const getTasks = (req, res) => {
  res.status(200).json(tasks);
};

// create a new task
const createTask = (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ message: 'title is required' });
  }

  const newTask = { id: tasks.length + 1, title, completed: false };
  tasks.push(newtask);

  res.status(201).json(newTask);
};

module.exports = { getTasks, createTask };
