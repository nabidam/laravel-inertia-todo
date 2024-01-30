<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Todo;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    public function add(Request $request, $id)
    {
        $validated = $request->validate([
            'todo' => 'required|min:3',
        ]);

        $project = Project::findOrFail($id);

        $todo = Todo::create([
            'todo' => $request->input('todo'),
            'project_id' => $project->id
        ]);

        return to_route('projects.show', [
            "id" => $project->id
        ]);
    }

    public function delete(Request $request, $id, $todo_id)
    {
        $project = Project::findOrFail($id);

        $todo = Todo::findOrFail($todo_id);

        $todo->delete();

        return to_route('projects.show', [
            "id" => $project->id
        ]);
    }

    public function toggle(Request $request, $id, $todo_id)
    {
        $project = Project::findOrFail($id);

        $todo = Todo::findOrFail($todo_id);

        $todo->done = !$todo->done;
        $todo->save();

        return to_route('projects.show', [
            "id" => $project->id
        ]);
    }
}
