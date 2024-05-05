<script lang="ts">
    import Countries from "./Countries";
    import { Lt, GbEng } from "svelte-flag-icons";
    export let countryName: Countries;
    export let className: string = "";
</script>

{#if countryName == Countries.LT}
    <Lt class={className}></Lt>
{:else if countryName == Countries.EN}
    <GbEng class={className}></GbEng>
{/if}
