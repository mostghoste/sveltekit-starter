<script lang="ts">
    let Tournaments: String[] = [];

    const handleAddTournament = () => {
        let newItem = `Tournament ${Tournaments.length + 1}`;
        Tournaments = [...Tournaments, newItem];
        console.log("Added new tournament");
    };
</script>

<div class="wrapper">
    <button on:click={handleAddTournament}>Pridėti turnyrą</button>
    <p>Turnyrai:</p>
    <ol>
        {#each Tournaments as tournament}
            <li>{tournament}</li>
        {/each}
    </ol>
</div>

<style>
    .wrapper {
        border: 1px solid white;
        padding: 10px;
        border-radius: 8px;
    }
</style>
