export default (state, action) => {
    switch (action.type) {
        case 'JOINED':
            return {
                ...state,
                joined: true,
                userName: action.payload.userName,
                room: action.payload.room,
            };
        default:
            return state;
    }
};
