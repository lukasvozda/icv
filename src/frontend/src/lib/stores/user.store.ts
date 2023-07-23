import type { User } from '@junobuild/core';
import { derived, writable, type Readable } from 'svelte/store';

export const userStore = writable<User | undefined | null>(undefined);

export const userSignedInStore: Readable<boolean> = derived(
	userStore,
	(user) => user !== null && user !== undefined
);
