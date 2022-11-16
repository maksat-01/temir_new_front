export const userId = (pesponse: any) => {
  localStorage.setItem("userId", JSON.stringify(pesponse.data.profile.id));
};

export const paramsUserId = (id: any) => {
  localStorage.setItem("paramsUserId", JSON.stringify(id));
};

export const getIdUserParams = () => {
  return JSON.parse(localStorage.getItem("paramsUserId") as any);
};
