<script>
    import api from '@/services/api';
    export default{
        data(){
            return{}
        },
        methods:{
            async logout(){
                const res = await api.get('/logout')
                console.log(res.data)
            }
        }
    }
</script>
<template>
<span  @click = "logout" class="btn btn-outline-danger">logout</span>
</template>

<style scoped>
    /* span{
        width: 100%;
        text-align: center;
        background:linear-gradient(135deg,rgb(255, 84, 84),gray,black);
        padding:10px 15px;
        font-size: 32px;
        color: rgb(255, 255, 255);
        border-radius:20px;
    } */
</style>