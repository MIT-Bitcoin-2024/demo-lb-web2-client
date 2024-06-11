import axios from 'axios'
import { userApi } from 'entities/user/api/user.api'
import { CancelablePromise, lb } from 'shared/gen'
import { ApiRequestOptions } from 'shared/gen/core/ApiRequestOptions'
import { AxiosHttpRequest } from 'shared/gen/core/AxiosHttpRequest'
import { request } from 'shared/gen/core/request'

// TODO: переделать 
const apiInstance = axios.create({
    baseURL: 'https://one.lightningbounties.com/',
    headers: {
        // eslint-disable-next-line
        'Authorization': 'Bearer ' + userApi.getAuthToken()
    }
})

apiInstance.interceptors.request.use((config) => {
    config.headers.Authorization = 'Bearer ' + userApi.getAuthToken()
    return config
})

const appApi = new lb(
    {},
    class AxiosHttpRequestInstance extends AxiosHttpRequest {
        public override request<T>(options: ApiRequestOptions): CancelablePromise<T> {
            return request(this.config, options, apiInstance)
        }
    },
)

export { appApi }