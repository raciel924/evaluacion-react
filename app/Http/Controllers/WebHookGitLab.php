<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class WebHookGitLab extends Controller
{
    public function webhookTest( Request $request){
       // Verifica la autenticación si estás utilizando un Secret Token
        $this->validateGitLabWebhook($request);

        // Lógica para manejar el webhook
        // Accede a la información de la solicitud con $request->all()
        dd('si llega');
        // Por ejemplo, loguea la solicitud
        \Log::info('GitLab Webhook Received', ['data' => $request->all()]);

        return response('Webhook received successfully', 200);
    }
}
