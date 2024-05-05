<script lang="ts">
    import IcSharpPerson from "~icons/ic/sharp-person";
    import TablerChefHat from "~icons/tabler/chef-hat";

    let shefas: boolean = true;
    let shefasPlaying = false;

    let recentWins: boolean[] = [true, true, false, false, true, true, false];
</script>

<div class="bg-gray-800 w-full h-fit rounded-md p-4 flex justify-start gap-2">
    <button
        class="h-24 w-24 overflow-hidden aspect-square bg-orange-600 rounded-md flex relative"
        style="background: repeating-linear-gradient(120deg, #ea580c, #c2410c 20%, #ea580c 21%);"
        on:mouseenter={() => {
            shefasPlaying = true;
        }}
        on:mouseleave={() => {
            shefasPlaying = false;
        }}
    >
        <div class="absolute left-1/4 bottom-12">
            <TablerChefHat
                class={`w-12 h-12 text-white transition-all -translate-y-20 duration-1000 ${shefasPlaying ? "translate-y-0" : ""}`}
            ></TablerChefHat>
            <div
                class="absolute transition-all duration-1000 -top-2 -left-2 h-16 w-16 rounded-full bg-transparent blur-md ${shefasPlaying
                    ? 'animate-pulse bg-yellow-50/70'
                    : ''}"
            ></div>
        </div>
        <div
            class={`flex transition-all duration-1000 absolute flex-col bg-gray-700/50 w-24 bottom-0 ${shefasPlaying ? "" : "translate-y-16"}`}
        >
            <h6
                class="z-20 border-t-4 border-gray-900 text-sm font-extrabold bg-gradient-to-r from-amber-200 to-yellow-500 inline-block text-transparent bg-clip-text shadow-"
            >
                Šefas
            </h6>
            <h6
                class="font-extrabold text-sm bg-gray-950 scale-110 blur-sm absolute left-7 z-10 inline-block text-transparent bg-clip-text shadow-black"
            >
                Šefas
            </h6>
        </div>

        <IcSharpPerson class="w-32 h-32 text-slate-950"></IcSharpPerson>
    </button>

    <div class="flex flex-col flex-grow justify-between">
        <div>
            <div class="flex justify-between items-start">
                <h4 class="text-gray-100 p-0 m-0 text-sm">sharunkis</h4>
                <p class="p-0 m-0 text-xs text-gray-500">2024-07</p>
            </div>
            <h5 class="text-xs text-gray-200 p-0 m-0">
                sutriauškinsiu jus visus
            </h5>
        </div>

        <div>
            <p class="text-xs text-gray-300 p-0 m-0">Šiame turnyre: #4</p>
            <div class="flex gap-1 items-center">
                <p class="text-xs text-gray-300 p-0 m-0 font-semibold">
                    Istorija:
                </p>
                {#each recentWins as recentWin}
                    <button
                        class={`p-0 w-3 h-3 rounded-full hover:scale-125 cursor-pointer transition-all selection:scale-90 ${recentWin ? "bg-green-700" : "bg-red-700"}`}
                    ></button>
                {/each}
            </div>
        </div>
    </div>
</div>
