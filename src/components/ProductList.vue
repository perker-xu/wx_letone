<template>
	<div class="product-list-component">
		<div class="product-box">
			<div class="product-single">
				<div class="product-static">
					<!-- 竖线 -->
					<div class="vertical-line"></div>
					<!-- 点 -->
					<Dot class="dot" />
					<!-- 横线 -->
					<div class="transverse-line"></div>
				</div>
				<Product class="product-component" :productData="productData"/>
			</div>
			
		</div>
		<div class="product-box">
			<div class="product-single">
				<div class="product-static">
					<!-- 竖线 -->
					<div class="vertical-line"></div>
					<!-- 点 -->
					<Dot class="dot" />
					<!-- 横线 -->
					<div class="transverse-line"></div>
				</div>
				<Product class="product-component" :productData="productData"/>
			</div>
		</div>
		<div class="product-box">
			<div class="product-single">
				<div class="product-static">
					<!-- 竖线 -->
					<div class="vertical-line"></div>
					<!-- 点 -->
					<Dot class="dot" />
					<!-- 横线 -->
					<div class="transverse-line"></div>
				</div>
				<Product class="product-component" :productData="productData"/>
			</div>
		</div>
		<div class="product-box">
			<div class="product-single">
				<div class="product-static">
					<!-- 竖线 -->
					<div class="vertical-line"></div>
					<!-- 点 -->
					<Dot class="dot" />
					<!-- 横线 -->
					<div class="transverse-line"></div>
				</div>
				<Product class="product-component" :productData="productData"/>
			</div>
		</div>
		<div class="product-box">
			<div class="product-single">
				<div class="product-static">
					<!-- 竖线 -->
					<div class="vertical-line"></div>
					<!-- 点 -->
					<Dot class="dot" />
					<!-- 横线 -->
					<div class="transverse-line"></div>
				</div>
				<Product class="product-component" :productData="productData"/>
			</div>
		</div>
		<div class="product-box">
			<div class="product-single">
				<div class="product-static">
					<!-- 竖线 -->
					<div class="vertical-line"></div>
					<!-- 点 -->
					<Dot class="dot" />
					<!-- 横线 -->
					<div class="transverse-line"></div>
				</div>
				<Product class="product-component" :productData="productData"/>
			</div>
		</div>
		<div class="product-box">
			<div class="product-single">
				<div class="product-static">
					<!-- 竖线 -->
					<div class="vertical-line"></div>
					<!-- 点 -->
					<Dot class="dot" />
					<!-- 横线 -->
					<div class="transverse-line"></div>
				</div>
				<Product class="product-component" :productData="productData"/>
			</div>
		</div>
		<div class="product-box">
			<div class="product-single">
				<div class="product-static">
					<!-- 竖线 -->
					<div class="vertical-line"></div>
					<!-- 点 -->
					<Dot class="dot" />
					<!-- 横线 -->
					<div class="transverse-line"></div>
				</div>
				<Product class="product-component" :productData="productData"/>
			</div>
		</div>
		<div class="product-box">
			<div class="product-single">
				<div class="product-static">
					<!-- 竖线 -->
					<div class="vertical-line"></div>
					<!-- 点 -->
					<Dot class="dot" />
					<!-- 横线 -->
					<div class="transverse-line"></div>
				</div>
				<Product class="product-component" :productData="productData"/>
			</div>
		</div>
		<div class="product-box">
			<div class="product-single">
				<div class="product-static">
					<!-- 竖线 -->
					<div class="vertical-line"></div>
					<!-- 点 -->
					<Dot class="dot" />
					<!-- 横线 -->
					<div class="transverse-line"></div>
				</div>
				<Product class="product-component" :productData="productData"/>
			</div>
		</div>
		<div class="product-box">
			<div class="product-single">
				<div class="product-static">
					<!-- 竖线 -->
					<div class="vertical-line"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Dot from '@/components/Dot.vue';
	import Product from '@/components/Product.vue';
	export default {
		name:'GoolsList',
		data () {
			return {
				productData:{
					srcArr: [
						require('@/assets/images/resource/product-1.png'),
						// require('@/assets/images/resource/product-2.png')
					],
					title: '原力苏醒原力苏醒原力苏醒原力苏醒',
					price: 39800
				}
			};
		},
		components:{
			Dot,
			Product
		}
	}
</script>
	
<style scoped lang="less">
	.product-list-component {
		.product-box {
			width: 100%;
			height: .8rem;
			.product-single {
				position: relative;
				width: 100%;
				height: 100%;
				.product-static {
					position: relative;
					width: 50%;
					height: 100%;
					.vertical-line {
						width: 4px;
						height: 100%;
						background: linear-gradient(
							0deg,
							rgba(233,145,249,1),
							rgba(195,134,251,1)
						);
						z-index: 0;
					} 
					.dot {
						z-index: 1;
					}
					.transverse-line {
						width: 60%;
						height: 4px;
						background: linear-gradient(
							0deg,
							rgba(233,145,249,1),
							rgba(195,134,251,1)
						);
						z-index: 0;
					}
				}
				.product-component {
					position: absolute;
				}
			}
		}
		// 奇数子元素
		.product-box:nth-child(odd) {
			.product-single {
				display: flex;
				flex-direction: row;
				justify-content: flex-start;
				.product-static {
					.vertical-line {
						margin-left: calc(100% - 2px);
					}
					.dot {
						position: absolute;
						left: calc(100% - 13px);
						bottom: -13px;
					}
					.transverse-line {
						position: absolute;
						right: 0;
						bottom: -2px;
					}
				}
				.product-component {
					left: 5%;
					transform: translateY(25%);
				}
			}
			
		}
		// 偶数子元素
		.product-box:nth-child(even) {
			.product-single {
				display: flex;
				flex-direction: row;
				justify-content: flex-end;
				.product-static {

					.vertical-line {
						margin-left: -2px;
					}
					.dot {
						position: absolute;
						left: -13px;
						bottom: -13px;
					}
					.transverse-line {
						position: absolute;
						left: 0;
						bottom: -2px;
					}
				}
				.product-component {
					right: 5%;
					transform: translateY(25%);
				}
			}
			
		}
	}
</style>
