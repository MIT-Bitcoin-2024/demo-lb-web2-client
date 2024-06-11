/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserSchema } from '../models/UserSchema';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class UserService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create User
     * @returns UserSchema Successful Response
     * @throws ApiError
     */
    public createUserApiUsersGhIdPost({
        ghId,
    }: {
        ghId: number,
    }): CancelablePromise<UserSchema> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/users/{gh_id}',
            path: {
                'gh_id': ghId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get User
     * @returns any Successful Response
     * @throws ApiError
     */
    public getUserApiUsersGet({
        userId,
        githubId,
    }: {
        userId?: (string | null),
        githubId?: (number | null),
    }): CancelablePromise<(UserSchema | Array<UserSchema>)> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/users/',
            query: {
                'user_id': userId,
                'github_id': githubId,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Authenticated User
     * @returns UserSchema Successful Response
     * @throws ApiError
     */
    public getAuthenticatedUserApiUsersMeGet(): CancelablePromise<UserSchema> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/users/me',
            errors: {
                401: `Unauthorized`,
            },
        });
    }
}
