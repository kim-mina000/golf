import axiosInstance from "./axiosInstance";
import { API } from "./endpoints";

// 강사 목록
export const fetchInstructors = () => {
  return axiosInstance.get(API.getInstructors);
};

// 강사 상세
export const fetchInstructorById = (id) => {
  return axiosInstance.get(API.getInstructorById(id));
};

// 레슨 목록
export const fetchLessons = () => {
  return axiosInstance.get(API.getLessons);
};

// 레슨 상세
export const fetchLessonById = (id) => {
  return axiosInstance.get(API.getLessonById(id));
};

// 슬라이드 상세
export const fetchSlideById = (id) => {
  return axiosInstance.get(API.getSlideById(id));
};
