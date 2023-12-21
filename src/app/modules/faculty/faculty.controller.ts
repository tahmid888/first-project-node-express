import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { FacultyServices } from './faculty.service';

// get single faculty
const getSingleFaculty = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await FacultyServices.getSingleFacultyFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty is retrieved successfully',
    data: result,
  });
});
// get all faculties
const getAllFaculties = catchAsync(async (req, res) => {
  console.log('test', req.user);
  const result = await FacultyServices.getAllFacultiesFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculties are retrieved successfully',
    data: result,
  });
});
// update
const updateFaculty = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { faculty } = req.body;
  const result = await FacultyServices.updateFacultyIntoDB(id, faculty);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty is updated succesfully',
    data: result,
  });
});
// delete
const deleteFaculty = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await FacultyServices.deleteFacultyFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty is deleted succesfully',
    data: result,
  });
});
export const FacultyControllers = {
  getSingleFaculty,
  getAllFaculties,
  updateFaculty,
  deleteFaculty,
};
