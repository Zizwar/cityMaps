import "https://deno.land/x/dotenv/load.ts";
import { Response, RouteParams, Request } from "https://deno.land/x/oak/mod.ts";
import api from "https://deno.land/x/api/index.ts";

import listsCitySa from "../db/cities.ts";

const key = Deno.env.get("KEY_GOOGLE_MAPS") || "XXXXXXXXXXXXXXXXXXXXXX";

const apiLatLng: any = ({ lat, lng }: { lat: number; lng: number }): string =>
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&sensor=false&key=${key}&language=en`;

const apiAddress: any = ({
    address,
    language,
}: {
    address: string;
    contry: string;
    language: string;
}): string =>
    `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${key}&region=sa&language=${
    language || "ar"
    }`;

const apiList: any = ({ address }: { address: string }): string =>
    `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${key}&region=sa&language=ar`;

//
export const latlng = async ({
    params,
    response,
}: {
    params: RouteParams;
    response: Response;
}) => {
    const { id } = params;
    const [lat, lng]: any = id?.split(",");
    if (!lat || !lng) {
        response.body = { err: "!!! lat or lng " };
        return;
    }
    const link = apiLatLng({ lat, lng });
    const res = await api.get(link);
    const city = getCityFromLocation(res);
    response.body = city;
};
///

////////
export const address = async ({
    params,
    response,
}: {
    params: RouteParams;
    response: Response;
}) =>
    (response.body = getCityFromAddress(await api.get(apiAddress(params))) || {
        err: "error load maps ",
    });
//   
export const lists = async ({
    request,
    response,
}: {
    request: Request;
    response: Response;
}) => {
    const body = await request.body();
    // console.log({body})
    const listsCity: any = body.value;
    const listsCityMaps = listsCity.map(({ title_ar }: { title_ar: string }) =>
        api.get(apiList({ address: title_ar }))
    );
    const resmapAsync = await Promise.all(listsCityMaps);

    const allRes: any = [];
    const mixArray = (a: any, b: any, {lat:latitude,lng:longitude}:any): any => {
        a.google_place_id = b;
        a.different = !(b === a.title_ar);
        a.latitude = latitude;
        a.longitude = longitude;
        return a
    }
    resmapAsync.forEach((param: any, index: number) =>
        allRes.push(mixArray(listsCity[index], getCityFromAddress(param),getLocationFromAddress(param))));

    response.body = allRes || [];
    response.status = 200;
};

//
const getCityFromAddress = ({ results: [result] }: { results: any }): any | null =>
    result?.address_components.find(
        ({ long_name, types }: { long_name: string; types: any }): any | null =>
            (types.includes("administrative_area_level_2") ||
                types.includes("locality")))?.long_name;

const getLocationFromAddress = ({ results: [result] }: { results: any }): any | [] =>
    result?.geometry?.location
//

const getCityFromLocation = (res: any): any => {
    //code js old school
    const {
        results: [locationDataT, locationData],
    } = res;
    let city: any;
    // if (locationDataT) {
    //formatted address
    console.log(locationData?.formatted_address);
    //find country name
    for (let i = 0; i < locationData?.address_components.length || 0; i++) {
        for (let b = 0; b < locationData?.address_components[i].types.length; b++) {
            if (
                locationData?.address_components[i]?.types[b] ==
                "administrative_area_level_1"
            ) {
                //this is the object you are looking for
                city = locationData?.address_components[i];
                break;
            }
        }
    }
    //city data || اسم المنطقة الادارية  او الريجون
    console.log(
        "اسم الريجون أو المنطقة الادارية :  " +
        city.short_name +
        " | " +
        city.long_name
    );
    for (let i = 0; i < locationData?.address_components.length || 0; i++) {
        for (
            let b = 0;
            b < locationData?.address_components[i]?.types.length;
            b++
        ) {
            if (
                locationData?.address_components[i]?.types[b] ==
                "administrative_area_level_2"
            ) {
                //this is the object you are looking for
                city = locationData?.address_components[i];
                break;
            }
        }
    }
    //city data || اسم المدينة اللي فيها
    console.log("اسم المدينة:  " + city.short_name + " | " + city.long_name);
    return city || res;
    //   }
};
