import { SERVER_URL } from '@/app/constant';
import axios from 'axios';
import { camelizeKeys } from 'humps';
import { GetMerchantInfoResponse } from './types';

export const getMerchantInfo = async () =>
  axios.get(SERVER_URL).then((res) => camelizeKeys(res.data) as GetMerchantInfoResponse);
