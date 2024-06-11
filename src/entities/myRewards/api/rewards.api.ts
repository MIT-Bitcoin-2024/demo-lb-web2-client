import { appApi } from 'shared/api/app.api'

class _RewardsApi {

    async createNewReward(opts: { issue_url: string, amount: number }) {
        try {
            const resp = appApi.rewards.assignRewardApiRewardsPost({
                requestBody: {
                    issue_html_url: opts.issue_url,
                    reward_amount: opts.amount
                }
            })
            return resp
        }
        catch (e) {
            throw new Error(e as any)
        }
    }

}

const rewardsApi = new _RewardsApi()

export { rewardsApi }