//TODO increase, decrease followers and following

export const CHANGE_STATS = 'CHANGE_STATS';

export const changeStats = (statsType, sum) => {
    return {
        type: CHANGE_STATS,
        payload: {statsType, sum}
    }
}