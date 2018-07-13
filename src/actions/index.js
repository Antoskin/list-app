export function increment() {
    return {
        type: 'INC'
    }
}

export function decrement() {
    return {
        type: 'DEC'
    }
}

export function deleteArticle(id) {
    return {
        type: 'DEL',
        payload: {id}
    }
}

export function selectFilter(id) {
    return {
        type: 'FILL',
        payload: {id}
    }
}