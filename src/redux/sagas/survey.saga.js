import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker saga: will be fired on "CREATE_PREFERENCE"
function* createPreference(action) {
    console.log('in createPreference saga');
    // check payload
    console.log('preference saga payload', action.payload);

    try{
        yield axios.post('/api/survey', action.payload);

        // TODO:
        // will fetch after posting. no fetch function yet
        // coming back to here to send this to reducer
        // then on survey page load, I bring data from reducer
        // to avoid using useState to set default value

    } catch (error) {
        console.log('Error creating preferences', error);
    }
} // end function createPreference

function* fetchPreference(action) {
    try {
        const preference = yield axios.get('/api/survey');
        //console.log('fetch preference ****', preference.data.array_agg);
        const preferenceObj = {
            transparency: preference.data.array_agg[0],
            environmental: preference.data.array_agg[1],
            humanRights: preference.data.array_agg[2]
        }
        console.log('this is payload for put', preferenceObj);
        
        yield put({type: 'SET_PREFERENCE', payload: preferenceObj})
        
    } catch (error){
        console.log('Error fetching preference', error);
    }
} // end function fetch preference

// watch for functions
function* surveySaga() {
    yield takeLatest('CREATE_PREFERENCE', createPreference);
    yield takeLatest ('FETCH_PREFERENCE', fetchPreference)

}

export default surveySaga