import { AxiosError } from 'axios';

const useError = (error: unknown): string => {
  if (error instanceof AxiosError) {
    return error.response?.data?.message;
  } else if (error instanceof Error) {
    return error.message;
  } else {
    return 'Something wrong!';
  }
};

export { useError };
