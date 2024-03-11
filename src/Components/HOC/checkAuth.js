
const checkAuth = (Todo) => {
    return (props) => {
        const token = localStorage.getItem('token')
        if (token) {
            return <Todo {...props} token={token}/>
        } else {
            <p>Please log in to access this content.</p>
        }
    }
}
export default checkAuth