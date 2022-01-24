import { ActionReducerMap } from "@ngrx/store";
import * as fromLaunchList from "./launch-list.reducer";
import * as fromLaunchDetail from "./launch-detail.reducer";

export interface LaunchListState {
  launchList: fromLaunchList.LaunchListState;
}

export interface LaunchDetailState {
  launchDetail: fromLaunchDetail.LaunchDetailState;
}

interface AppState {
  launchList: LaunchListState;
  launchDetail: LaunchDetailState;
}

export const launchReducers: ActionReducerMap<AppState> = {
  launchList: fromLaunchList.reducer,
  launchDetail: fromLaunchDetail.reducer
};

// export const launchReducers: ActionReducerMap<LaunchListState, any> = {
//   launchList: fromLaunchList.reducer
// };

// export const launchDetailReducers: ActionReducerMap<LaunchDetailState, any> = {
//   launchDetail: fromLaunchDetail.reducer
// };
