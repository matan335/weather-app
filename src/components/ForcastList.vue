<template>
    <div>
        <forcast-preview v-for="(forcast, i) in data.DailyForecasts" :key="i" :forcast="forcast"></forcast-preview>
    </div>
</template>

<script>
import ForcastPreview from './ForcastPreview.vue'

    export default {
        name:'ForcastList',
        props: ['data'],
        // created(){
        //     console.log('ForcastList props',this.data);
            
        // },
        components: {
            ForcastPreview
        }
    }
</script>

<style lang="scss" scoped>

</style>