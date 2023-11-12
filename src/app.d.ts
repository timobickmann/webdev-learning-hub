// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare global {
	
	namespace App {
	interface Locals {
		auth: import('lucia').AuthRequest;
	}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}

/// <reference types="lucia" />
	namespace Lucia {
		type Auth = import('$lib/server/lucia').Auth;
		type DatabaseUserAttributes = object;
		type DatabaseSessionAttributes = object;
	}
}

export {};
