<script lang="ts">
    import type Countries from "./Countries";
    import Flag from "./Flag.svelte";
    export let country: Countries;
</script>

<div
    class="rounded-md h-full aspect-square bg-gray-800 shadow-gray-900 shadow-md flex justify-center items-center"
>
    <div
        class="w-fit flex justify-center items-center overflow-hidden rounded-md"
    >
        <Flag className="w-10 h-8 m-0 p-0" countryName={country}></Flag>
    </div>
</div>

<style>
</style>
