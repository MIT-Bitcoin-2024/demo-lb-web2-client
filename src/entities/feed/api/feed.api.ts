import { userApi } from 'entities/user/api/user.api'
import { appApi } from 'shared/api/app.api'
import { gitHubApi } from 'shared/api/github.api'
import { UserSchema } from 'shared/gen'

class _FeedApi {

    apiKey = ['_FeedApi']

    qkGetIssueData(issueUrl: string) {
        return [this.apiKey, 'getIssueData', issueUrl]
    }

    async getIssueData(issueUrl: string): Promise<{
        title: string,
        user: {
            "login": string,
            "avatar_url": string,
            "html_url": string,
        }
    } | undefined> {
        try {
            const { data } = await gitHubApi.get(issueUrl, {
                headers: {
                    'Authorization': 'Bearer ' + userApi.getGitHubToken()
                }
            })
            return data
        } catch (e) {
            return
        }
    }

    qkGetGitHubAccountDataByAppUserId(appUserId: string) {
        return [this.apiKey, 'getGitHubAccountDataByAppUserId', appUserId]
    }

    async getGitHubAccountDataByAppUserId(appUserId: string): Promise<{
        "login": string,
        "id": number,
        "avatar_url": string,
        "html_url": string,
    } | undefined> {
        try {
            const resp = await appApi.user.getUserApiUsersGet({ userId: appUserId }) as UserSchema | undefined
            if (!resp)
                return

            const { data } = await gitHubApi.get('/user/' + resp.github_id, {
                headers: {
                    'Authorization': 'Bearer ' + userApi.getGitHubToken()
                }
            })
            return data
        } catch (e) {
            return
        }
    }
}

const feedApi = new _FeedApi()

export { feedApi }