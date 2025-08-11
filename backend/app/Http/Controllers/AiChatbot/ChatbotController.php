<?php

namespace App\Http\Controllers\AiChatbot;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ChatbotController extends Controller
{
    public function handleChatbot(Request $request)
    {
        $response = Http::post('http://localhost:5000/api/chatbot', [
            'message' => $request->input('message')
        ]);

        return response()->json(['reply' => $response->json()['reply']]);
    }
}
