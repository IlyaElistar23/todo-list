import { Input, Button, ConfigProvider } from 'antd'
import { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid'
import withLogger from './HOC/withLogger';
import axios from 'axios';

const AddTodo = ({ todos, setTodos, config, addMessage }) => {
    const [todoTitle, setTodoTitle] = useState('')
    const fetchAdd = async (todo, headers) => {
        try {
            const response = await axios.post('https://todo-redev.herokuapp.com/api/todos', todo, headers)
            console.log('Таска создана: ', response.data);
        } catch (error) {
            console.log('Ошибка!', error.response.data.message);
        }
    }

    const addTodo = () => {
        const todo = {
            title: todoTitle,
        }
        setTodos([...todos, todo])
        fetchAdd({
            title: todo.title
        }, config)
        setTodoTitle('')
        addMessage(todoTitle)
    }

    const disabledButton = () => {
        if (todoTitle.length === 0 || todoTitle.trim().length !== todoTitle.length) {
            return true
        }
    }

    return (
        <div className='add-todo'>
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
                    size='large'
                    style={{
                        width: 500,
                    }}
                    placeholder='Enter your task'
                    value={todoTitle}
                    onChange={(event) => setTodoTitle(event.target.value)}
                    onPressEnter={() => {
                        addTodo()
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
                        colorBgContainerDisabled: '#892ad6'
                    },
                    components: {
                        Button: {
                            defaultHoverBorderColor: '#892ad6',
                            defaultHoverColor: 'white',
                            colorTextDisabled: '#aaaaaa',
                            contentFontSizeLG: 24
                        }
                    }
                }}
            >
                <Button
                    onClick={() => addTodo()}
                    size='large'
                    disabled={disabledButton()}
                >Add task</Button>
            </ConfigProvider>
        </div>
    )
}

export default withLogger(AddTodo);