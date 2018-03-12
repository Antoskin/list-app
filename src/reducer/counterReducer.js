export default (count = 1, action) => {
    const {type} = action;
    switch(type) {
        case 'INC': return count + 1
        case 'DEC': return count -1
    }
    return count
};
