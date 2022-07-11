<template>
	<view id="skill-container">
		<view class="status_bar"><!-- 这里是状态栏 --></view>
		
		<view class="mySkill">
						
			<!---->
			<view class="">
				<view class="classify-title">## 前端技能 </view>
				<!-- <uni-section title="前端技能" type="line"> -->
					<view class="main_skill">Web开发<text>Html/Css/JavaScript</text></view>
					<view class="main_skill">UI框架<text>Bootstrap/Element UI/MUI</text></view>
					<view class="main_skill">JS框架<text>JQuery/Vue/Angular</text></view>
					<view class="main_skill">跨端多平台框架<text>Uni-App</text></view>
					<view class="main_skill">IDE<text>VSCode/HBuilderX</text></view>
					<view class="main_skill">构建工具<text>WebPack/NPM</text></view>
					<view class="main_skill">版本管理<text>Git/Svn</text></view>
					<view class="main_skill">微信<text>公众号/小程序</text></view>
					<view class="main_skill">数据可视化<text>Echars</text></view>
				<!-- </uni-section> -->
			</view>
			
			<!--技能百分比-->
			<view class="skillList">
				
				<uni-section title="" padding>
					<view class="example-body">
						<view class="tag-view" v-for="(item, index) in skillList" :key="index" >
							<uni-tag :text="item.name" :type="item.type" data-id="index"  :size="item.size" />
						</view>
					</view>
				</uni-section>

			</view>
			
			<!--技能能量值-->
			<view class="">
				<view class="classify-title">## 技能能量值 </view>
			
				<view class="progress-box">
					HTML/CSS3
					<progress :percent="pgList[0]" show-info active stroke-width="5" />
					JavaScript
					<progress :percent="pgList[1]" show-info active stroke-width="5" />
					JQuery
					<progress :percent="pgList[2]" show-info active stroke-width="5" />
					Vue
					<progress :percent="pgList[3]" show-info active stroke-width="5" />
					Angular
					<progress :percent="pgList[4]" show-info active stroke-width="5" />
					
					Uni-App
					<progress :percent="pgList[5]" show-info active stroke-width="5" />	
					Bootstrap
					<progress :percent="pgList[6]" show-info active stroke-width="5" />
					Element UI
					<progress :percent="pgList[7]" show-info active stroke-width="5" />						
					公众号
					<progress :percent="pgList[8]" show-info active stroke-width="5" />
					小程序
					<progress :percent="pgList[9]" show-info active stroke-width="5" />
					
					APP
					<progress :percent="pgList[10]" show-info active stroke-width="5" />
					Echars
					<progress :percent="pgList[11]" show-info active stroke-width="5" />
					WebPack
					<progress :percent="pgList[12]" show-info active stroke-width="5" />
					NPM
					<progress :percent="pgList[13]" show-info active stroke-width="5" />
					Git
					<progress :percent="pgList[14]" show-info active stroke-width="5" />
					Svn
					<progress :percent="pgList[15]" show-info active stroke-width="5" />
				</view>
			</view>
			
		</view>
		
		<view class="footer_bar"></view>
		<!--导航条-->
		<view class="tabBarLine"></view>
	</view>
</template>

<script>
	//标签数组
	const skillList = [
	  {name:"HTML,CSS3",type:"primary",size:"normal"},
	  {name:"JavaScript",type:"success",size:"small"},
	  {name:"JQuery",type:"warning",size:"small"},
	  {name:"Vue",type:"error",size:"small"},
	  {name:"Element UI",type:"",size:"small"},
	  {name:"UNI-APP",type:"error",size:"small"},
	  {name:"Angular",type:"success",size:"mini"},
	  {name:"BootStrap",type:"primary",size:"mini"},
	  {name:"微信小程序",type:"success",size:"mini"},
	  {name:"MUI",type:"primary",size:"mini"},
	  {name:"GIT,SVN",type:"",size:"mini"},
	  {name:"Echars",type:"warning",size:"mini"},
	];
	export default {
		components: {},
		data() {
			return {
				skillList:skillList,
				pgList: [90, 70,70, 80, 60,
						80, 60,70, 80, 60,
						80, 60,60, 80, 80,70]
			}
		},
		onLoad() {
			
		},
		onShow() {
			
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">

	.example-body {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: flex-start;
		align-items: flex-end;
		flex-wrap: wrap;
	}
	
	.tag-view {
		margin-right: 20rpx;
		height: 90rpx;
	}
	.uni-tag{
		border-width: 16rpx !important;
	}
	.example-section {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		padding: 20rpx;
	}

	.uni-text {
		font-size: 28rpx;
		line-height: 44rpx;
		color: #333;
	}
	.progress-box{
		font-size: 28rpx;
		padding: 20rpx;
	}
	.main_skill{
		padding: 20rpx;
		font-size: 28rpx;
		font-weight: 600;
	}
	.main_skill text{
		padding: 0rpx 10rpx;
		font-weight: initial;
	}
	.classify-title{
		font-weight: bold;
		font-size: 28rpx;	
	    margin: 30rpx 20rpx 30rpx 20rpx;
	}
</style>