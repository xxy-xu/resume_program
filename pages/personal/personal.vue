<template>
	<view id="index-container">
		
		<view class="headerData">
				<view class="img">
					<view class="headerImg">
						<image src="/static/headPhoto.png"></image>					
					</view>	
				</view>
				<view class="name">徐献玉</view>
				<view>求职意向：<text class="job">Web前端开发工程师</text></view>
				<view>江南大学 . 计算机信息管理 . 大专</view>
				<view class="myItem">
					<view></view>
					<view></view>
					<view @click="copyMessage('Sco-XXY-')">
						<uni-icons type="weixin" size="20" color="#45c52a"></uni-icons>
					</view>
					<view @click="telphone('13826289586')">
						<uni-icons type="phone" size="20" color="#45c52a"></uni-icons>
					</view> 
					<view @click="copyMessage('1098302836@qq.com')">
						<uni-icons type="email" size="20" color="#45c52a"></uni-icons>
					</view> 
					<view></view>
					<view></view>
				</view>
		</view>
		
		<view class="myData">
			<uni-group mode="card">
				<view  class="content_introduce"> 您好，我是徐献玉，一名五年工作经验的WEB前端开发工程师，曾就职于广东企数标普，
广东融亿鑫两家互联网金融信用贷款公司，主要负责公司官网、内部管理系统、公众号和APP等前端开发。</view>				
			</uni-group>
			
			<view class="classify-title">## 联系方式 </view>
			<view class="mine_info">				
				<view class="mine-flex-container">					
					<view class="left_wap">
						<text class="title_black">经验：</text>
						<text class="title_broder">五年前端开发</text>						
					</view>
					<view class="right_wap">
						<text class="title_black">坐标：</text>
						<text class="title_broder">广州</text>						
					</view>
				</view>
				<view class="mine-flex-container">
					<view class="left_wap">
						<text class="title_black">微信：</text>
						<text class="title_broder" @click="copyMessage('Sco-XXY-')">Sco-XXY-</text>						
					</view>
					<view class="right_wap">
						<text class="title_black">手机号：</text>
						<text class="title_broder" @click="telphone('13826289586')">13826289586</text>						
					</view>
				</view>
				<view class="mine-flex-container">
					<view class="left_wap">
						<text class="title_black">邮箱：</text>
						<text class="title_broder" @click="copyMessage('1098302836@qq.com')">1098302836@qq.com</text>						
					</view>
				</view>
			</view>
			
			<view class="classify-title">## 技能栈 </view>
			<view class="main_skill">
				<view>* 熟练使用HTML、CSS、JavaScript等前端技术，完成页面布局，开发兼容主流浏览器的页面，以及实现页面的交互；；</view>
				<view>* 熟悉VueJs、AngularJs等主流框架MVVM、MVC框架；</view>
				<view>* 熟练使用Git、Svn版本管理工具以及webpack打包构建工具；</view>
				<view>* 熟练使用jQuery框架，实现页面的交互效果，提高用户体验；</view>
				<view>* 熟练使用Uni-App框架，编译到Android版、ios版、H5版、微信小程序版等多个平台；</view>
				<view>* 熟悉Element-UI、Echars、Bootstrap、MUI等前端技术框架；</view>
			</view>
			
			<view class="classify-title">## 工作经历 </view>
			<view class="main_job">
				<view class="company_title">*2020.09—2021.10 广东融亿鑫企业服务有限公司</view>
				<view>+ 独立开发并完成公司运营产品的PC端、公众号和内部平台项目的开发以及维护；</view>
				<view>+ 负责项目的前期沟通，需求讨论方面工作，选择合适的技术栈进行整体架构的搭建、开发过程中及时进行协调；</view>
				<view>+ 与后端开发人紧密合作，完成产品的定期更新迭代，以及对前端项目的把控；</view>
				<view class="empty"></view>
				<view class="company_title">*2016.09—2020.08 广东企数标普互联网信息服务有限公司</view>
				<view>+ 在职期间曾参与公司运营的数个项目的前端开发工作，协助部门成员完成官网、后台管理系统、公众号以及APP等项目的开发维护；</view>
				<view>+ 根据项目需求开发项目前端页面，实现产品交互与数据逻辑展示，完成产品的定期更新迭代；</view>
				<view>+ 使用Uni-App框架，进行编译并发布到Android版、ios版、公众号版等多个平台；</view>
				<view>+ 负责部分Java后台接口与Oracle数据库相关开发；</view>
				
			</view>
			
			<!-- <view class="classify-title">## 联系方式 </view>
			<view class="contact_way">
				<view class="contact_item">
					<text class="item_black">微信：</text>
					<text class="item_broder" @click="copyMessage('Sco-XXY-')">Sco-XXY-</text>						
				</view>
				<view class="contact_item">
					<text class="item_black">手机号：</text>
					<text class="item_broder" @click="telphone('13826289586')">13826289586</text>						
				</view>
				<view class="contact_item">
					<text class="item_black">QQ：</text>
					<text class="item_broder" @click="copyMessage('1098302836')">1098302836</text>						
				</view>
			</view> -->
			
			<!-- <view class="classify-title">## 坐标 </view> -->
			<view class="coord">
				<!-- <map longitude="{{longitude}}" latitude="{{latitude}}"
				  markers="{{markers}}" bindmarkertap="markertap"></map> -->
				<!-- longitude="{{longitude}}" 					//中心经度
				latitude="{{latitude}}"						//中心纬度
				scale="{{scale}}"  							//原始缩放级别，范围3-20
				markers="{{markers}}" 						//标记点
				show-location="{{showLocation}}"			//显示带有方向的当前定位点
				style="{{style}}"							//地图尺寸
				subkey="{{subkey}}" 						//map秘钥 -->
			</view>
			
		</view>
		
		<view class="footer_bar"></view>
		
		<!--导航条-->
		<view class="tabBarLine"></view>
		
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
			
		},
		methods: {
			telphone(phone){
				wx.makePhoneCall({
				   phoneNumber: phone
				 })
			},
			 copyMessage(value) {
			  uni.setClipboardData({
				data: value,
				success: function (res) {
				  uni.getClipboardData({
					success: function (res) {
					  uni.showToast({
						title: "复制成功",
					  });
					},
				  });
				},
			  });
			},
		}
	}
</script>

<style lang="scss">
	@import 'personal.scss';
</style>
