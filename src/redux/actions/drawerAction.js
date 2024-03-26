export const DRAWER_OPEN = 'DRAWER_OPEN'

export const drawerAction = (onOpen) => {
    return {
        type: DRAWER_OPEN,
        payload: onOpen
    }
}