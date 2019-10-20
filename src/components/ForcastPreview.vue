<template>
    <div>
        1
    </div>
</template>

<script>
    export default {
        name:'ForcastPreview',
        props: ['forcast'],
        created(){
            console.log('ForcastPreview props',this.forcast);
            
        },
    }
</script>

<style lang="scss" scoped>

</style>