<?php

namespace App\Http\Controllers\AiChatbot;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Faq;
use App\Models\BlogPost;

class AIContentController extends Controller
{
    public function getUnifiedData()
    {
        $products = Product::with(['features' => function($q) {
            $q->orderBy('display_order', 'asc');
        }])->get()->map(function($product) {
            $featuresText = $product->features->map(function($f) {
                return trim($f->title_left . ' ' . $f->title_right . ': ' . $f->description);
            })->filter()->implode("\n");

            $contentParts = array_filter([
                $product->short_description,
                $product->description,
                "Loại sản phẩm: " . $product->product_type,
                "Ứng dụng: " . $product->application,
                "Liều lượng: " . $product->dosage,
                "Tần suất: " . $product->frequency,
                "Quy cách: " . $product->packaging,
                "Hạn sử dụng: " . $product->shelf_life,
                "Chứng nhận: " . $product->certification,
                "Thông tin an toàn: " . $product->safety,
                $featuresText,
            ]);

            return [
                'id' => 'product-' . $product->id,
                'type' => 'product',
                'title' => $product->name,
                'content' => implode("\n", $contentParts),
            ];
        });

        $faqs = Faq::all()->map(function($faq) {
            return [
                'id' => 'faq-' . $faq->id,
                'type' => 'faq',
                'title' => $faq->question,
                'content' => $faq->answer,
            ];
        });

        $posts = BlogPost::all()->map(function($post) {
            $content = trim($post->short_content) !== ''
                ? ($post->short_content . "\n\n" . $post->content)
                : $post->content;

            return [
                'id' => 'post-' . $post->id,
                'type' => 'post',
                'title' => $post->title,
                'content' => $content,
            ];
        });

        $unifiedData = $products->concat($faqs)->concat($posts)->values();

        return response()->json($unifiedData);
    }
}
