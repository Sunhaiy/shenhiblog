<template>
    <div id="admin">
        <div id="datacontiner">
            <div class="cardinadmin"></div>
            <div class="cardinadmin"></div>
            <div class="cardinadmin"></div>
        </div>
    </div>
    <div id="profilconfig">
        <div id="leftcard">
123123
        </div>
        <div id="rightcatd">
1231231
        </div>
    </div>
</template>



<script setup>


</script>



<style scoped>
#admin {
    width: 100%;
    display: flex;
    flex-direction: column;
}

#datacontiner {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
    margin-top: 20px;
}

.cardinadmin {
    width: 400px;
    height: 200px;
    background-color: #171717;
    margin: 10px;
    border: 2px solid #26262b;
    border-radius: 9px;
}
#profilconfig{
    font-weight: 600;
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 20px;
    background-color: #171717;
    border: 2px solid #26262b;
    border-radius: 9px;
    justify-content: space-between;
    padding: 40px;
}
#leftcard{
    padding: 20px;
    display: flex;
    background-color: aquamarine;
    width: 700px;
    height: 450px;
    justify-self: start;
    border-radius: 9px;
    border: 2px solid #26262b;
    flex-direction: column;
    background-color: #171717;
}
#rightcatd{
    padding: 20px;
    width: 550px;
    background-color: antiquewhite;
    display: flex;
    border-radius: 9px;
    border: 2px solid #26262b;
    background-color: #171717;
    flex-direction: column;
}
</style>