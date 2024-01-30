<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{
    public function index(Request $request)
    {
        $projects = Project::withCount('pendingTodos')->get();
        return Inertia::render('Home', [
            'projects' => $projects
        ]);
    }

    public function show(Request $request, $id)
    {
        $project = Project::with('todos')->findOrFail($id);
        $projects = Project::withCount('pendingTodos')->get();

        return Inertia::render('Project', [
            'project' => $project,
            'projects' => $projects,
        ]);
    }

    public function create(Request $request)
    {
        $validated = $request->validate([
            'project' => 'required|min:3',
        ]);

        $project = Project::create([
            'title' => $request->input('project')
        ]);

        return to_route('projects.show', [
            "id" => $project->id
        ]);
    }

    public function delete(Request $request, $id)
    {
        $project = Project::findOrFail($id);

        $project->delete();

        return to_route('home');
    }
}
