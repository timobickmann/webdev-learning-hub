import { writable } from 'svelte/store';

const createUserStore = () => {
	const { subscribe, set, update } = writable({ name: '', role: 'guest', username: "" });

	return {
		subscribe,
		setUser: (user: { name: string; role: string, username: string }) => set(user),
		setUsername: (name: string) => update((user) => ({ ...user, name: name })),
		clearUser: () => set({ name: '', role: 'guest', username: "" })
	};
};

export const userStore = createUserStore();
