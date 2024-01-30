<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\TodoController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [HomeController::class, 'index'])->name('home');


Route::prefix('projects')->group(function () {
    Route::get('/', [ProjectController::class, 'index'])->name('projects');
    Route::get('/{id}', [ProjectController::class, 'show'])->name('projects.show');
    Route::delete('/{id}', [ProjectController::class, 'delete'])->name('projects.delete');
    Route::post('/', [ProjectController::class, 'create'])->name('projects.create');

    Route::prefix('/{id}/todos')->group(function () {
        Route::post('/', [TodoController::class, 'add'])->name('projects.todos.add');
        Route::delete('/{todo_id}', [TodoController::class, 'delete'])->name('projects.todos.delete');
        Route::post('/{todo_id}/toggle', [TodoController::class, 'toggle'])->name('projects.todos.toggle');
    });
});
