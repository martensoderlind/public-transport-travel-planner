export type StationType = {
  JourneyDetailRef: ObjectConstructor[];
  JourneyStatus: string;
  ProductAtStop: ObjectConstructor[];
  Product: ArrayConstructor[];
  name: string;
  type: string;
  stop: string;
  stopid: string;
  stopExtId: string;
  lon: number;
  lat: number;
  time: string;
  date: string;
  reachable: true;
  direction: string;
  directionFlag: string;
};

export type rawTrip = {
  Origin: Origin;
  Destination: Origin;
  ServiceDays: [
    {
      planningPeriodBegin: string;
      planningPeriodEnd: string;
      sDaysR: string;
      sDaysI: string;
      sDaysB: string;
    }
  ];
  LegList: {
    Leg: [
      {
        Origin: {
          name: string;
          type: string;
          id: string;
          extId: string;
          lon: number;
          lat: number;
          routeIdx: number;
          prognosisType: string;
          time: string;
          date: string;
          minimumChangeDuration: string;
        };
        Destination: {
          name: string;
          type: string;
          id: string;
          extId: string;
          lon: number;
          lat: number;
          routeIdx: number;
          prognosisType: string;
          time: string;
          date: string;
          minimumChangeDuration: string;
        };
        Notes: {
          Note: [
            {
              value: string;
              key: string;
              type: string;
              routeIdxFrom: number;
              routeIdxTo: number;
              txtN: string;
            }
          ];
        };
        JourneyDetailRef: {
          ref: string;
        };
        JourneyStatus: string;
        Product: [
          {
            icon: {
              res: string;
            };
            operatorInfo: {
              name: string;
              nameS: string;
              nameN: string;
              nameL: string;
              id: string;
            };
            name: string;
            internalName: string;
            displayNumber: string;
            num: string;
            line: string;
            lineId: string;
            catOut: string;
            catIn: string;
            catCode: string;
            cls: string;
            catOutS: string;
            catOutL: string;
            operatorCode: string;
            operator: string;
            admin: string;
            routeIdxFrom: number;
            routeIdxTo: number;
            matchId: string;
          }
        ];
        Stops: {
          Stop: Stop[];
        };
        JourneyDetail: {
          ref: string;
          dayOfOperation: string;
        };
        id: string;
        idx: number;
        name: string;
        number: string;
        category: string;
        type: string;
        reachable: boolean;
        waitingState: string;
        direction: string;
        directionFlag: string;
        duration: string;
      }
    ];
  };
  calculation: string;
  TripStatus: {
    hintCode: number;
  };
  idx: number;
  tripId: number;
  ctxRecon: string;
  duration: string;
  rtDuration: string;
  checksum: string;
};

export type Stop = {
  name: string;
  id: string;
  extId: string;
  routeIdx: number;
  lon: number;
  lat: number;
  arrTime: string;
  arrDate: string;
  minimumChangeDuration: string;
};
export type Origin = {
  name: string;
  type: string;
  id: string;
  extId: string;
  lon: number;
  lat: number;
  routeIdx: number;
  prognosisType: string;
  time: string;
  date: string;
  minimumChangeDuration: string;
};

export type Leg = {
  Origin: Origin;
  Destination: Origin;
  Notes: {
    Note: [
      {
        value: string;
        key: string;
        type: string;
        routeIdxFrom: number;
        routeIdxTo: number;
        txtN: string;
      }
    ];
  };
  JourneyDetailRef: {
    ref: string;
  };
  JourneyStatus: string;
  Product: [
    {
      icon: {
        res: string;
      };
      operatorInfo: {
        name: string;
        nameS: string;
        nameN: string;
        nameL: string;
        id: string;
      };
      name: string;
      internalName: string;
      displayNumber: string;
      num: string;
      line: string;
      lineId: string;
      catOut: string;
      catIn: string;
      catCode: string;
      cls: string;
      catOutS: string;
      catOutL: string;
      operatorCode: string;
      operator: string;
      admin: string;
      routeIdxFrom: number;
      routeIdxTo: number;
      matchId: string;
    }
  ];
  Stops: {
    Stop: Stop[];
  };
  JourneyDetail: {
    ref: string;
    dayOfOperation: string;
  };
  id: string;
  idx: number;
  name: string;
  number: string;
  category: string;
  type: string;
  reachable: boolean;
  waitingState: string;
  direction: string;
  directionFlag: string;
  duration: string;
};

export type OriginStation = {
  depDate: string;
  depDir: string;
  depTime: string;
  extId: string;
  id: string;
  lat: number;
  lon: number;
  minimumChangeDuration: string;
  name: string;
  routeIdx: number;
};
