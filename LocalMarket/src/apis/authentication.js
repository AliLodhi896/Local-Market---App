import { BaseUrl } from "../constant/BaseUrl";

export const send_otp = async (mobile_no,role,otp) => {
  try {
    let base_url = `${BaseUrl}authentication/update_otp`;
    var formData = new FormData();
    formData.append("otp", otp);
    formData.append("role_id", role);
    formData.append("mobile_number", mobile_no);
    const response = await fetch(base_url, {
      method: 'POST',
      body: formData,
    });
    const responseData = await response.json();
    console.log('responseData',responseData)
    return responseData;
  } catch (error) {
    throw new Error(error.message);
  }
};

