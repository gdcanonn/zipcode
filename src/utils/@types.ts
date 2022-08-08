export type ZipCode = {
  country_code: string
  zipcode: string
  place: string
  state: string
  state_code: string
  province: string
  province_code: string
  community: string
  community_code: string
  latitude: string
  longitude: string
}

export enum ErrorType {
  SUCCESS,
  WARNING,
  ERROR,
  INFO
}

export type Message = {
  type: ErrorType,
  message: string
}