export const EDIT_TITLE = 'EDIT_TITLE'

export const editForm = (editTitle) => {
    return {
        type: EDIT_TITLE,
        payload: editTitle
    }
}
