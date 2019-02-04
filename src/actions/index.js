export const toggle = ( visible, expanded, hidden ) => {
    return {
        type: 'TOGGLE',
        payload: {
            visible, expanded, hidden
        }
    };
};
