import { writable } from 'svelte/store';

const createUserStore = () => {
	const { subscribe, set, update } = writable({ name: '', userRole: 'guest' });

	return {
		subscribe,
		setUser: (user: { name: string; userRole: string }) => set(user),
		setUsername: (name: string) => update((user) => ({ ...user, name: name })),
		clearUser: () => set({ name: '', userRole: 'guest' })
	};
};

export const userStore = createUserStore();
