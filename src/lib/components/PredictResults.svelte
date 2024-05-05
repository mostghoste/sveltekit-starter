<script lang="ts">
    import Countries from "$lib/components/utils/Countries";
    import TeamChip from "./utils/TeamChip.svelte";

    type Team = {
        name: string;
        country: Countries;
    };

    type Game = {
        homeTeam: Team;
        awayTeam: Team;
        winnerPrediction?: null | Team;
        scorePrediction?: null | number;
    };

    let games: Game[] = [
        {
            homeTeam: { name: "Real Madrid", country: Countries.ES },
            awayTeam: { name: "FC Barcelona", country: Countries.ES },
        },
        {
            homeTeam: { name: "CSKA Moscow", country: Countries.RU },
            awayTeam: { name: "Zenit Saint Petersburg", country: Countries.RU },
        },
        {
            homeTeam: { name: "Olympiacos Piraeus", country: Countries.GR },
            awayTeam: { name: "Panathinaikos Athens", country: Countries.GR },
        },
        {
            homeTeam: { name: "Fenerbahçe Beko", country: Countries.TR },
            awayTeam: { name: "Anadolu Efes Istanbul", country: Countries.TR },
        },
        {
            homeTeam: { name: "Maccabi Tel Aviv", country: Countries.IL },
            awayTeam: { name: "Hapoel Jerusalem", country: Countries.IL },
        },
        {
            homeTeam: {
                name: "AX Armani Exchange Milan",
                country: Countries.IT,
            },
            awayTeam: { name: "Virtus Bologna", country: Countries.IT },
        },
        {
            homeTeam: { name: "FC Bayern Munich", country: Countries.DE },
            awayTeam: { name: "ALBA Berlin", country: Countries.DE },
        },
        {
            homeTeam: { name: "ASVEL Basket", country: Countries.FR },
            awayTeam: { name: "LDLC AS Monaco Basket", country: Countries.FR },
        },
        {
            homeTeam: { name: "FC Barcelona", country: Countries.ES },
            awayTeam: {
                name: "AX Armani Exchange Milan",
                country: Countries.IT,
            },
        },
        {
            homeTeam: { name: "Panathinaikos Athens", country: Countries.GR },
            awayTeam: { name: "Fenerbahçe Beko", country: Countries.TR },
        },
        {
            homeTeam: { name: "Anadolu Efes Istanbul", country: Countries.TR },
            awayTeam: { name: "CSKA Moscow", country: Countries.RU },
        },
        {
            homeTeam: { name: "Real Madrid", country: Countries.ES },
            awayTeam: { name: "Olympiacos Piraeus", country: Countries.GR },
        },
        {
            homeTeam: { name: "Zenit Saint Petersburg", country: Countries.RU },
            awayTeam: { name: "Maccabi Tel Aviv", country: Countries.IL },
        },
        {
            homeTeam: { name: "Virtus Bologna", country: Countries.IT },
            awayTeam: { name: "FC Bayern Munich", country: Countries.DE },
        },
        {
            homeTeam: { name: "LDLC AS Monaco Basket", country: Countries.FR },
            awayTeam: { name: "ASVEL Basket", country: Countries.FR },
        },
        {
            homeTeam: { name: "Hapoel Jerusalem", country: Countries.IL },
            awayTeam: { name: "ALBA Berlin", country: Countries.DE },
        },
    ];
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
                        games[selectedGame].winnerPrediction = selectedTeam;
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
                        bind:value={games[selectedGame].scorePrediction}
                    />
                </div>
                <!-- Right icon -->
                <button
                    class={`btn w-24 box-content h-24 p-0 m-0 border-none hover:scale-[1.05] shadow-md ring-4 ${selectedTeam == games[selectedGame].awayTeam ? "ring-green-600" : "ring-transparent"}`}
                    on:click={() => {
                        selectedTeam = games[selectedGame].awayTeam;
                        games[selectedGame].winnerPrediction = selectedTeam;
                    }}
                >
                    <TeamChip team={games[selectedGame].awayTeam}
                    ></TeamChip></button
                >
            </div>
        </div>
    {:else}
        <p>Viskas!</p>
    {/if}

    <footer class="flex justify-end items-end w-full gap-2">
        <button
            class="btn bg-slate-300 border-none shadow-gray-400 shadow-md"
            on:click={() => {
                if (selectedGame > 0) {
                    selectedGame--;
                    selectedTeam = games[selectedGame].winnerPrediction;
                }
            }}>Atgal</button
        >
        <button
            class="btn btn-primary shadow-gray-400 shadow-md"
            on:click={() => {
                selectedGame++;
                selectedTeam = games[selectedGame].winnerPrediction;
            }}>Toliau</button
        >
    </footer>
</div>

<style>
</style>
