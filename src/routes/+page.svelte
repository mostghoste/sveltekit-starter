<script lang="ts">
    import CreateTournament from "$lib/components/CreateTournament.svelte";
    import EditTournament from "$lib/components/EditTournament.svelte";
</script>

<div class="prose flex flex-col gap-4">
    <div class="bg-base-200 rounded-md">
        <h1 class="m-4">Totalizatorius</h1>
    </div>
    <CreateTournament></CreateTournament>
    <EditTournament></EditTournament>
</div>

<style>
</style>
