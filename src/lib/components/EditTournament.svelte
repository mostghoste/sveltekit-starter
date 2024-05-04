<script lang="ts">
    type Tournament = {
        name: String;
        id: number;
        games?: Game[];
    };

    let Tournaments: Tournament[] = [
        { name: "Tournament 1", id: 0 },
        { name: "Tournament 2", id: 1 },
        { name: "Tournament 3", id: 2 },
    ];

    type Game = {
        homeTeam: string;
        awayTeam: string;
    };

    let selectedTournament = Tournaments[0];
    let gameForm: Game = { homeTeam: "", awayTeam: "" };

    const handleAddGame = () => {
        if (
            !gameForm.homeTeam ||
            gameForm.homeTeam === "" ||
            !gameForm.awayTeam ||
            gameForm.awayTeam === ""
        ) {
            console.log("Invalid form");
            return;
        }

        let newGame: Game = gameForm;
        if (!selectedTournament.games) {
            selectedTournament.games = [];
        }

        selectedTournament.games = [...selectedTournament.games, newGame];
        console.log(
            `Added new game ${newGame} to tournament ${selectedTournament.name}`,
        );
    };
</script>

<div
    class="flex justify-center items-center flex-col bg-base-200 rounded-md shadow-xl p-4"
>
    <details class="dropdown dropdown-right">
        <summary on:click={() => {}} class="m-1 btn btn-accent"
            >Pasirink turnyrą</summary
        >
        <ul class="shadow menu dropdown-content z-[1] rounded-box w-52">
            {#each Tournaments as { name, id }}
                <button
                    on:click={() => {
                        selectedTournament = Tournaments[id];
                    }}
                    class="btn bg-opacity-80 bg-primary"
                >
                    {name}
                </button>
            {/each}
        </ul>
    </details>
    <h6>Pasirinktas turnyras:</h6>
    <h5>{selectedTournament.name}</h5>
    <h4>
        Ateinantys turnyro žaidimai ({selectedTournament.games
            ? selectedTournament.games.length
            : 0}):
    </h4>
    {#if selectedTournament.games}
        {#each selectedTournament.games as game}
            <p>{game.homeTeam} - {game.awayTeam}</p>
        {/each}
    {:else}
        <p>Turnyras tuščias</p>
    {/if}
    <ul></ul>

    <div
        class="bg-base-300 w-full flex justify-center items-center rounded-md p-4 flex-col"
    >
        <form class="p-4 pt-0">
            <h4>Žaidimo pridėjimas</h4>
            <div class="flex gap-2 items-end">
                <label class="form-control max-w-xs">
                    <div class="label">
                        <span class="label-text">Namų komanda</span>
                    </div>
                    <input
                        type="text"
                        class="input w-48 input-bordered"
                        placeholder="Namai"
                        bind:value={gameForm.homeTeam}
                    />
                </label>
                <p>-</p>
                <label class="form-control max-w-xs">
                    <div class="label">
                        <span class="label-text">Svečių komanda</span>
                    </div>
                    <input
                        type="text"
                        class="input w-48 input-bordered"
                        placeholder="Svečiai"
                        bind:value={gameForm.awayTeam}
                    />
                </label>
            </div>
        </form>
        <button on:click={handleAddGame} class="btn"
            >Pridėti naują žaidimą</button
        >
    </div>
</div>

<style>
    .coolborder {
        box-sizing: border-box;
        border: 4px solid;
    }
</style>
