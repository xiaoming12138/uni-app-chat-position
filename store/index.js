import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        /**
         * 是否需要强制登录
         */
        forcedLogin: false,
        hasLogin: false,
        userName: "",
		user: {
			home: {
				id: 1,
				name: 'tax',
				img: 'static/chat/homeHL.png'
			},
			customer: {
				id: 2,
				name: 'customer',
				img: 'static/chat/customerHL.png'
			}
		}
    },
    mutations: {
        login(state, userName) {
            state.userName = userName || '新用户';
            state.hasLogin = true;
        },
        logout(state) {
            state.userName = "";
            state.hasLogin = false;
        }
    }
})

export default store
