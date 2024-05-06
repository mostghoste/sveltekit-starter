<script lang="ts">
    import CreateTournament from "$lib/components/CreateTournament.svelte";
    import EditTournament from "$lib/components/EditTournament.svelte";
    import Leaderboard from "$lib/components/Leaderboard.svelte";
    import PredictResults from "$lib/components/PredictResults.svelte";
    import Profile from "$lib/components/Profile.svelte";
    import type { PageServerLoad } from "./$types";
    export let data: PageServerLoad;
</script>

<div class="flex gap-4 m-4">
    <div class="prose flex flex-col gap-4">
        <div class="bg-base-200 rounded-md flex justify-center">
            <h1 class="m-4">Totalizatorius</h1>
        </div>
        <CreateTournament></CreateTournament>
        <EditTournament></EditTournament>
    </div>
    <div class="prose flex flex-col gap-4">
        <PredictResults></PredictResults>
        <Leaderboard></Leaderboard>
        <Profile user={data.user}></Profile>
    </div>
</div>

<style>
</style>
