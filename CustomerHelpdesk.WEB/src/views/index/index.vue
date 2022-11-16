<template>
    <div>
    <h1 v-for="item in 100" :key="item">{{ msg }}</h1>
    </div>
</template>
<script>
export default {
    name:"Index",
    data(){
        return{
            msg:"Hello Vue"
        }
    }
}
</script>>