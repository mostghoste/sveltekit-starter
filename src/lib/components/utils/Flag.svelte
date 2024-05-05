<script lang="ts">
    import Countries from "./Countries";
    import { Lt, GbEng } from "svelte-flag-icons";
    export let countryName: Countries;

    let flagClass = "h-full w-full";
</script>

{#if countryName == Countries.LT}
    <Lt class={flagClass}></Lt>
{:else if countryName == Countries.EN}
    <GbEng></GbEng>
{/if}
