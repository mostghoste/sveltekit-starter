<script lang="ts">
    import type { UsersRecord } from "$lib/types/pocketbase-types";
    import ProfileCardSmall from "./utils/ProfileCardSmall.svelte";
    export let user: UsersRecord;
</script>

<div
    class="flex justify-start items-start flex-col bg-base-200 rounded-md shadow-xl p-4 gap-2"
>
    <header class="flex justify-between w-full">
        <h2 class="m-0">Profilis</h2>
        <p class="text-right m-0">{user ? user.name : "neprisijungęs"}</p>
    </header>

    <div class="flex justify-end flex-col items-end p-0 m-0 w-full gap-2">
        {#if user}
            <ProfileCardSmall {user}></ProfileCardSmall>
            <a class="btn btn-sm btn-primary" href="/auth">Atsijungti</a>
        {:else}
            <a class="btn btn-sm" href="/auth">Prisijungti</a>
        {/if}
    </div>

    <!-- <footer class="flex justify-end items-end w-full gap-2">
        <button
            class="btn bg-slate-300 border-none shadow-gray-400 shadow-md"
            on:click={() => {}}>Atgal</button
        >
        <button
            class="btn btn-primary shadow-gray-400 shadow-md"
            on:click={() => {}}>Toliau</button
        >
    </footer> -->
</div>
