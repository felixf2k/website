<script lang="ts">
    import type { Snippet } from "svelte";
    import type { ClassValue } from "svelte/elements";

    type Props = {
        class?: ClassValue
        children: Snippet
    };
    
    let {
        class: clazz,
        children
    
    }: Props = $props();
</script>

<div class={["bg-surface-50-950 rounded shadow p-4", clazz]}>
    {@render children()}
</div>