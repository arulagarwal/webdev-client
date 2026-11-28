"use client";

import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import {
  emptyCourse,
  useCoursesStore,
  type Course,
} from "../store/coursesStore";
import { useAccountContext } from "../account/AccountContext";
import * as client from "../courses/client";

export default function Dashboard() {
  const courses = useCoursesStore((state) => state.courses);
  const setCourses = useCoursesStore((state) => state.setCourses);
  const [course, setCourse] = useState<Course>(emptyCourse);
  const [enrolledIds, setEnrolledIds] = useState<string[]>([]);
  const { currentUser } = useAccountContext();

  const reload = async () => {
    setCourses(await client.fetchAllCourses());
    const mine = await client.findMyCourses();
    setEnrolledIds(mine.map((item) => item._id));
  };

  useEffect(() => {
    reload();
  }, [currentUser]);

  const onAddCourse = async () => {
    await client.createCourse(course);
    await reload();
  };

  const onUpdateCourse = async () => {
    await client.updateCourse(course);
    await reload();
  };

  const onDeleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    await reload();
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h5 className="flex flex-wrap items-center gap-2">
        New Course
        <button
          type="button"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
          id="wd-add-new-course-click"
          onClick={onAddCourse}
        >
          Add
        </button>
        <button
          type="button"
          className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
          id="wd-update-course-click"
          onClick={onUpdateCourse}
        >
          Update
        </button>
      </h5>
      <input
        className="mb-2 mt-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.name}
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
        id="wd-course-name"
      />
      <textarea
        className="mb-3 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        rows={3}
        value={course.description}
        onChange={(e) =>
          setCourse({ ...course, description: e.target.value })
        }
        id="wd-course-description"
      />
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        {courses.map((c) => (
          <CourseCard
            key={c._id}
            course={c}
            enrolledIds={enrolledIds}
            onChange={reload}
            onEdit={() => setCourse(c)}
            onDelete={() => onDeleteCourse(c._id)}
          />
        ))}
      </div>
    </div>
  );
}
