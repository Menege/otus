import axios from 'axios';

// Типы для задач
interface Task {
  id: number;
  title: string;
  description: string;
  difficulty: string;
  category: string;
  popularity: number;
}

// URL твоего API (например, локальный сервер или продакшн-адрес)
const API_URL = import.meta.env.API_URL; // замените на настоящий API URL

// Функция для получения списка задач
export const getTasks = async (): Promise<Task[]> => {
  try {
    const response = await axios.get(`${API_URL}/tasks`);
    return response.data; // предполагаем, что сервер возвращает задачи в поле data
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

export const getTaskById = async (id: string): Promise<Task> => {
  try {
    const response = await axios.get(`${API_URL}/tasks/${id}`);
    return response.data;  // Предполагаем, что сервер возвращает данные задачи в поле data
  } catch (error) {
    console.error(`Error fetching task with ID ${id}:`, error);
    throw error;
  }
};