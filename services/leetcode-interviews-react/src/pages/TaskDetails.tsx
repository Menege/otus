import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTaskById } from '../api/tasksApi';
import { Task } from '../types/task';

const TaskDetails: React.FC = () => {
  const { id } = useParams();
  const [task, setTask] = useState<Task | null>(null);

  useEffect(() => {
    const fetchTask = async () => {
      if (id) {
        const data = await getTaskById(id);
        setTask(data);
      }
    };
    fetchTask();
  }, [id]);

  if (!task) return <p>Loading...</p>;

  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <pre>{task.examples}</pre>
      <p>Difficulty: {task.difficulty}</p>
    </div>
  );
};

export default TaskDetails;
