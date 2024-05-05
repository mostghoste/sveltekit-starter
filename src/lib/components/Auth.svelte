<script lang="ts">
    import PocketBase from "pocketbase";

    const pb = new PocketBase("http://localhost:8090");

    async function login(form: HTMLFormElement) {
        try {
            await pb
                .collection("users")
                .authWithPassword("demo@demo.com", "DemoSlaptazodis");
            form.token.value = pb.authStore.token;
            form.submit();
        } catch (err) {
            console.error("ERROR:" + err);
        }
    }
</script>

<form
    method="POST"
    action="/auth"
    on:submit|preventDefault={(e) => login(e.currentTarget)}
>
    <input name="token" type="hidden" />
    <button type="submit" class="btn btn-primary"> Prisijungti </button>
</form>
