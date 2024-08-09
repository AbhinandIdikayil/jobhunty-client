

export const handleTokenError = (error: any) => {
    if (error.response?.status === 401) {
      // Handle token expired or missing token
      return 'Token';
    }
    if (error.response?.status === 403) {
      // Handle token expired or missing token
      return 'blocked';
    }
    return error.response?.data || 'An error occurred';
  };