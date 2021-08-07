import Web3 from 'web3'
import jsonInterface from '../../test-token.json'

export default {
  async createContract() {
    const web3 = new Web3(Web3.givenProvider)
    return new web3.eth.Contract(jsonInterface,'0xEda9B484605d44296fC279bf0a110203B96E9297');
  },
  async testPingMethod() {
    const MyContract =  await this.createContract()
    const ping = await MyContract.methods.ping.call((error, result) => {
      console.log(result);
    })
    console.log(ping)
  },
}
