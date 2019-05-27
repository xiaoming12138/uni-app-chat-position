<template>
    <view class="container">
        <view class="input-group">
            <view class="input-row">
                <text class="title">邮箱：</text>
                <m-input type="text" focus clearable v-model="email" placeholder="请输入邮箱"></m-input>
            </view>
        </view>

        <view class="btn-row">
            <button type="primary" class="login" @tap="findPassword">提交</button>
        </view>
    </view>
</template>

<script>
    import service from '../../service.js';
    import mInput from '../../components/m-input.vue';

    export default {
        components: {
            mInput
        },
        data() {
            return {
                email: ''
            }
        },
        methods: {
            findPassword() {
                /**
                 * 仅做示例
                 */
                if (this.email.length < 3 || !~this.email.indexOf('@')) {
                    uni.showToast({
                        icon: 'none',
                        title: '邮箱地址不合法',
                    });
                    return;
                }
                uni.showToast({
                    icon: 'none',
                    title: '已发送重置邮件至注册邮箱，请注意查收。',
                    duration: 3000
                });
            }
        }
    }
</script>

<style lang="scss">
.container{
		.input-group{
			margin: 20px 11px 0;
		}
	}
	.input-row{
		color: #FF80AB;
		&.border::after{
			left: 0px;
		}
	}
	.login{
		background-color: rgb(255, 128, 171);
		border: rgb(255, 128, 171);
		color: #fff;
		margin: 20px 0;
	}
</style>
