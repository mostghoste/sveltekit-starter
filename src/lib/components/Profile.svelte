<script lang="ts">
    import ProfileCardSmall from "./utils/ProfileCardSmall.svelte";
</script>

<div
    class="flex justify-start items-start flex-col bg-base-200 rounded-md shadow-xl p-4 gap-2"
>
    <header class="flex justify-between w-full">
        <h2 class="m-0">Profilis</h2>
        <p class="text-right m-0">sharunkis</p>
    </header>

    <ProfileCardSmall></ProfileCardSmall>

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
