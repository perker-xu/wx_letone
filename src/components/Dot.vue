<template>
    <div class="dot">
        <div class="dot-outer">
            <div class="dot-core"></div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.dot{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 26px;
    height: 26px;
    background: #fff;
    border-radius: 50%;
    &-outer{
        width: 9px;
        height: 9px;
        background-color: #fff;
        border-radius: 100%;
        box-sizing: content-box;
        border: 4px solid #DDADFF;
        display: flex;
        justify-content: center;
        align-items: center;
        .dot-core{
            width: 5px;
            height: 5px;
            background-color: #DDADFF;
            border-radius: 50%;
        }
    }
}
</style>

