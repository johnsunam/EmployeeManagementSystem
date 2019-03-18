import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { OrganizationReducer } from './reducers/organizationReducer';
import { SelectedOrgReducer } from './reducers/selectedOrgReducer';
import { UserReducer } from './reducers/userReducer';
import { SelectedUserReducer } from './reducers/selectedUserReducer';
import { AcademicReducer } from './reducers/academicReducer';
import { ExperienceReducer } from './reducers/experienceReducer';

export const initStore = (initialState = {}) => {
    const reducers = combineReducers({
      organizations: OrganizationReducer,
      organization: SelectedOrgReducer,
      users: UserReducer,
      user: SelectedUserReducer,
      academics: AcademicReducer,
      experiences: ExperienceReducer
    });

    let env = process.env.NODE_ENV || 'development';
    if (typeof window !== 'undefined' && env === 'development') {
        return createStore(
          reducers,
          initialState,
          composeWithDevTools(applyMiddleware(thunkMiddleware))
        )
    }
    return createStore(reducers, initialState, applyMiddleware(thunkMiddleware))
}
