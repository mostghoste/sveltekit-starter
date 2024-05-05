<script lang="ts">
    // icons from https://icones.js.org/
    import SolarBasketballLinear from "~icons/solar/basketball-linear";
    import SolarBasketballBoldDuotone from "~icons/solar/basketball-bold-duotone";
    export let user;
</script>

<div class="w-full h-full items-center flex flex-col gap-2">
    <h1 class="text-xl">Examples</h1>
    <div class="flex flex-col rounded-md bg-slate-300 text-gray-900 pt-1 p-2">
        <h2>Icons</h2>
        <div class="flex gap-2">
            <SolarBasketballLinear
                class="bg-slate-700 text-red-500 w-16 h-16 rounded-md p-2"
            ></SolarBasketballLinear>
            <SolarBasketballBoldDuotone
                class="bg-slate-700 text-green-500 w-16 h-16 rounded-md p-2"
            ></SolarBasketballBoldDuotone>
        </div>
    </div>
    <div
        class="flex flex-col w-96 rounded-md bg-slate-300 text-gray-900 pt-1 p-2"
    >
        <h2>Auth</h2>
        {#if user}
            <div class="flex flex-col">
                <p>User ID: {user.id}</p>
                <p>User Email: {user.email}</p>
                <p>Username: {user.username}</p>
            </div>
            <a class="btn" href="/auth">Atsijungti</a>
        {:else}
            <p>Naudotojas neprisijungęs</p>
            <a class="btn" href="/auth">Prisijungti</a>
        {/if}
    </div>
</div>

<style>
</style>
