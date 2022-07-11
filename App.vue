<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	// * {
	// 	margin: 0;
	// 	padding: 0;
	// }
	.empty{
		width: 100%;
		clear: both;
		height: 20rpx;
	}
	
	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}
	
	.tabBarLine {
		width: 100%;
		height: 2upx;
		position: fixed;
		bottom: 0upx;
		background: #f2f2f2;
		transform: scaleY(0.5);
	}
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
		color: #000;
		background: #fff;
	}
	.footer_bar{
		height: 80rpx;
		bottom: 0;
	}
</style>
