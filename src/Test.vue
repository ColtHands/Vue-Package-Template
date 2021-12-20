<template>
    <div>
        <span>Test UI component</span>
        <button @click="add">Click From Component</button>
    </div>
</template>

<script>
export default {
    methods: {
        add() {
            console.log(this)
            console.log(this.$store)
            ++this.ticker
        }
    }
}
</script>