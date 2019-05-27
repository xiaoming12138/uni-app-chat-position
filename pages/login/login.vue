<template>
	<view class="container">
		<view class="input-group">
			<view class="input-row border">
				<text class="title">账号：</text>
				<m-input
					class="m-input"
					type="text"
					clearable
					focus
					v-model="account"
					placeholder="请输入账号"
				></m-input>
			</view>
			<view class="input-row">
				<text class="title">密码：</text>
				<m-input
					type="password"
					displayable
					v-model="password"
					placeholder="请输入密码"
				></m-input>
			</view>
		</view>
		<view class="btn-row">
			<button type="primary" class="login" @tap="bindLogin">登录</button>
		</view>
		<view class="action-row">
			<navigator url="../reg/reg">注册账号</navigator>
			<text>|</text>
			<navigator url="../pwd/pwd">忘记密码</navigator>
		</view>
		<view class="oauth-row" v-if="hasProvider">
			<view class="oauth-image" v-for="provider in providerList" :key="provider.value">
				<image :src="provider.image" @tap="oauth(provider.value)"></image>
			</view>
		</view>
	</view>
</template>

<script>
import service from '../../service.js';
import mInput from '../../components/m-input.vue';
import { mapState, mapMutations } from 'vuex';
export default {
	components: {
		mInput
	},
	data() {
		return {
			providerList: [],
			hasProvider: false,
			account: '',
			password: '',
			positionTop: 0
		};
	},
	computed: mapState(['forcedLogin']),
	methods: {
		...mapMutations(['login']),
		
		bindLogin() {
			/**
			 * 客户端对账号信息进行一些必要的校验。
			 * 实际开发中，根据业务需要进行处理，这里仅做示例。
			 */
			if (this.account.length < 5) {
				uni.showToast({
					icon: 'none',
					title: '账号最短为 5 个字符'
				});
				return;
			}
			if (this.password.length < 6) {
				uni.showToast({
					icon: 'none',
					title: '密码最短为 6 个字符'
				});
				return;
			}
			/**
			 * 下面简单模拟下服务端的处理
			 * 检测用户账号密码是否在已注册的用户列表中
			 * 实际开发中，使用 uni.request 将账号信息发送至服务端，客户端在回调函数中获取结果信息。
			 */
			const data = {
				account: this.account,
				password: this.password
			};
			const validUser = service.getUsers().some(function(user) {
				return data.account === user.account && data.password === user.password;
			});
			if (validUser) {
				this.toMain(this.account);
			} else {
				uni.showToast({
					icon: 'none',
					title: '用户账号或密码不正确'
				});
			}
		},
		toMain(nameValue) {
			console.log(this.login);
			this.login(nameValue);
			uni.switchTab({
				url: '/pages/new/new'
			});
		},
		oauth(value) {
			uni.login({
				provider: value,
				success: res => {
					uni.getUserInfo({
						provider: value,
						success: infoRes => {
							/**
							 * 实际开发中，获取用户信息后，需要将信息上报至服务端。
							 * 服务端可以用 userInfo.openId 作为用户的唯一标识新增或绑定用户信息。
							 */
							this.toMain(infoRes.userInfo.nickName);
						}
					});
				},
				fail: err => {
					console.error('授权登录失败：' + JSON.stringify(err));
				}
			});
		}
	}
};
</script>

<style lang="scss">
.action-row {
	display: flex;
	flex-direction: row;
	justify-content: center;
	color: #ff80ab;
}
.container {
	.input-group {
		margin: 20px 11px 0;
	}
}
.input-row {
	color: #ff80ab;
	&.border::after {
		left: 0px;
	}
}
.login {
	background-color: rgb(255, 128, 171);
	border: rgb(255, 128, 171);
	color: #fff;
	margin: 20px 0;
}
.action-row navigator {
	color: #ff80ab;
	padding: 0 20upx;
}

.oauth-row {
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-top: 100px;
	width: 100%;
}

.oauth-image {
	width: 100upx;
	height: 100upx;
	border: 1upx solid #dddddd;
	border-radius: 100upx;
	margin: 0 40upx;
	background-color: #ffffff;
}

.oauth-image image {
	width: 60upx;
	height: 60upx;
	margin: 20upx;
}
</style>
