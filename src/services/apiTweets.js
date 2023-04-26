import ky from 'ky';

const BASE_URL = 'https://6445437db80f57f581b5a6bd.mockapi.io/api/v1/tweets/';

const userFetch = async page => {
  const res = await ky
    .get(BASE_URL, {
      searchParams: {
        page,
        limit: 3,
      },
    })
    .json();
  return res;
};

const toggleUser = async (id, following, followers) => {
  try {
    const res = await ky
      .put(`${BASE_URL}/${id}`, {
        json: {
          follow: following,
          followers: followers,
        },
      })
      .json();
    return res;
  } catch (e) {
    console.log(e.message);
  }
};

export { userFetch, toggleUser };
