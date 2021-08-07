import Web3 from 'web3'
import Store from '@/store'

export default {
	async getAccounts() {
		const web3 = new Web3(Web3.givenProvider)
		await window.ethereum.send('eth_requestAccounts');
		const account = await web3.eth.getAccounts();
		this.login(account)
	},
	login(account) {
		Store.commit('auth/account', account)
	},
}
