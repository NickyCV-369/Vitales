<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AiChatbot\ChatbotController;
use App\Http\Controllers\AiChatbot\AIContentController;


Route::post('chatbot', [ChatbotController::class, 'handleChatbot']);
Route::get('ai-data', [AIContentController::class, 'getUnifiedData']);
