<template>
<h1>{{ message }}</h1>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';

export default defineComponent({
    setup() {
        let message = ref('ok')
        return {
            message
        }
    }
})

</script>

<style>
h1 {
    color: red;
}
</style>
