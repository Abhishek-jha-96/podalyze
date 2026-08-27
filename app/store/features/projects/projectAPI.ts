import { createApi } from "@reduxjs/toolkit/query/react";
import type { DashboardMetrics, Project } from "~/constants/interfaces";
import { baseQueryWithAuth } from "~/store/baseQuery";

interface CreateProjectInput {
  title: string;
  url: string;
  hostPopularity: number;
  guestPopularity: number;
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
  tagTypes: ["Project", "Dashboard"],
  endpoints: (builder) => ({
    createProject: builder.mutation<CreateProjectResponse, CreateProjectInput>({
      query: (data) => ({
        url: "/project",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Project", "Dashboard"],
    }),

    fetchProjects: builder.query<Project[], void>({
      query: () => ({
        url: "/project",
        method: "GET",
      }),
      providesTags: ["Project"],
    }),

    fetchDashboard: builder.query<DashboardMetrics, void>({
      query: () => ({
        url: "/dashboard",
        method: "GET",
      }),
      providesTags: ["Dashboard"],
    }),
  }),
});


export const { useCreateProjectMutation, useFetchDashboardQuery } = projectAPI;
