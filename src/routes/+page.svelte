<script lang="ts">
    import Example from "$lib/components/Example.svelte";
    import type { PageServerLoad } from "./$types";
    export let data: PageServerLoad;
</script>

<Example user={data.user}></Example>
