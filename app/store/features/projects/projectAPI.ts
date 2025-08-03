import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "~/store/baseQuery";

interface CreateProjectInput {
  title: string;
  url: string;
}

interface CreateProjectResponse {
  id: string;
  title: string;
  url: string;
}

export const projectAPI = createApi({
  reducerPath: "projectAPI",
  baseQuery: baseQueryWithAuth,
  endpoints: (builder) => ({
    createProject: builder.mutation<CreateProjectResponse, CreateProjectInput>({
      query: (data) => ({
        url: "/project",
        method: "POST",
        body: data,
      }),
    }),
  }),
});


export const { useCreateProjectMutation } = projectAPI;
