import { createApi } from "@reduxjs/toolkit/query/react";
import type { Project } from "~/constants/interfaces";
import { baseQueryWithAuth } from "~/store/baseQuery";

interface CreateProjectInput {
  title: string;
  url: string;
  hostPopul: number;
  guestPopul: number;
  numberOfAds: number;
}

interface CreateProjectResponse {
  id: string;
  title: string;
  url: string;
}

export const projectAPI = createApi({
  reducerPath: "projectAPI",
  baseQuery: baseQueryWithAuth,
  tagTypes: ["Project"],
  endpoints: (builder) => ({
    createProject: builder.mutation<CreateProjectResponse, CreateProjectInput>({
      query: (data) => ({
        url: "/project",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Project"],
    }),

    fetchProjects: builder.query<Project[], void>({
      query: () => ({
        url: "/project",
        method: "GET",
      }),
      providesTags: ["Project"],
    }),
  }),
});


export const { useCreateProjectMutation } = projectAPI;
