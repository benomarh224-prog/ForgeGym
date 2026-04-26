import { create } from 'zustand';

export type PageName = 'home' | 'workouts' | 'exercise-detail' | 'ai-coach' | 'dashboard' | 'nutrition' | 'contact';

interface AppState {
  currentPage: PageName;
  selectedExerciseId: string | null;
  sidebarOpen: boolean;
  favorites: string[];
  userWeight: number;
  userHeight: number;
  userGoal: string;
  userLevel: string;
  weeklyGoal: number;
  navigate: (page: PageName) => void;
  setExerciseId: (id: string) => void;
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;
  toggleFavorite: (exerciseId: string) => void;
  setUserProfile: (data: { weight?: number; height?: number; goal?: string; level?: string; weeklyGoal?: number }) => void;
}

export const useAppStore = create<AppState>((set) => ({
  currentPage: 'home',
  selectedExerciseId: null,
  sidebarOpen: false,
  favorites: [],
  userWeight: 75,
  userHeight: 175,
  userGoal: 'lose_weight',
  userLevel: 'intermediate',
  weeklyGoal: 5,
  navigate: (page) => set({ currentPage: page }),
  setExerciseId: (id) => set({ selectedExerciseId: id, currentPage: 'exercise-detail' }),
  toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  toggleFavorite: (exerciseId) => set((s) => ({
    favorites: s.favorites.includes(exerciseId)
      ? s.favorites.filter((id) => id !== exerciseId)
      : [...s.favorites, exerciseId]
  })),
  setUserProfile: (data) => set(data),
}));
