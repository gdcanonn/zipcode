import { ZipCode } from 'utils/@types';
import api from './api';

export default class ZipCodeService {

  getInfo = async (code: string) => {
    const { data: zipCodes = [] } = await api.get<Array<ZipCode>>('/zipcodes.us.json');
    return zipCodes.find(zc => zc.zipcode === code)
  }

}