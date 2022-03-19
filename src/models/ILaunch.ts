export interface ILaunch {
    "fairings"?: string | null;
    "links"?: {
        "patch": {
            "small": string | null;
            "large": string | null;
        };
        "reddit": {
            "campaign": string | null;
            "launch": string | null;
            "media": string | null;
            "recovery": string | null;
        };
        "flickr": {
            "small": string[];
            "original": string[];
        };
        "presskit": string | null;
        "webcast": string | null;
        "youtube_id": string | null;
        "article": string | null;
        "wikipedia": string | null;
    };
    "static_fire_date_utc": string | null;
    "static_fire_date_unix": number | null;
    "tdb": boolean | null;
    "net": boolean | null;
    "window": number | null;
    "rocket": string | null;
    "success": boolean | null;
    "failures": string[];
    "details": string | null;
    "crew": string[];
    "ships": string[];
    "capsules": string[];
    "payloads": string[];
    "launchpad": string | null;
    "auto_update": boolean | null;
    "flight_number": number | null;
    "name": string | null;
    "date_utc": string | null;
    "date_unix": number | null;
    "date_local": string | null;
    "date_precision": string | null;
    "upcoming": boolean;
    "cores": ICore[];
    "id": string;
}

interface ICore {
    "core": string | null;
    "flight": number | null;
    "gridfins": boolean | null;
    "legs": boolean | null;
    "reused": boolean | null;
    "landing_attempt": boolean | null;
    "landing_success": boolean | null;
    "landing_type": string | null;
    "landpad": string | null;
}