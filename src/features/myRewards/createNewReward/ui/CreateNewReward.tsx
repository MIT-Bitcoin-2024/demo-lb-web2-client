import { PlusOutlined } from '@ant-design/icons'
import { Button, Flex, Form, Input, InputNumber, notification, Popover } from 'antd'
import { rewardsApi } from 'entities/myRewards'
import { FC } from 'react'
import { useMutation, useQueryClient } from 'react-query'

const CreateNewReward = () => {
    return (
        <Popover
            content={<RewardForm />}
        >
            <Button
                style={{ width: '100%' }}
                icon={<PlusOutlined />}
            />
        </Popover>
    )
}

const RewardForm: FC = () => {

    const client = useQueryClient()
    const [api, contextHolder] = notification.useNotification()
    const { mutateAsync: createNewReward, isLoading } = useMutation({ mutationFn: rewardsApi.createNewReward })
    const [form] = Form.useForm()

    return (
        <Form
            form={form}
            onFinish={async (vals: { issue_url: string, amount: number }) => {
                try {
                    await createNewReward(vals)
                    api.success({
                        message: 'Reward successfully created!'
                    })
                    await client.refetchQueries({
                        queryKey: ['feedQuery']
                    })
                    form.resetFields()
                } catch (e) {
                    api.error({
                        message: 'Error creating reward'
                    })
                }
            }}
        >
            {contextHolder}
            <Flex gap="small">
                <Form.Item
                    name="issue_url"
                    rules={[
                        {
                            required: true,
                            message: 'Required field'
                        }
                    ]}
                >
                    <Input
                        placeholder="Issue url"
                    />
                </Form.Item>
                <Form.Item
                    name="amount"
                    rules={[
                        {
                            required: true,
                            message: 'Required field'
                        }
                    ]}
                >
                    <InputNumber
                        placeholder="amount"
                    />
                </Form.Item>
                <Button loading={isLoading} type="primary" htmlType="submit">Submit</Button>
            </Flex>
        </Form>
    )
}

export { CreateNewReward }