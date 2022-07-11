<template>
	<view id="index-container">
		<view class="status_bar"><!-- 这里是状态栏 --></view>
		
		<view class="container">
			
			<view class="title_h1">徐献玉</view>
			<view class="title_h2">
				Web前端开发
			</view>
		</view>
		
		<!--loading加载-->
		<view class="spinner">
		  <view class="bounce1"></view>
		  <view class="bounce2"></view>
		  <view class="bounce3"></view>
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				
			}
		},
		onLoad() {
			
		},
		onShow() {
			setTimeout(function() {
				uni.switchTab({
					url: '../personal/personal'
				});
				
			}, 3000);
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	#index-container{
		background-color: black;
		height: 100%;
	}
	.container{
		color: #fcfcfd;
		text-align: center;
		padding-top: 50%;
	}
	.title_h1{
		font-size: 50rpx;
		font-weight: bold;
		 flex-direction: column;
	}
	.title_h2{
		font-size: 44rpx;
	    color: #999999;
		padding:100rpx 0;
	}
	.footer{
		 position: fixed;
		 left: 0rpx;
		 bottom: 0rpx;
		 width: 100%;
		 height: 100rpx;
		 background-color: #000;
	}
	
	//loading加载样式
	.spinner {
	      margin: 200rpx auto 0;
	      width: 300rpx;
	      text-align: center;
		  height: 440rpx;
	    }
	     
	    .spinner > view {
	      width: 30rpx;
	      height: 30rpx;
	      background-color: #fcfcfd;
	     
	      border-radius: 100%;
	      display: inline-block;
	      -webkit-animation: bouncedelay 2.6s infinite ease-in-out;
	      animation: bouncedelay 2.6s infinite ease-in-out;
	      /* Prevent first frame from flickering when animation starts */
	      -webkit-animation-fill-mode: both;
	      animation-fill-mode: both;
	    }
	     
	    .spinner .bounce1 {
	      -webkit-animation-delay: -0.48s;
	      animation-delay: -0.48s;
	    }
	     
	    .spinner .bounce2 {
	      -webkit-animation-delay: -0.32s;
	      animation-delay: -0.32s;
	    }
	     
	    @-webkit-keyframes bouncedelay {
	      0%, 80%, 100% { -webkit-transform: scale(0.0) }
	      40% { -webkit-transform: scale(1.0) }
	    }
	     
	    @keyframes bouncedelay {
	      0%, 80%, 100% {
	        transform: scale(0.0);
	        -webkit-transform: scale(0.0);
	      } 40% {
	        transform: scale(1.0);
	        -webkit-transform: scale(1.0);
	      }
	    }
	
</style>