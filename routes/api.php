<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/blah', function (Request $request) {
    return $request->user();
});
Route::post('login', 'UserController@login');
Route::get('user', 'UserController@getAll');
Route::get('user/unit/{unitId}', 'UserController@getByUnit');
Route::get('user/name/{name}', 'UserController@getByName');
Route::get('user/admin', 'UserController@getUserAdmins');
Route::post('user/admin', 'UserController@addUserAdmin');
Route::delete('user/admin/{empId}', 'UserController@deleteUserAdmin');
Route::get('user/{empId}', 'UserController@getUser');
Route::get('unit', 'UnitController@getAll');

Route::get('survey/page/{startFrom}', 'SurveyController@getSurveyList');
Route::post('survey', 'SurveyController@storeSurvey');
Route::patch('survey', 'SurveyController@updateSurvey');
Route::get('survey/select/', 'SurveyController@getSurveyForSelect');
Route::get('survey/{id}/', 'SurveyController@getSurvey');
Route::get('survey/{id}/emp/', 'SurveyController@getEmpOwnerSurvey');
Route::get('survey/{id}/unit/', 'SurveyController@getUnitOwnerSurvey');
Route::patch('survey/toggle/{srvId}', 'SurveyController@toggleSurvey')->where('srvId', '[0-9]+');
Route::get('survey/surveyor/answer/{surveyTrxUserId}/', 'SurveyController@getSurveyorAnswer');
Route::get('survey/summary/{surveyId}/{ownerType}/{ownerId}/{summaryType}/{validFrom}/{validUntil}', 'SurveyController@getSurveySummary');
Route::get('survey/surveyor/{surveyId?}/{unitId?}/{empId?}/{from?}/{until?}/', 'SurveyController@getSurveyorSurvey');
Route::get('survey/task/user/{surveyorId?}/{surveyId?}/{ownerName?}/{pagination?}', 'SurveyController@getSurveyTasks');
Route::get('survey/implementation/{surveyTrxUserId}', 'SurveyController@getSurveyImplementationDetail');
Route::patch('survey/implementation', 'SurveyController@updateSurveyImplementation');
Route::patch('survey/implementation/toggle/{surveyTrxId}', 'SurveyController@toggleSurveyImplementation');
Route::post('survey/implementation', 'SurveyController@storeSurveyImplementation');
Route::get('survey/task/{surveyTrxUserid}', 'SurveyController@getSurveyTaskDetail')->where('surveyTrxUserid', '[0-9]+');
Route::get('survey/incomplete/user', 'SurveyController@getUserNotAnswering');


Route::post('survey/task/answer', 'SurveyController@storeAnswer');
Route::get('assessment/{surveyId}', 'AssessmentController@getAssessmentDetail');

Route::get('assessment/questions/{assessmentId}', 'AssessmentController@getAssessmentQuestions');

Route::get('question/group/{groupId}', 'QuestionController@getQuestionByGroup');
Route::post('question', 'QuestionController@store');
Route::delete('question/{question}', 'QuestionController@destroy');
Route::patch('question/toggle/{question}', 'QuestionController@toggleActive');
Route::get('group', 'GroupController@getAll');
Route::post('group', 'GroupController@store');
Route::patch('group', 'GroupController@update');
Route::delete('group/{id}', 'GroupController@delete');





