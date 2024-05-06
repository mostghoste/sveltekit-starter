<script lang="ts">
    import PocketBase from "pocketbase";
    import IcOutlineErrorOutline from "~icons/ic/outline-error-outline";

    const pb = new PocketBase("http://localhost:8090");
    let username = "";
    let password = "";
    let authError = false;
    let errorMessage = "";

    const minUsernameLen = 4;
    const minPasswordLen = 4;

    const login = async (form: HTMLFormElement) => {
        if (username.length < minUsernameLen) {
            authError = true;
            errorMessage = `bent ${minUsernameLen} simboliai!`;
            return;
        }

        if (password.length < minPasswordLen) {
            authError = true;
            errorMessage = `bent ${minPasswordLen} simboliai!`;
            return;
        }

        try {
            await pb.collection("users").authWithPassword(username, password);
            form.token.value = pb.authStore.token;
            form.submit();
            authError = false;
        } catch (err) {
            console.error("ERROR:" + err);
            authError = true;
            errorMessage = "neteisingi prisijungimo duomenys";
        }
    };

    const handleRegister = async () => {
        if (username.length < minUsernameLen) {
            authError = true;
            errorMessage = `bent ${minUsernameLen} simboliai!`;
            return;
        }

        if (password.length < minPasswordLen) {
            authError = true;
            errorMessage = `bent ${minPasswordLen} simboliai!`;
            return;
        }

        console.log("Validation passed, sending register request:");
        try {
            const data = {
                username: username,
                password: password,
                passwordConfirm: password,
                name: username,
            };
            const record = await pb.collection("users").create(data);
            console.log(record);
            if (record.id) {
                console.log("Registration successful");
            }
        } catch (err) {
            console.error("ERROR:" + err);
            authError = true;
            errorMessage = "klaida registruojantis";
        }
    };
</script>

<div class="w-full h-screen flex justify-center items-center flex-col">
    <form
        method="POST"
        action="/auth"
        class="flex flex-col gap-2 w-96 m-4 bg-gray-300 p-4 rounded-md"
        on:submit|preventDefault={(e) => login(e.currentTarget)}
    >
        <input name="token" type="hidden" />

        <label
            class={`flex input relative input-bordered ${authError && username.length < minUsernameLen ? "input-error" : ""}`}
        >
            <input
                class="grow"
                type="text"
                name="username"
                placeholder="slapyvardis"
                bind:value={username}
            />
            {#if authError && username.length < minUsernameLen}
                <div
                    class="tooltip tooltip-open tooltip-right"
                    data-tip={`bent ${minUsernameLen} simboliai!`}
                >
                    <IcOutlineErrorOutline
                        class="text-error absolute top-4 right-3 hover:scale-110 animate-pulse transition-all"
                    ></IcOutlineErrorOutline>
                </div>
            {:else if authError}
                <div class="tooltip tooltip-right" data-tip={errorMessage}>
                    <IcOutlineErrorOutline
                        class="text-error absolute top-4 right-3 hover:scale-110 animate-pulse transition-all"
                    ></IcOutlineErrorOutline>
                </div>
            {/if}
        </label>
        <label
            class={`flex input relative input-bordered ${authError && username.length < minUsernameLen ? "input-error" : ""}`}
        >
            <input
                class="grow"
                type="password"
                name="password"
                placeholder="slaptažodis"
                bind:value={password}
            />
            {#if authError}
                <div
                    class="tooltip tooltip-open tooltip-right"
                    data-tip={errorMessage}
                >
                    <IcOutlineErrorOutline
                        class="text-error absolute top-4 right-3 hover:scale-110 animate-pulse transition-all"
                    ></IcOutlineErrorOutline>
                </div>
            {/if}
        </label>

        <div class="flex gap-2 w-full justify-end">
            <button
                type="button"
                class="btn btn-secondary"
                on:click={handleRegister}
            >
                Registruotis</button
            >
            <button type="submit" class="btn btn-primary"> Prisijungti </button>
        </div>
    </form>
</div>
