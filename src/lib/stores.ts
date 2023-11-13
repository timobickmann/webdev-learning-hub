import { writable } from 'svelte/store';

const createUserStore = () => {
	const { subscribe, set } = writable({ username: '', userRole: 'guest' });

	return {
		subscribe,
		setUser: (user: { username: string; userRole: string }) => set(user),
		clearUser: () => set({ username: '', userRole: 'guest' })
	};
};

export const userStore = createUserStore();
