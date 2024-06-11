/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CheckPullRequest } from '../models/CheckPullRequest';
import type { CreateRewardRequest } from '../models/CreateRewardRequest';
import type { RewardResultSchema } from '../models/RewardResultSchema';
import type { RewardSchema } from '../models/RewardSchema';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class RewardsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Assign Reward
     * @returns RewardSchema Successful Response
     * @throws ApiError
     */
    public assignRewardApiRewardsPost({
        requestBody,
    }: {
        requestBody: CreateRewardRequest,
    }): CancelablePromise<RewardSchema> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/rewards/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Rewards
     * @returns RewardSchema Successful Response
     * @throws ApiError
     */
    public listRewardsApiRewardsGet({
        issueId,
        rewarderId,
    }: {
        issueId?: (number | null),
        rewarderId?: (string | null),
    }): CancelablePromise<Array<RewardSchema>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/rewards/',
            query: {
                'issue_id': issueId,
                'rewarder_id': rewarderId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Find Rewards For Pull Request
     * @returns RewardResultSchema Successful Response
     * @throws ApiError
     */
    public findRewardsForPullRequestApiRewardsCheckPullRequestPost({
        requestBody,
    }: {
        requestBody: CheckPullRequest,
    }): CancelablePromise<RewardResultSchema> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/rewards/check/pull-request',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Find Rewards For Commit
     * @returns any Successful Response
     * @throws ApiError
     */
    public findRewardsForCommitApiRewardsCheckCommitPost(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/rewards/check/commit',
        });
    }
}
