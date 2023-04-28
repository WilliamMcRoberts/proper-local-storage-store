<script lang="ts">
	import { beforeNavigate } from '$app/navigation';
	import { localStorageStore } from '$lib/localStorageStore';
	import { onMount } from 'svelte';
	import type { Writable } from 'svelte/store';

	const savedName: Writable<string> = localStorageStore('savedName', '', { storage: 'local' });

	let name = '';

	beforeNavigate(() => {
		savedName.set(name);
	});

	onMount(() => {
		name = $savedName;
	});
</script>

<input bind:value={name} type="text" />

<h1>{name}</h1>

<h1>{$savedName}</h1>
