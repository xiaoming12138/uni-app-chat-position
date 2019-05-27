<template>
	<view class="center">
		<view class="logo" @click="goLogin" :hover-class="!userName ? 'logo-hover' : ''">
			<image class="logo-img" :src="userName ? uerInfo.avatarUrl : avatarUrl"></image>
			<view class="logo-title">
				<text class="uer-name">Hi，{{ userName ? userName : '您未登录' }}</text>
				<text class="go-login navigat-arrow" v-if="!userName">&#xe65e;</text>
			</view>
		</view>
		<view class="center-list">
			<view class="center-list-item border-bottom" @click="chooseLocation('home')">
				<text class="list-icon">&#xe60c;</text>
				<text v-if="localInfo.home.name" class="list-text">修改居住地</text>
				<text v-else class="list-text">添加居住地</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
			<view v-if="localInfo.home.name" class="local_info local_info_top">
				<text>位置：{{ localInfo.home.name }}</text>
			</view>
			<view v-if="localInfo.home.name" class="local_info local_info_small">
				<text>详细信息：{{ localInfo.home.address }}</text>
			</view>
			<view class="center-list-item" @click="chooseLocation('work')">
				<text class="list-icon">&#xe60d;</text>
				<text v-if="localInfo.work.name" class="list-text">修改工作地</text>
				<text v-else class="list-text">添加工作地</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
			<view v-if="localInfo.work.name" class="local_info local_info_top">
				<text>位置：{{ localInfo.work.name }}</text>
			</view>
			<view v-if="localInfo.work.name" class="local_info local_info_small">
				<text>详细信息：{{ localInfo.work.address }}</text>
			</view>
		</view>
		<view class="center-list">
			<view class="center-list-item border-bottom">
				<text class="list-icon">&#xe60b;</text>
				<text class="list-text">管理图片</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
			<view class="center-list-item">
				<text class="list-icon">&#xe61a;</text>
				<text class="list-text">上传图片</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
		</view>
		<view class="center-list">
			<view class="center-list-item border-bottom" @click="goAbout">
				<text class="list-icon">&#xe603;</text>
				<text class="list-text">关于</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
			<view class="center-list-item">
				<text class="list-icon">&#xe609;</text>
				<text class="list-text">帐号管理</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
		</view>
		<view class="btn-row">
			<button type="primary" class="primary" v-if="userName" @tap="bindLogout">
				退出登录
			</button>
		</view>
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
	computed: {
		...mapState(['hasLogin', 'forcedLogin', 'userName'])
	},
	data() {
		return {
			localInfo: {
				home: {
					name: ''
				},
				work: {
					name: ''
				}
			},
			login: this.hasLogin,
			avatarUrl: '../../static/logo.png',
			uerInfo: {
				name: this.userName,
				avatarUrl: '../../static/logo.png'
			}
		};
	},
	methods: {
		chooseLocation(local) {
			uni.chooseLocation({
				success: res => {
					let info = {}
					info.name = res.name
					info.address = res.address
					info.latitude = res.latitude
					info.longitude = res.longitude
					if(local == 'home'){
						this.localInfo.home = info
					}else{
						this.localInfo.work = info
					}
					console.log('位置名称：' + res.name);
					console.log('详细地址：' + res.address);
					console.log('纬度：' + res.latitude);
					console.log('经度：' + res.longitude);
				},
				fail: function(res) {
					console.log('fail', res);
				}
			});
		},
		goLogin() {
			if (!this.login) {
				uni.navigateTo({
					url: '../login/login'
				});
			}
		},
		goAbout() {
			// #ifdef APP-PLUS
			uni.navigateTo({
				url: '/platforms/app-plus/about/about'
			});
			// #endif
			// #ifdef H5
			uni.navigateTo({
				url: '/platforms/h5/about/about'
			});
			// #endif
		}
	}
};
</script>

<style lang="scss" scoped>
/* 个人中心 */

.center {
	flex-direction: column;
	min-height: 100vh;
	.local_info{
		padding: 0 20upx;
		line-height: 30px;
		font-size: 16px;
		color: #555;
	}
	.local_info_small{
		font-size: 14px;
		color: #666;
	}
	.local_info_top{
		margin-top: 10upx;
	}
}

.logo {
	width: 750upx;
	height: 240upx;
	padding: 20upx;
	box-sizing: border-box;
	background-color: #ff80ab;
	flex-direction: row;
	align-items: center;
	display: flex;
	justify-content: space-between;
}

.logo-hover {
	opacity: 0.8;
}

.logo-img {
	width: 150upx;
	height: 150upx;
	border-radius: 150upx;
}

.logo-title {
	height: 150upx;
	flex: 1;
	align-items: center;
	justify-content: space-between;
	flex-direction: row;
	margin-left: 20upx;
}

.uer-name {
	height: 60upx;
	line-height: 60upx;
	font-size: 38upx;
	color: #ffffff;
}

.go-login.navigat-arrow {
	font-size: 38upx;
	color: #ffffff;
}

.login-title {
	height: 150upx;
	align-items: self-start;
	justify-content: center;
	flex-direction: column;
	margin-left: 20upx;
}

.center-list {
	background-color: #ffffff;
	margin-top: 20upx;
	width: 750upx;
	flex-direction: column;
	display: flex;
}

.center-list-item {
	height: 90upx;
	width: 750upx;
	box-sizing: border-box;
	flex-direction: row;
	padding: 0upx 20upx;
}

.border-bottom {
	border-bottom-width: 1upx;
	border-color: #c8c7cc;
	border-bottom-style: solid;
}

.list-icon {
	width: 40upx;
	height: 90upx;
	line-height: 90upx;
	font-size: 34upx;
	color: #ff80ab;
	text-align: center;
	font-family: texticons;
	margin-right: 20upx;
}

.list-text {
	height: 90upx;
	line-height: 90upx;
	font-size: 34upx;
	color: #555;
	flex: 1;
	text-align: left;
}

.navigat-arrow {
	height: 90upx;
	width: 40upx;
	line-height: 90upx;
	font-size: 34upx;
	color: #555;
	text-align: right;
	font-family: texticons;
}
</style>
