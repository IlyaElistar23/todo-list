import { useState, useEffect } from 'react'
import { ConfigProvider, Typography, Alert, Layout, Button } from 'antd'
import { UnorderedListOutlined, LogoutOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import AddTodo from './AddTodo'
import TodoList from './TodoList';
import checkAuth from './HOC/checkAuth';
import axios from 'axios';

const Todo = ({ token, alertWindow, showAlert }) => {

    const [todos, setTodos] = useState([])

    const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
    }

    const config = { headers }

    const { Header, Content, Footer } = Layout

    const fetchData = async () => {
        try {
            const response = await axios.get('https://todo-redev.herokuapp.com/api/todos', config)
            console.log('Данные получены: ', response.data);
            return response.data
        } catch (error) {
            console.log(error);
        }
    }
    const getTasks = async () => {
        const tasks = await fetchData()
        setTodos(tasks)
    }

    useEffect(() => {
        getTasks()
    }, [])

    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }

    const { Text } = Typography

    return (
        <Layout>
            <ConfigProvider
                theme={{
                    components: {
                        Layout: {
                            headerBg: '#21152b'
                        }
                    },
                    token: {
                        colorLink: 'white',
                        colorLinkActive: '#892ad6',
                        fontSize: 16
                    }
                }}
            >
                <Header className='header'>
                    <Button type='link' icon={<UnorderedListOutlined />}>History</Button>
                    <Button type='link' onClick={logout} icon={<LogoutOutlined />}>Log out</Button>
                </Header>
            </ConfigProvider>
            <Content>
                <div className='todo'>
                    {showAlert ?
                        <ConfigProvider
                            theme={{
                                token: {
                                    colorSuccessBg: '#21152b',
                                    colorSuccessBorder: '#21152b',
                                    colorText: 'white'
                                }
                            }}
                        >
                            <Alert
                                message='Выполнено!'
                                type='success'
                                description='Действие выполнено успешно.'
                                showIcon
                            />
                        </ConfigProvider> :
                        <ConfigProvider
                            theme={{
                                token: {
                                    colorSuccessBg: '#892ad6',
                                    colorSuccessBorder: '#892ad6',
                                    colorText: '#892ad6',
                                    colorSuccess: '#892ad6'
                                }
                            }}
                        >
                            <Alert
                                message='Выполнено!'
                                type='success'
                                description='Действие выполнено успешно.'
                                showIcon
                            />
                        </ConfigProvider>
                    }
                    <div className='todo-background'>
                        <ConfigProvider
                            theme={{
                                token: {
                                    colorText: 'white',
                                    fontSize: 36,
                                }
                            }}
                        >
                            <Text className='title'>Todo list</Text>
                        </ConfigProvider>
                        <div className='todo-list'>
                            <AddTodo
                                todos={todos}
                                setTodos={setTodos}
                                config={config}
                                alertWindow={alertWindow}
                            />
                            <TodoList
                                todos={todos}
                                setTodos={setTodos}
                                config={config}
                                alertWindow={alertWindow}
                            />
                        </div>
                    </div>
                </div>
            </Content>
            <ConfigProvider
                theme={{
                    components: {
                        Layout: {
                            footerBg: '#21152b'
                        }
                    },
                    token: {
                        colorText: 'white',
                        fontSize: 16
                    }
                }}
            >
                <Footer style={{
                    textAlign: 'center'
                }}>
                    Made by Elistar in 2024.
                </Footer>
            </ConfigProvider>
        </Layout>

    );
}


export default checkAuth(Todo)