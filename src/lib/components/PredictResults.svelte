<script lang="ts">
</script>

<div
    class="flex justify-start items-start flex-col bg-base-200 rounded-md shadow-xl p-4 gap-2"
>
    <header class="flex justify-between w-full">
        <h2 class="m-0">Atlik spėjimą</h2>
        <p class="text-right m-0">Turnyras 1 <br />16/35</p>
    </header>

    <div
        class="w-full min-w-64 h-fit p-4 bg-green-900 rounded-md shadow-gray-900 shadow-md"
    >
        <div class="flex h-24 gap-2 justify-between">
            <!-- Left icon -->
            <div
                class="rounded-md h-full aspect-square bg-gray-800 shadow-gray-900 shadow-md"
            ></div>
            <!-- Middle -->
            <div class="flex flex-col justify-end items-center gap-2">
                <div
                    class="mx-2 w-8 h-2 bg-slate-300 shadow-gray-800 shadow-md rounded-sm"
                ></div>
                <input
                    type="text"
                    class="bg-gray-800 input w-20 shadow-gray-900 shadow-md rounded-md text-center h-fit py-1 placeholder:text-gray-600 text-gray-200"
                    placeholder="spėk"
                />
            </div>
            <!-- Right icon -->
            <div
                class="rounded-md h-full aspect-square bg-gray-800 shadow-gray-900 shadow-md"
            ></div>
        </div>
    </div>

    <footer class="flex justify-end items-end w-full gap-2">
        <button class="btn bg-slate-300 border-none shadow-gray-400 shadow-md"
            >Atgal</button
        >
        <button class="btn btn-primary shadow-gray-400 shadow-md">Toliau</button
        >
    </footer>
</div>

<style>
</style>
