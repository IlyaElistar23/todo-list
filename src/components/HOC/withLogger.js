import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { addMessageToDrawerList } from '../../redux/actions/drawerListAction'

const withLogger = (Component) => {
    return () => {

        const dispatch = useDispatch()
        const { messages } = useSelector(state => state.drawerList)
        const correctDate = (date) => {
            const hours = date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`
            const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`
            const seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : `${date.getSeconds()}`
            return `${hours}:${minutes}:${seconds}`
        }

        const addMessage = (title) => {

            const message = `${correctDate(new Date())}: Добавлена запись: ${title}`

            console.log(`${message}`);
            dispatch(addMessageToDrawerList(message))
        }
        const toggleMessage = (title) => {

            const message = `${correctDate(new Date())}: Выполнена запись: ${title}`

            console.log(message);
            dispatch(addMessageToDrawerList(message))
        }
        const editMessage = (title) => {

            const message = `${correctDate(new Date())}: Изменена запись: ${title}`

            console.log(message);
            dispatch(addMessageToDrawerList(message))
        }
        const editingMessage = (title) => {

            const message = `${correctDate(new Date())}: Редактируется запись: ${title}`

            console.log(message);
            dispatch(addMessageToDrawerList(message))
        }
        const removeMessage = (title) => {

            const message = `${correctDate(new Date())}: Удалена запись: ${title}`

            console.log(message);
            dispatch(addMessageToDrawerList(message))
        }
        const activateMessage = (title) => {

            const message = `${correctDate(new Date())}: Активна запись: ${title}`

            console.log(message);
            dispatch(addMessageToDrawerList(message))
        }

        useEffect(() => {
            localStorage.setItem('messages', JSON.stringify(messages))
        }, [messages])

        // const clearStorage = () => {
        //     setMessages([])
        // }

        return <Component
            messages={messages}
            addMessage={addMessage}
            toggleMessage={toggleMessage}
            editMessage={editMessage}
            editingMessage={editingMessage}
            removeMessage={removeMessage}
            activateMessage={activateMessage}
        />
    }
}

export default withLogger;