<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $projects = Project::withCount('pendingTodos')->get();
        return Inertia::render('Home', [
            'projects' => $projects
        ]);
    }
}
