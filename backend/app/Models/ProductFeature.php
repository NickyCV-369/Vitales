<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductFeature extends Model
{
    protected $table = 'product_features';

    protected $primaryKey = 'id';

    protected $fillable = [
        'product_id',
        'title_left',
        'title_right',
        'description',
        'display_order',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id');
    }
}
