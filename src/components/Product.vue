<template>
    <div class="product">
        <div class="circle">
            <div class="sole-circle">
                <div class="circle-core">
                    <img :src="productData.srcArr[0]">
                </div>
            </div>
        </div>
        <div class="product-description">
            <h4>《{{ productData.title }}》</h4>
            <p> {{ productData.price }} </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Product',
    props: {
        productData: Object
    }
}
</script>

<style lang="less" scoped>
.product {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    padding: .05rem;

    .sole-circle {
        width: .6rem;
        height: .6rem;
        border-radius: 50%;
        overflow: hidden;
        border: 3px solid #fff;
        box-shadow: 1px 2px 3px #999;
        margin-bottom: .1rem;
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 5px;
        background: linear-gradient(0deg,rgba(190,134,252,1),rgba(234,135,246,1));
        
        .circle-core {
            border-radius: 50%;
            overflow: hidden;
            background-color: #fff;
            
            img {
                width: 100%;
                vertical-align: middle;
            }
        }
    }

    .product-description {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h4,p {margin: 0;padding: 0;}

        h4 {
            width: 1rem;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            color: #333;
        }
        
        p {
            color: #AD3BB4;
        }
    }
}

.product:active {
    opacity: .7;
}
</style>
