export interface TagState {
  tags: any[]; // Список тегов
  loading: boolean; // Индикатор загрузки
  error: string | null; // Ошибка
}

export const initialTagState: TagState = {
  tags: [],
  loading: false,
  error: null
};
