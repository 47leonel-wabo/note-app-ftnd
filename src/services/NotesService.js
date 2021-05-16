import httpClient from "../http-commons";

const allNotes = () => {
  return httpClient.get("/notes");
};

const addNote = (data) => {
  return httpClient.post("/notes", data);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { allNotes, addNote };
