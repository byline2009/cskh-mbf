const API_URL = process.env.NEXTAUTH_APP_API_URL_SSL;
const CHECK_PACKAGE_URL = `${API_URL}/website/package`;
const CHECK_TYPE_URL = `${API_URL}/website/type`;



export const getSearchTypeSubscriber = async (e) => {

  const response = await fetch(`${CHECK_TYPE_URL}?isdn=${e}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate: 10 },
  });
  const responseBody = await response.json();
  return responseBody;
};

