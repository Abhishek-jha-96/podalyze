import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Project } from "~/constants/interfaces";


interface ProjectState {
    projects: Project[];
}

const initialState: ProjectState = {
    projects: [],
};

const projectSlice = createSlice({
    name: "project",
    initialState,
    reducers: {
        addProject: (state, action: PayloadAction<Project>) => {
            state.projects.push(action.payload);
        },
        addMultipleProjects: (state, action: PayloadAction<Project[]>) => {
            state.projects.push(...action.payload);
        },
        clearProjects: (state) => {
            state.projects = [];
        },
    },
});

export const { addProject, addMultipleProjects, clearProjects } = projectSlice.actions;

export default projectSlice.reducer;
