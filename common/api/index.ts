export class HttpClient {
    _baseURL: string;
    _headers: any
    constructor(options: any = {}) {
        this._baseURL = options.baseURL || "";
        this._headers = options.headers || {};
    }
    setHeader(key: string, value: string) {
        this._headers[key] = value;
        return this;
    }

    async _fetchJSON(endpoint: string, options: any = {}) {
        const res = await fetch(this._baseURL + endpoint, {
            ...options,
            headers: this._headers
        });

        if (!res.ok) throw new Error(res.statusText);

        if (options.parseResponse !== false && res.status !== 204)
            return res.json();

        return undefined;
    }

    get(endpoint:string, options = {}) {
        return this._fetchJSON(
          endpoint, 
          { 
            ...options, 
            method: 'GET' 
          }
        )
      }
      
      post(endpoint:string, body:any, options = {}) {
        return this._fetchJSON(
          endpoint, 
          {
            ...options, 
            body: JSON.stringify(body), 
            method: 'POST' 
          }
        )
      }
      
      delete(endpoint:string, options = {}) {
        return this._fetchJSON(
          endpoint, 
          {
            parseResponse: false,
            ...options, 
            method: 'DELETE' 
          }
        )
      }
}