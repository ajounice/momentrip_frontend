import axios from "axios";
import { SERVER_API } from "../config";
import { SetSF } from "../Interface/ApiInterface";
const instance = axios.create({
  baseURL: `${SERVER_API}`,
  timeout: 3000,
});

const accessToken = window.localStorage.getItem('Token');

/**
 * getForms 숏폼 리스트 가져오는 API
 */
export async function getForms(){
  try{
    const response = await instance.get('/forms', {
      headers : {
        Authorization : `Bearer ${accessToken}`,
      },
    });

    if (response.status === 200) {
      const tmpData: Array<any> = response.data;
      tmpData.map((data, i) =>
        i === 0
          ? (tmpData[i] = { ...data, videoHidden: true, videoStop: false })
          : (tmpData[i] = { ...data, videoHidden: false, videoStop: true }),
      );
      return response.data;
    }
    return null;
  }
  catch (error) {
    console.error(error);
  }
}

/**
 * postFrom : 숏폼 저장하는 API
 */

export async function setForms(form:SetSF){
  try{
    const response = await instance.post('/forms', form,{
      headers : {
        Authorization : `Bearer ${accessToken}`,
      },
    });
    return response.data;
  }
  catch(error){
    console.log(error);
  }
}
