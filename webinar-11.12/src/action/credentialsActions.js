export const CHANGE_NAME = 'CHANGE_NAME'; 

/* New name is object */
export const changeNameAction = (newName) => ({
    type: CHANGE_NAME,
    payload: newName
})