import { feedApi } from 'entities/feed/api/feed.api'
import { appApi } from 'shared/api/app.api'

class _UserApi {
    apiKey = ['_UserApi']

    accessToken: string | undefined = undefined
    gitHubToken: string | undefined = undefined
    userId: string | undefined = undefined
    getUserId() {
        return this.userId
    }

    getAuthToken() {
        return this.accessToken
    }

    setAuthToken(token?: string) {
        return this.accessToken = token
    }

    getGitHubToken() {
        return this.gitHubToken
    }

    setGitHubToken(token?: string) {
        return this.gitHubToken = token
    }

    async authWithGithubToken(githubToken: string) {
        try {
            const { access_token } = await appApi.auth.githubCallbackApiAuthGithubCallbackGet({
                code: githubToken
            })
            return access_token
        } catch (e) {
            throw new Error(e as any)
        }

    }

    async getUserData() {
        try {
            const user = await appApi.user.getAuthenticatedUserApiUsersMeGet()
            this.userId = user.id
            if (!user)
                return undefined
            const userData = await feedApi.getGitHubAccountDataByAppUserId(user.id)
            return {
                data: userData,
                points: user.points
            }
        } catch (e) {

        }
    }
}

const userApi = new _UserApi()

export { userApi }