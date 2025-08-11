<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'products';

    protected $primaryKey = 'id';

    protected $fillable = [
        'category_id',
        'name',
        'short_description',
        'images',
        'rating',
        'rating_text',
        'product_code',
        'distributor_availability',
        'tags',
        'description',
        'product_type',
        'application',
        'dosage',
        'frequency',
        'packaging',
        'shelf_life',
        'certification',
        'safety',
    ];

    protected $casts = [
        'images' => 'array',
        'distributor_availability' => 'boolean',
        'rating' => 'float',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }

    public function features()
    {
        return $this->hasMany(ProductFeature::class, 'product_id');
    }
}
