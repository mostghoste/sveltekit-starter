<script lang="ts">
    let Tournaments: String[] = [];

    const handleAddTournament = () => {
        let newItem = `Tournament ${Tournaments.length + 1}`;
        Tournaments = [...Tournaments, newItem];
        console.log("Added new tournament");
    };
</script>

<div class="flex justify-center items-center flex-col">
    <button class="btn" on:click={handleAddTournament}>Pridėti turnyrą</button>
    <p>Turnyrai:</p>
    <ol>
        {#each Tournaments as tournament}
            <li>{tournament}</li>
        {/each}
    </ol>
</div>

<style>
</style>
