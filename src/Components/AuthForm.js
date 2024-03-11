import { useForm, Controller } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { Input, Button, Typography, Flex, ConfigProvider } from 'antd'
import axios from 'axios'

const AuthForm = () => {
    const {
        handleSubmit,
        control,
        formState: {
            errors
        },
        reset
    } = useForm({
        mode: 'onBlur'
    })

    const { Text } = Typography

    const navigate = useNavigate()

    const fetchAuth = async (data) => {
        try {
            const response = axios.post('https://todo-redev.herokuapp.com/api/auth/login', data)
            .then(response => localStorage.setItem('token', response.data.token))
        } catch (error) {
            console.log(error);
        }
    }

    const onSubmit = (data) => {
        console.log(data);
        fetchAuth(data)
        reset()
        navigate('/todo-list')
    }

    return (
        <div className='todo'>
            <form>
                <Flex vertical justify='center' align='center'>
                    <ConfigProvider
                        theme={{
                            token: {
                                colorText: 'white',
                                fontSize: 22,
                            }
                        }}
                    >
                        <Text className='label-auth'>email</Text>
                    </ConfigProvider>
                    <Controller
                        name='email'
                        control={control}
                        rules={{
                            required: 'Поле обязательно для заполнения'
                        }}
                        render={({ field }) => (
                            <ConfigProvider
                                theme={{
                                    token: {
                                        borderRadius: 0,
                                        lineWidth: 2,
                                        colorPrimary: '#892ad6',
                                        colorBorder: '#892ad6',
                                        colorBgContainer: '#21152b',
                                        colorText: 'white',
                                        colorTextPlaceholder: '#5c5c5c',
                                        controlHeightLG: 60,
                                        fontSize: 22,
                                    },
                                    components: {
                                        Input: {
                                            activeShadow: '#892ad6',
                                            activeBorderColor: '#892ad6',
                                            hoverBorderColor: '#892ad6',
                                            hoverBg: '#21152b',
                                            paddingBlock: 6,
                                        }
                                    }
                                }}
                            >
                                <Input style={{ width: 400 }} {...field} placeholder='example@example.com' />
                            </ConfigProvider>
                        )}
                    />
                    <ConfigProvider
                        theme={{
                            token: {
                                colorText: '#00b39b',
                                fontSize: 16
                            }
                        }}
                    >
                        <Text className='error-text'>{errors.email?.message}</Text>
                    </ConfigProvider>
                    <ConfigProvider
                        theme={{
                            token: {
                                colorText: 'white',
                                fontSize: 22,
                            }
                        }}
                    >
                        <Text className='label-auth'>password</Text>
                    </ConfigProvider>
                    <Controller
                        name='password'
                        control={control}
                        rules={{
                            required: 'Поле обязательно для заполнения'
                        }}
                        render={({ field }) => (
                            <ConfigProvider
                                theme={{
                                    token: {
                                        borderRadius: 0,
                                        lineWidth: 2,
                                        colorPrimary: '#892ad6',
                                        colorBorder: '#892ad6',
                                        colorBgContainer: '#21152b',
                                        colorText: 'white',
                                        colorTextPlaceholder: '#5c5c5c',
                                        controlHeightLG: 60,
                                        fontSize: 22,
                                    },
                                    components: {
                                        Input: {
                                            activeShadow: '#892ad6',
                                            activeBorderColor: '#892ad6',
                                            hoverBorderColor: '#892ad6',
                                            hoverBg: '#21152b',
                                            paddingBlock: 6
                                        }
                                    }
                                }}
                            >
                                <Input style={{ width: 400 }} {...field} placeholder='Example' />
                            </ConfigProvider>
                        )}
                    />
                    <ConfigProvider
                        theme={{
                            token: {
                                colorText: '#00b39b',
                                fontSize: 16
                            }
                        }}
                    >
                        <Text>{errors.password?.message}</Text>
                    </ConfigProvider>
                    <ConfigProvider
                        theme={{
                            token: {
                                borderRadius: 0,
                                lineWidth: 2,
                                colorBorder: '#892ad6',
                                colorBgContainer: '#892ad6',
                                colorText: 'white',
                                controlHeight: 45,
                                colorBgContainerDisabled: '#892ad6',
                                fontSize: 22,
                                colorPrimary: 'white'
                            },
                            components: {
                                Button: {
                                    colorTextDisabled: '#aaaaaa',
                                    defaultHoverBorderColor: 'white',
                                    defaultHoverColor: 'white'
                                }
                            }
                        }}
                    >
                        <Button className='login' htmlType='submit' onClick={handleSubmit(onSubmit)}>Log In</Button>
                    </ConfigProvider>
                </Flex>
            </form>
            <ConfigProvider
                theme={{
                    token: {
                        colorText: 'white',
                        fontSize: 22,
                        colorLink: 'white'
                    }
                }}
            >
                <Text>
                    Don't have an account?
                    <Link to='/register'> <Text underline>Sign Up</Text></Link>
                </Text>
            </ConfigProvider>

        </div>
    )
}

export default AuthForm;