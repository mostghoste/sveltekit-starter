<script lang="ts">
    import type Countries from "./Countries";
    import Flag from "./Flag.svelte";

    type Team = {
        name: string;
        country: Countries;
    };
    export let team: Team;
</script>

<div
    class="rounded-md h-24 aspect-square bg-gray-800 shadow-gray-900 flex justify-center items-center flex-col gap-2"
>
    <div
        class="w-fit flex justify-center items-center overflow-hidden rounded-md"
    >
        <Flag className="w-10 h-8 m-0 p-0" countryName={team.country}></Flag>
    </div>
    <h4 class="text-gray-300 font-light m-0 p-0 text-xs">
        {team.name}
    </h4>
</div>

<style>
</style>
