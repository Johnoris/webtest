import axios, { AxiosInstance } from "axios";
export const baseURL = process.env.REACT_APP_API_URL;

const axiosConfig = {
	withCredentials: false,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	}
}

const axiosClient:AxiosInstance = axios.create(axiosConfig);

class ServiceApi {
	public url = baseURL;

	appendToURL(url: string) {
		return `${this.url}${url}`;
	}


	async post (url: string, query: any) {
		try{
			const response = await axiosClient.post(
				this.appendToURL(url), {query}
			)
			return response
		}
		catch(err:any){
			return err
		}
	}


	
	isSuccessful(response: any): boolean {
		const codes = [200, 201, 202, 204];
		return codes.includes(
		  response?.status || response?.statusCode || response?.code
		)
		  ? true
		  : false;
	}
}
// eslint-disable-next-line 
export default new ServiceApi();