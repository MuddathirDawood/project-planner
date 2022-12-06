<template>
    <nav class="filter-nav">
        <button @click="updateFilter('all')">View All</button>
        <button @click="updateFilter('completed')">Completed</button>
        <button @click="updateFilter('ongoing')">Ongoing</button>
    </nav>
</template>

<script>
    export default {
        methods:{
            updateFilter(filter){
                this.$emit('filterChange', filter)
            }
        }
    }
</script>

<style>

</style>