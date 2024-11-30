// src/app/models/tag.ts

export interface Tag {
    id: string | undefined;          // Уникальный идентификатор тега
    name: string;        // Название тега
    description?: string; // Описание тега (опционально)
  }
  