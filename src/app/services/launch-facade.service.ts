import { LaunchListState } from "./../store/reducers/launch-list.reducer";
import { map } from "rxjs/operators";
import { PastLaunchesListGQL } from "./spacexGraphql.service";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { loadLaunchList } from "../store/actions";
import * as launchListQuery from "../store/selectors";
import { loadLaunchDetail } from "../store/actions/launch.detail.action";
import { getLaunchDetail } from "../store/selectors/launch-detail.selector";
import { LaunchDetailState } from "../store";

@Injectable({
  providedIn: "root"
})
export class LaunchFacadeService {
  launchListState$ = this.store.select(launchListQuery.getLaunchListState);
  launchList$ = this.store.select(launchListQuery.getLaunchList);
  launchListLoaded$ = this.store.select(launchListQuery.getLaunchListLoaded);
  launchListLoading$ = this.store.select(launchListQuery.getLaunchListLoading);
  launchDetail$ = this.storeDetail.select(getLaunchDetail);

  constructor(
    private readonly store: Store<LaunchListState>,
    private readonly storeDetail: Store<LaunchDetailState>,
    private readonly pastLaunchesService: PastLaunchesListGQL
  ) {}

  pastLaunchListStoreCache() {
    this.store.dispatch(loadLaunchList());
    console.log("launchList",this.launchList$);
    return this.launchList$;
  }
  
  pastLaunchDetailStoreCache(id){
    this.store.dispatch(loadLaunchDetail({id: id}));
    console.log(this.launchDetail$);
  return this.launchDetail$;
  }

  pastLaunchListFacade() {
    return this.pastLaunchesService
      .fetch({ limit: 30 })
      .pipe(map(res => res.data.launchesPast));
  }

}
