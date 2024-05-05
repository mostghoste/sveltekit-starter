<script lang="ts">
    import Countries from "./Countries";
    import {
        Lt,
        GbEng,
        Es,
        Gb,
        De,
        Fr,
        It,
        Ru,
        Gr,
        Tr,
        Il,
    } from "svelte-flag-icons";
    export let countryName: Countries;
    export let className: string = "";
</script>

{#if countryName == Countries.LT}
    <Lt class={className}></Lt>
{:else if countryName == Countries.EN}
    <GbEng class={className}></GbEng>
{:else if countryName == Countries.ES}
    <Es class={className}></Es>
{:else if countryName == Countries.GB}
    <Gb class={className}></Gb>
{:else if countryName == Countries.DE}
    <De class={className}></De>
{:else if countryName == Countries.FR}
    <Fr class={className}></Fr>
{:else if countryName == Countries.IT}
    <It class={className}></It>
{:else if countryName == Countries.RU}
    <Ru class={className}></Ru>
{:else if countryName == Countries.GR}
    <Gr class={className}></Gr>
{:else if countryName == Countries.TR}
    <Tr class={className}></Tr>
{:else if countryName == Countries.IL}
    <Il class={className}></Il>
{/if}
