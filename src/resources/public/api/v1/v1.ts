// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as HeatmapAPI from './heatmap/heatmap';
import {
  Heatmap,
  HeatmapCreateHeatmapParams,
  HeatmapCreateHeatmapResponse,
  HeatmapListHeatmapsParams,
  HeatmapListHeatmapsResponse,
  HeatmapRetrieveHeatmapCompetitorsResponse,
  HeatmapRetrieveHeatmapPointParams,
  HeatmapRetrieveHeatmapPointResponse,
  HeatmapRetrieveHeatmapResponse,
} from './heatmap/heatmap';

export class V1 extends APIResource {
  heatmap: HeatmapAPI.Heatmap = new HeatmapAPI.Heatmap(this._client);
}

V1.Heatmap = Heatmap;

export declare namespace V1 {
  export {
    Heatmap as Heatmap,
    type HeatmapCreateHeatmapResponse as HeatmapCreateHeatmapResponse,
    type HeatmapListHeatmapsResponse as HeatmapListHeatmapsResponse,
    type HeatmapRetrieveHeatmapResponse as HeatmapRetrieveHeatmapResponse,
    type HeatmapRetrieveHeatmapCompetitorsResponse as HeatmapRetrieveHeatmapCompetitorsResponse,
    type HeatmapRetrieveHeatmapPointResponse as HeatmapRetrieveHeatmapPointResponse,
    type HeatmapRetrieveHeatmapPointParams as HeatmapRetrieveHeatmapPointParams,
    type HeatmapListHeatmapsParams as HeatmapListHeatmapsParams,
    type HeatmapCreateHeatmapParams as HeatmapCreateHeatmapParams,
  };
}
