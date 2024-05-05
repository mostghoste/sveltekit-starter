<script lang="ts">
    import Countries from "$lib/components/utils/Countries.ts";
    import TeamChip from "./utils/TeamChip.svelte";

    type Team = {
        name: string;
        country: Countries;
    };

    type Game = {
        homeTeam: Team;
        awayTeam: Team;
    };

    let exampleGame: Game = {
        homeTeam: { name: "Žalgiris", country: Countries.LT },
        awayTeam: { name: "Gargždų banga", country: Countries.EN },
    };

    let games: Game[] = [exampleGame, exampleGame, exampleGame];
    let selectedGame = 0;
    let selectedTeam: null | Team = null;
</script>

<div
    class="flex justify-start items-start flex-col bg-base-200 rounded-md shadow-xl p-4 gap-2"
>
    <header class="flex justify-between w-full">
        <h2 class="m-0">Atlik spėjimą</h2>
        <p class="text-right m-0">
            Turnyras 1 <br />{selectedGame + 1}/{games.length}
        </p>
    </header>

    {#if games[selectedGame]}
        <div
            class="w-full min-w-64 h-fit p-4 bg-green-900 rounded-md shadow-gray-900 shadow-md"
        >
            <div class="flex h-24 gap-2 justify-between">
                <!-- Left icon -->
                <button
                    class={`btn w-24 box-content h-24 p-0 m-0 border-none hover:scale-[1.05] shadow-md ring-4 ${selectedTeam == games[selectedGame].homeTeam ? "ring-green-600" : "ring-transparent"}`}
                    on:click={() => {
                        selectedTeam = games[selectedGame].homeTeam;
                    }}
                >
                    <TeamChip team={games[selectedGame].homeTeam}
                    ></TeamChip></button
                >
                <!-- Middle -->
                <div class="flex flex-col justify-end items-center gap-2">
                    <div
                        class="mx-2 w-8 h-2 bg-slate-300 shadow-gray-800 shadow-md rounded-sm"
                    ></div>
                    <input
                        type="text"
                        class="bg-gray-800 input w-20 shadow-gray-900 shadow-md rounded-md text-center h-fit py-1 placeholder:text-gray-600 text-gray-200"
                        placeholder="spėk"
                    />
                </div>
                <!-- Right icon -->
                <button
                    class={`btn w-24 box-content h-24 p-0 m-0 border-none hover:scale-[1.05] shadow-md ring-4 ${selectedTeam == games[selectedGame].awayTeam ? "ring-green-600" : "ring-transparent"}`}
                    on:click={() => {
                        selectedTeam = games[selectedGame].awayTeam;
                    }}
                >
                    <TeamChip team={games[selectedGame].awayTeam}
                    ></TeamChip></button
                >
            </div>
        </div>
        <p>Selected team: {selectedTeam?.name}</p>
    {:else}
        <p>Viskas!</p>
    {/if}

    <footer class="flex justify-end items-end w-full gap-2">
        <button
            class="btn bg-slate-300 border-none shadow-gray-400 shadow-md"
            on:click={() => {
                if (selectedGame > 0) {
                    selectedGame--;
                }
            }}>Atgal</button
        >
        <button
            class="btn btn-primary shadow-gray-400 shadow-md"
            on:click={() => {
                selectedGame++;
            }}>Toliau</button
        >
    </footer>
</div>

<style>
</style>
