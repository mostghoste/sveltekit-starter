<script>
    import "../app.pcss";
</script>

<div
    class="w-screen h-screen fixed top-0 left-0 rounded-full shadowgradient z-0"
></div>

<div
    class="flex flex-col w-screen h-screen justify-start items-center backgroundgradient"
>
    <div class="z-20">
        <slot></slot>
    </div>
</div>

<style>
    .backgroundgradient {
        background: repeating-linear-gradient(
            120deg,
            #052e16,
            #14532d 6rem,
            #052e16 6.1rem,
            #14532d 8rem,
            #14532d 8.5rem,
            #14532d 8.9rem
        );
    }

    .shadowgradient {
        background: radial-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));
        filter: blur(200px);
    }
</style>
