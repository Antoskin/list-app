import {articles as defArticles} from '../components/statji';

export default  (stater = defArticles, action) => {
    const {type, payload} = action
    switch (type) {
        case 'DEL': return stater.filter( st => payload.id != st.id );
    }
    return stater
}