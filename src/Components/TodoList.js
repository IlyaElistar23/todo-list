import { Input, Button, Typography, Checkbox, List, ConfigProvider, Flex } from 'antd'
import { useState } from 'react';
import { DeleteFilled, EditFilled, SaveFilled } from '@ant-design/icons'
import withLogger from './HOC/withLogger'

const TodoList = ({ todos, setTodos, toggleMessage, editMessage, removeMessage, activateMessage, editingMessage, messages, clearStorage }) => {
    const [edit, setEdit] = useState(null)
    const [editText, setEditText] = useState('')
    const { Item } = List;
    const { Text } = Typography;

    const disabledSaveButton = () => {
        if (editText.length === 0 || editText.trim().length !== editText.length) {
            return true
        }
    }

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    const toggleTodo = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }

    const editTodo = (id, title) => {
        setEdit(id)
        setEditText(title)
    }

    const saveTodo = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, title: editText} : todo))
        setEdit(null)
    }

    const consoleMessages = () => {
        messages.forEach(message => {
            console.log(message);
        })
    }
    return (
        <>
            <Flex justify='center' align='center'>
                <List size='large'>
                    {
                        todos.map(todo => (
                            <Item key={todo.id}>
                                {
                                    edit === todo.id ?
                                        <div className='edit-todo'>
                                            <ConfigProvider
                                                theme={{
                                                    token: {
                                                        borderRadius: 0,
                                                        lineWidth: 2,
                                                        colorBorder: '#892ad6',
                                                        colorBgContainer: '#21152b',
                                                        colorText: 'white',
                                                        colorTextPlaceholder: '#aaaaaa',
                                                        controlHeightLG: 60,
                                                        fontSize: 22,
                                                    },
                                                    components: {
                                                        Input: {
                                                            activeShadow: '#892ad6',
                                                            activeBorderColor: '#892ad6',
                                                            hoverBorderColor: '#892ad6',
                                                            hoverBg: '#21152b',
                                                        }
                                                    }
                                                }}
                                            >
                                                <Input
                                                    value={editText}
                                                    onChange={(event) => setEditText(event.target.value)}
                                                    size='large'
                                                    onPressEnter={() => {
                                                        saveTodo(todo.id)
                                                        editMessage(todo.title)
                                                    }}
                                                />
                                            </ConfigProvider>
                                            <ConfigProvider
                                                theme={{
                                                    token: {
                                                        borderRadius: 0,
                                                        lineWidth: 2,
                                                        colorBorder: '#892ad6',
                                                        colorBgContainer: '#892ad6',
                                                        colorText: 'white',
                                                        controlHeightLG: 60,
                                                    },
                                                    components: {
                                                        Button: {
                                                            defaultColor: 'white',
                                                            defaultHoverBorderColor: '#892ad6',
                                                            defaultHoverColor: '#21152b',
                                                            defaultHoverBg: '#892ad6',
                                                            defaultBg: '#892ad6',
                                                            defaultBorderColor: '#892ad6',
                                                            onlyIconSize: 24
                                                        }
                                                    }
                                                }}
                                            >
                                                <Button
                                                    onClick={() => {
                                                        saveTodo(todo.id)
                                                        editMessage(todo.title)
                                                    }}
                                                    disabled={disabledSaveButton()}
                                                    size='large'
                                                    icon={<SaveFilled />}></Button>
                                            </ConfigProvider>
                                        </div>
                                        :
                                        <div className='todo-item'>
                                            <ConfigProvider
                                                theme={{
                                                    token: {
                                                        colorText: 'white',
                                                        fontSize: 24,
                                                        colorBgContainer: '#892ad6',
                                                        colorBorder: '#892ad6',
                                                        colorPrimaryHover: '#892ad6',
                                                        colorPrimaryBorder: '#892ad6',
                                                        colorPrimary: '#892ad6'
                                                    }
                                                }}
                                            >
                                                <Checkbox
                                                    checked={todo.completed}
                                                    type='text'
                                                    onClick={() => {
                                                        toggleTodo(todo.id)
                                                        if (todo.completed) {
                                                            toggleMessage(todo.title)
                                                        } else {
                                                            activateMessage(todo.title)
                                                        }
                                                    }}
                                                >
                                                    <Text
                                                        delete={todo.completed}
                                                    >
                                                        {todo.title}
                                                    </Text>
                                                </Checkbox>
                                            </ConfigProvider>
                                            <ConfigProvider
                                                theme={{
                                                    components: {
                                                        Button: {
                                                            defaultColor: 'white',
                                                            defaultHoverBorderColor: '#892ad6',
                                                            defaultHoverColor: '#21152b',
                                                            defaultHoverBg: '#892ad6',
                                                            defaultBg: '#892ad6',
                                                            defaultBorderColor: '#892ad6',
                                                            onlyIconSize: 24
                                                        }
                                                    }
                                                }}
                                            >
                                                <div className='edit-buttons'>
                                                    <Button
                                                        onClick={() => {
                                                            editTodo(todo.id, todo.title)
                                                            editingMessage(todo.title)
                                                        }}
                                                        icon={<EditFilled />}
                                                    >
                                                    </Button>
                                                    <Button
                                                        onClick={() => {
                                                            removeTodo(todo.id)
                                                            removeMessage(todo.title)
                                                        }}
                                                        icon={<DeleteFilled />}
                                                    >
                                                    </Button>
                                                </div>
                                            </ConfigProvider>
                                        </div>
                                }
                            </Item>
                        )
                        )
                    }
                </List>
            </Flex>
            <ConfigProvider
                theme={{
                    token: {
                        colorLink: 'white',
                        fontSize: 24,
                        margin: 40
                    }
                }}
            >
                <Button className='console' type='link' onClick={() => consoleMessages()}>Console History</Button>
                <Button className='console' type='link' onClick={() => clearStorage()}>Clear History</Button>
            </ConfigProvider>
        </>
    )
}

export default withLogger(TodoList);