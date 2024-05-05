<script lang="ts">
    // import Countries from "$lib/components/utils/Countries";
    // import TeamChip from "./utils/TeamChip.svelte";

    // type Team = {
    //     name: string;
    //     country: Countries;
    // };

    // type Game = {
    //     homeTeam: Team;
    //     awayTeam: Team;
    //     winnerPrediction?: null | Team;
    //     scorePrediction?: null | number;
    // };

    // let games: Game[] = [
    //     {
    //         homeTeam: { name: "Real Madrid", country: Countries.ES },
    //         awayTeam: { name: "FC Barcelona", country: Countries.ES },
    //     },
    //     {
    //         homeTeam: { name: "CSKA Moscow", country: Countries.RU },
    //         awayTeam: { name: "Zenit Saint Petersburg", country: Countries.RU },
    //     },
    //     {
    //         homeTeam: { name: "Olympiacos Piraeus", country: Countries.GR },
    //         awayTeam: { name: "Panathinaikos Athens", country: Countries.GR },
    //     },
    //     {
    //         homeTeam: { name: "Fenerbahçe Beko", country: Countries.TR },
    //         awayTeam: { name: "Anadolu Efes Istanbul", country: Countries.TR },
    //     },
    //     {
    //         homeTeam: { name: "Maccabi Tel Aviv", country: Countries.IL },
    //         awayTeam: { name: "Hapoel Jerusalem", country: Countries.IL },
    //     },
    //     {
    //         homeTeam: {
    //             name: "AX Armani Exchange Milan",
    //             country: Countries.IT,
    //         },
    //         awayTeam: { name: "Virtus Bologna", country: Countries.IT },
    //     },
    //     {
    //         homeTeam: { name: "FC Bayern Munich", country: Countries.DE },
    //         awayTeam: { name: "ALBA Berlin", country: Countries.DE },
    //     },
    //     {
    //         homeTeam: { name: "ASVEL Basket", country: Countries.FR },
    //         awayTeam: { name: "LDLC AS Monaco Basket", country: Countries.FR },
    //     },
    //     {
    //         homeTeam: { name: "FC Barcelona", country: Countries.ES },
    //         awayTeam: {
    //             name: "AX Armani Exchange Milan",
    //             country: Countries.IT,
    //         },
    //     },
    //     {
    //         homeTeam: { name: "Panathinaikos Athens", country: Countries.GR },
    //         awayTeam: { name: "Fenerbahçe Beko", country: Countries.TR },
    //     },
    //     {
    //         homeTeam: { name: "Anadolu Efes Istanbul", country: Countries.TR },
    //         awayTeam: { name: "CSKA Moscow", country: Countries.RU },
    //     },
    //     {
    //         homeTeam: { name: "Real Madrid", country: Countries.ES },
    //         awayTeam: { name: "Olympiacos Piraeus", country: Countries.GR },
    //     },
    //     {
    //         homeTeam: { name: "Zenit Saint Petersburg", country: Countries.RU },
    //         awayTeam: { name: "Maccabi Tel Aviv", country: Countries.IL },
    //     },
    //     {
    //         homeTeam: { name: "Virtus Bologna", country: Countries.IT },
    //         awayTeam: { name: "FC Bayern Munich", country: Countries.DE },
    //     },
    //     {
    //         homeTeam: { name: "LDLC AS Monaco Basket", country: Countries.FR },
    //         awayTeam: { name: "ASVEL Basket", country: Countries.FR },
    //     },
    //     {
    //         homeTeam: { name: "Hapoel Jerusalem", country: Countries.IL },
    //         awayTeam: { name: "ALBA Berlin", country: Countries.DE },
    //     },
    // ];
    // let selectedGame = 0;
    // let selectedTeam: null | Team = null;

    import hotBasketball from "$lib/assets/hotbasketball2.png";
    type score = {
        name: string;
        scoreValue: number;
    };
    let leaderboard: score[] = [
        { name: "fornado", scoreValue: 95 },
        { name: "sharunkis", scoreValue: 87 },
        { name: "kastuxxx", scoreValue: 62 },
    ];
</script>

<div
    class="flex justify-start items-start flex-col bg-base-200 rounded-md shadow-xl p-4 gap-2"
>
    <header class="flex justify-between w-full">
        <h2 class="m-0">Taškai</h2>
        <p class="text-right m-0">Turnyras 1 <br /> 04-26 rezultatai</p>
    </header>

    {#each leaderboard as score, index}
        <h6 class="flex justify-between w-full gap-1 items-center">
            <span>{index + 1}.</span>
            <span>{score.name}</span>
            <span
                class="border border-transparent border-b-gray-700 w-full h-fit"
            ></span>
            {#if index == 1}
                <img class="w-4 p-0 m-0" src={hotBasketball} alt="" />
                <img class="w-4 p-0 m-0" src={hotBasketball} alt="" />
            {/if}
            <span>{score.scoreValue}</span>
        </h6>
    {/each}

    <!-- <footer class="flex justify-end items-end w-full gap-2">
        <button
            class="btn bg-slate-300 border-none shadow-gray-400 shadow-md"
            on:click={() => {}}>Atgal</button
        >
        <button
            class="btn btn-primary shadow-gray-400 shadow-md"
            on:click={() => {}}>Toliau</button
        >
    </footer> -->
</div>
