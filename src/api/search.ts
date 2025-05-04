import { ADDR } from '@/consts/api';
import { User } from '@/types/api/user';

export const searchUsers = async (
  attribute: string,
  value: string,
): Promise<User[]> => {
  if (!value.trim()) return [];

  try {
    const response = await fetch(
      `${ADDR}search?attribute=${encodeURIComponent(attribute)}&value=${encodeURIComponent(value)}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result.items?.slice(0, 10) || [];
  } catch (error) {
    console.error('Search error:', error);
    return [];
  }
};
