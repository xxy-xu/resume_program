<template>
	<view id="project-container">
		
		<view class="myProject">
			<!-- <uni-section title="广东融亿鑫  (2020年09月~2021年10月)" color="#000" type="line" >
				<view v-for="(item,index) in list1" :key="index">
					<uni-group :title="item.projectName" mode="card">
						<uni-title class="h4" type="h4" :title="item.describe"></uni-title>
						<uni-title class="h4" type="h4" :title="item.skill"></uni-title>
						<uni-title class="h4" type="h4" :title="item.responsibl"></uni-title>
						<uni-title class="h4" type="h4" :title="item.path"></uni-title>
											
					</uni-group>					
				</view>				
				
			</uni-section> -->
			<!-- <uni-section title="广东企数标普  (2016年09月~2020年08月)" color="#000"   type="line" >
				<view v-for="(item,index) in list2" :key="index">
					<uni-group :title="item.projectName" mode="card">
						<uni-title class="h4" type="h4" :title="item.describe"></uni-title>
						<uni-title class="h4" type="h4" :title="item.skill"></uni-title>
						<uni-title class="h4" type="h4" :title="item.responsibl"></uni-title>
						<uni-title class="h4" type="h4" :title="item.path"></uni-title>
						
					</uni-group>					
				</view>				
				
			</uni-section>	 -->
			<!-- <uni-section title="" type=""> -->
				<uni-collapse  accordion v-model="accordionVal" @change="change()" >
					<uni-collapse-item :title="item.projectName" v-for="(item,index) in list" :key="index">
						<view class="content">
							<uni-title class="h5" type="h5" color="#666" :title="item.describe"></uni-title>
							<uni-title class="h5" type="h5" color="#666" v-if="item.skill" :title="item.skill"></uni-title>
							<uni-title class="h5" type="h5" color="#666" :title="item.responsibl"></uni-title>
							<uni-title class="h5" type="h5" color="#666" :title="item.path"></uni-title>
							
							<!-- <text class="text">手风琴效果同时只会保留一个组件的打开状态，其余组件会自动关闭。</text> -->
						</view>
					</uni-collapse-item>
				</uni-collapse>
			<!-- </uni-section> -->
		</view>
	
		<view class="footer_bar"></view>
		<!--导航条-->
		<view class="tabBarLine"></view>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				accordionVal:'0',
				list:[
					{projectName:'融亿鑫（微信公众号项目+PC WEB）',projectTime:'2019.07 - 2020.01',
					describe:'该项目是基于地区产品快贷系统是一个为中小贷款渠道提供的信用贷款服务，涵盖公众号、PC管理后台让客户可以快捷的了解自己的展业情况以及返佣信息 。',
					skill:'技术栈：vue+vuex+element+axios+echarts',
					responsibl:'责任描述：负责项目的前期沟通，进行前端技术选型 选取 vue-cli2.0+webpack+element UI 等作为本项目的前端基础，进行整体架构的搭建、开发过程中及时进行协调，负责该项目前端方面工作进度的把控，同时开发了融亿鑫企服项目的一些周边相关项目，如融亿鑫后台管理、官网等项目。',
					path:'微信公众号搜索：融亿鑫企服'
					},
					{projectName:'税融通APP（uni-app项目 跨端多平台框架）',projectTime:'2019.07 - 2020.01',
					describe:'该项目为基于uni-app（App跨平台框架）而开发的一款App。该App主要是围绕发票信用贷款而展开的各项辅助功能应用。包括即时聊天、资讯浏览推广、信贷展业、信贷查询等功能。',
					skill:'技术栈：uni-app+vue+vuex+weex+webscoket',
					responsibl:'责任描述：负责项目中的信贷业务核心功能开发以及产品的定期更新迭代等前端方面工作，包括探讨微信公众号的功能与app环境下不兼容方面的问题以及H5支付在Andriod 与ios系统之间的问题解决方案。',
					path:'各大手机应用市场搜索关键字【税融通】'
					},
					{projectName:'税融通（微信公众号项目+PC WEB）',projectTime:'2017.07 - 2018.02',
					describe:'该项目是基于微信开放平台的一款发票开具协助软件，主要采用基本的html+css+js+jquery进行开发。税融通是一款依托互联网+大数据+人工智能，以税定贷，以票提信，免费为中小微企业提供融资服务，帮助中小微企业解决融资难、融资贵的产品。 ',
					skill:'',
					responsibl:'责任描述：在本项目中本人的主要职责是根据UI的设计图还原项目结构，并与后台人员协调接口，进行开发测试的相关工作。实现H5支付，以及微信授权登陆、转发、分享等功能。同时开发了税融通项目的一些周边相关项目如税融通门户网站。',
					path:'微信公众号搜索：税融通     税融通门户：https://www.srt1314.com/'
					},
					{projectName:'企数标普统一门户（后台管理系统 ）',projectTime:'2018.10 - 2020.08',
					describe:'该系统是公司所有后台项目的重构整合而成的后台管理系统，包含了分公司系统、税融通系统、创客管理系统。方便统一公司信息渠道，全方位掌握公司运营情况。',
					skill:'技术栈：vue+vuex+element+axios+echarts',
					responsibl:'主要负责分析原各项目模块功能要点进行代码优化迭代，以及独立完成前后端部分功能的相关工作，项目开发过程中改善了公司原有后台系统的传统开发模式、提高了后台系统的加载速度，优化了原项目缓存严重问题。并前端工程化了项目加快了开发测试的进程。',
					path:''
					},
					{projectName:'合伙人APP（webapp项目）',projectTime:'2017.02 - 2018.09',
					describe:'该项目的主要实现功能是为公司的合伙人、代理商、普通客户提供查询管理发展商户的功能制作的安卓版本以及IOS版本。该项目主要采用Hbuilder+MUI+Angular+Echarts实现APP的查询订单、上传照片、收益分析、等业务逻辑核心功能。利用Hbuilder实现应用的 Andriod 以及 IOS 的打包。',
					skill:'',
					responsibl:'责任描述：在本项目中本人主要负责初代产品的设计实现以及后续的维护迭代升版。目前该APP已经升级到了1.2.**+版本，运行稳定。',
					path:'苹果商店搜索 合伙人-发现身边的创客 '
					},
					{projectName:'随手票（微信公众号项目）',projectTime:'2017.04 - 2018.04',
					describe:'该项目的主要实现功能是为公司的合伙人、代理商、普通客户提供查询管理发展商户的功能制作的安卓版本以及IOS版本。该项目主要采用Hbuilder+MUI+Angular+Echarts实现APP的查询订单、上传照片、收益分析、等业务逻辑核心功能。利用Hbuilder实现应用的 Andriod 以及 IOS 的打包。',
					skill:'',
					responsibl:'责任描述：在本项目中本人的主要职责是根据UI的设计图还原项目结构，并与后台人员协调接口，进行开发测试的相关工作，并在18年4月时进行了2.0版本的大版本迭代更改。目前稳定运行中',
					path:' 微信公众号搜索：随手票  '
					},
				],
			}
		},
		onLoad() {
			
		},
		onShow() {
			
		},
		methods: {
			change(e) {
				console.log(e);
			}
		}
	}
</script>

<style lang="scss">
	#project-container{
		font-size: 24rpx;
	}
	.uni-section-header{
		color: black;
		font-weight: bold;
		font-size: 16px;
	}
	.example-body {
		flex-direction: column;
		flex: 1;
	}

	.content {
		padding: 15px;
	}

	.text {
		font-size: 14px;
		color: #666;
		line-height: 20px;
	}

	.button {
		// margin-top: 10px;
		margin: 10px;
		margin-bottom: 0;
	}
</style>