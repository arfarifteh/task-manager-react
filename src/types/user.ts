export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
}

export interface UserProfile extends User {
  role: 'admin' | 'member';
  preferences: UserPreferences;
}

export interface UserPreferences {
  theme: 'light' | 'dark';
  notificationsEnabled: boolean;
}
