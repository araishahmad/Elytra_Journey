import { create } from 'zustand';

const useAppStore = create((set) => ({
    // user
    user: null,
    login: (user) => set({ user }),
    logout: () => set({ user: null }),

    // theme
    theme: 'light',
    toggleTheme: () =>
        set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),

    // notifications
    notifications: [],
    addNotification: (message) =>
        set((state) => ({
            notifications: [...state.notifications, { id: Date.now(), message }],
        })),
    removeNotification: (id) =>
        set((state) => ({
            notifications: state.notifications.filter((n) => n.id !== id),
        })),
}));

export default useAppStore;