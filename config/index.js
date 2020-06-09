export default {
  api: {
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    timeout: process.env.NEXT_PUBLIC_API_TIMEOUT,
    mock: process.env.NEXT_PUBLIC_MOCK_API === "true",
    mockError:
      process.env.NEXT_PUBLIC_MOCK_API_RETURN_ERROR === "true" &&
      process.env.NEXT_PUBLIC_MOCK_API === "true",
  },
};
