const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

type RequestOptions = {
  method?: string;
  headers?: HeadersInit;
  body?: any;
};

const customFetch = async (endpoint: string, options: RequestOptions = {}) => {
  const defaultHeaders = {
    'Content-Type': 'application/json',
  };

  const config: RequestInit = {
    method: options.method || 'GET',
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
    ...(options.body && { body: JSON.stringify(options.body) }),
  };

  try {
    const response = await fetch(`${API_URL}${endpoint}`, config);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return { data, status: response.status };
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

export const api = {
  get: (endpoint: string, options: RequestOptions = {}) => 
    customFetch(endpoint, { ...options, method: 'GET' }),
    
  post: (endpoint: string, data: any, options: RequestOptions = {}) =>
    customFetch(endpoint, { ...options, method: 'POST', body: data }),
    
  put: (endpoint: string, data: any, options: RequestOptions = {}) =>
    customFetch(endpoint, { ...options, method: 'PUT', body: data }),
    
  delete: (endpoint: string, options: RequestOptions = {}) =>
    customFetch(endpoint, { ...options, method: 'DELETE' }),
};

export default api;
