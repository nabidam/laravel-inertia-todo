<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description'
    ];

    public function todos(): HasMany
    {
        return $this->hasMany(Todo::class, 'project_id');
    }

    public function pendingTodos(): HasMany
    {
        return $this->hasMany(Todo::class, 'project_id')->where('done', false);
    }

    public function doneTodos(): HasMany
    {
        return $this->hasMany(Todo::class, 'project_id')->where('done', true);
    }
}
